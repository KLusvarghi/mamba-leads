import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Button from "../Button/Button";

interface INavProps {
  renderings: number;
  graphics: ReactElement[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedGraphic: Dispatch<SetStateAction<ReactElement | null>>;
  setCurrentGroup: (index: number) => void; // Função para definir o grupo atual
}

const Nav = ({
  renderings,
  graphics,
  setIsModalOpen,
  setSelectedGraphic,
  setCurrentGroup
}: INavProps) => {
  
  const openModal = (index: number) => {
    setSelectedGraphic(graphics[index]);
    setIsModalOpen(true);
  };

  const graphicsNames = [
    "Leads",
    "Reuniões Agendadas",
    "Wons",
    "Reuniões Realizadas",
  ];

  return (
    <nav className="mx-auto flex gap-3 rounded-lg px-12 py-4">
      {Array.from({ length: renderings }, (_, index) => (
        <li key={`group-${index}`}>
          <Button
            onClick={() => setCurrentGroup(index)} // Define o grupo atual
            className=""
          >
            {`${graphicsNames[index * 2]} e ${graphicsNames[index * 2 + 1]}`}
          </Button>
        </li>
      ))}

      {graphicsNames.map((_, index) => (
        <Button key={index} onClick={() => openModal(index)} className="">
          {graphicsNames[index]}
        </Button>
      ))}
    </nav>
  );
};

export default Nav;
