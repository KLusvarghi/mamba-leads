import { Container } from "./components/ui";
import Leads from "./components/Graphics/Leads";
import ReunioesA from "./components/Graphics/ReunioesA";
import Wons from "./components/Graphics/Wons";
import ReuniosR from "./components/Graphics/ReuniosR";
import Modal from "./components/Modal/Modal";
import { useEffect, useState, ReactElement, useContext } from "react";
import Nav from "./components/Nav/Nav";
import { SystemLeadsActivitiesContext } from "./context/leadsActivities";

function App() {
  const { newData, error, setError } = useContext(SystemLeadsActivitiesContext);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedGraphic, setSelectedGraphic] = useState<ReactElement | null>(null);

  const graphicNames = ["Leads", "Reuniões Agendadas", "Wons", "Reuniões Realizadas"];

  // Verificação para garantir que `newData` está definido antes de processar os gráficos
  // if (!newData || newData.length === 0) {
  //   return <div>Loading...</div>;
  // }

  // Filtrando dados específicos para cada gráfico
  const leadsData = newData.map(item => ({ date: item.date, mambaleads: item.mambaleads }));
  const reunioesAgendadasData = newData.map(item => ({
    date: item.date,
    reunioesAgendadas: item.reunioesAgendadas,
    totalReunioesAgendadas: item.totalReunioesAgendadas,
    totalGeralReunioes: item.totalGeralReunioes,
  }));
  const wonsData = newData.map(item => ({ date: item.date, leadsWon: item.leadsWon, totalGeralReunioes: item.totalGeralReunioes }));
  const reunioesRealizadasData = newData.map(item => ({
    date: item.date,
    reunioesRealizadas: item.reunioesRealizadas,
    reunioesRealizadasAcademy: item.reunioesRealizadasAcademy,
    totalReunioesRealizadas: item.totalReunioesRealizadas,
    totalReunioesRealizadasAcademy: item.totalReunioesRealizadasAcademy,
    totalGeralReunioes: item.totalGeralReunioes,
  }));

  // Passando apenas os dados específicos para cada componente
  const graphics = [
    <Leads name="Leads" data={leadsData} />,
    <ReunioesA name="Reuniões Agendadas" data={reunioesAgendadasData} />,
    <Wons name="Wons" data={wonsData} />,
    <ReuniosR name="Reuniões Realizadas" data={reunioesRealizadasData} />,
  ];

  // Agrupa os gráficos em pares
  const graphicGroups = [
    [graphics[0], graphics[1]],
    [graphics[2], graphics[3]],
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
        setIsModalOpen={setIsModalOpen}
        graphics={graphics}
        renderings={graphicGroups.length}
        setSelectedGraphic={setSelectedGraphic}
        setCurrentGroup={setCurrentGroup} // Passa a função para atualizar o grupo
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>{selectedGraphic}</Modal>
      )}
    </div>
  );
}

export default App;
