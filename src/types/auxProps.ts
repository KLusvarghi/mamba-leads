// interface dos dados recebidos da API
export interface IDataProps {
  date: string; // Exemplo: "01/11/24"
  mambaleads: number; // Número de leads da Mamba
  leadsWon: number; // Número de leads ganhos
  reunioesAgendadas: Record<string, number>; // Objeto com nomes e quantidades de reuniões agendadas por pessoa
  reunioesRealizadas: Record<string, number>; // Objeto com nomes e quantidades de reuniões realizadas por pessoa
  reunioesRealizadasAcademy: Record<string, number>; // Objeto com nomes e quantidades de reuniões realizadas pela Academy por pessoa
  totalReunioesAgendadas: number; // Total de reuniões agendadas
  totalReunioesRealizadas: number; // Total de reuniões realizadas
  totalReunioesRealizadasAcademy: number; // Total de reuniões realizadas pela Academy
  totalGeralReunioes: number; // Total geral de todas as reuniões
  }
  
  // interface dos dados transformados para o gráfico
export interface TransformedData {
    dia: string;
    Reuniões: number;
    "Meta Diária": number;
  }

  // interface que recebe um children
export interface IChildrenProps {
    children: React.ReactNode
  }


// Interface para Leads
export interface ILeadsProps {
  name: "Leads";
  data: Array<{
    date: string;
    mambaleads: number;
  }>;
}

// Interface para Reuniões Agendadas
export interface IReunioesAgendadasProps {
  name: "Reuniões Agendadas";
  data: Array<{
    date: string;
    reunioesAgendadas: Record<string, number>;
    totalReunioesAgendadas: number;
    totalGeralReunioes: number;
  }>;
}

// Interface para Wons
export interface IWonsProps {
  name: "Wons";
  data: Array<{
    date: string;
    leadsWon: number;
    totalGeralReunioes: number;
  }>;
}

// Interface para Reuniões Realizadas
export interface IReunioesRealizadasProps {
  name: "Reuniões Realizadas";
  data: Array<{
    date: string;
    reunioesRealizadas: Record<string, number>;
    reunioesRealizadasAcademy: Record<string, number>;
    totalReunioesRealizadas: number;
    totalReunioesRealizadasAcademy: number;
    totalGeralReunioes: number;
  }>;
}