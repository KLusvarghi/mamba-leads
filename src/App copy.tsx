import { Container } from "./components/ui";
import Grafico from "./components/Graphics";
import Modal from "./components/Modal/Modal";
import { useEffect, useState, ReactElement } from "react";
import Nav from "./components/Nav/Nav";

function App() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [selectedGraphic, setSelectedGraphic] = useState<ReactElement | null>(
    null,
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const graphics = [
    <Grafico name="Leads" />,
    <Grafico name="Reuniões Agendadas" />,
    <Grafico name="Wons" />,
    <Grafico name="Reuniões Realizadas" />,
  ];

  // Agrupa os gráficos em pares
  const graphicGroups = [
    [graphics[0], graphics[1]],
    [graphics[2], graphics[3]],
  ];

  const graphicsNames = [
    "Leads",
    "Reuniões Agendadas",
    "Wons",
    "Reuniões Realizadas",
  ];

  // Alternância automática entre os grupos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prevGroup) => (prevGroup + 1) % graphicGroups.length);
    }, 30000); // Alterna a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen relative flex h-screen flex-col justify-center gap-6">
      {/* Renderiza o grupo atual de gráficos */}
      {graphicGroups[currentGroup].map((GraphicComponent, index) => (
        <Container key={index}>{GraphicComponent}</Container>
      ))}

      <Nav
        graphicsNames={graphicsNames}
        setIsModalOpen={setIsModalOpen}
        graphics={graphics}
        renderings={graphicGroups.length}
        setSelectedGraphic={setSelectedGraphic}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>{selectedGraphic}</Modal>
      )}
    </div>
  );
}

export default App;
