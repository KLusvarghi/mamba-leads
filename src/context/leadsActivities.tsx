import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IDataProps } from "../types/auxProps";

export interface ISystemLeadsActivitiesContext {
  newData: IDataProps[];
  error: boolean;
  setError: (value: boolean) => void;
}

export const SystemLeadsActivitiesContext =
  createContext<ISystemLeadsActivitiesContext>({
    newData: [],
    error: false,
    setError: () => {},
  });

export const SystemLeadsActivitieProvider = ({ children }: IChildrenProps) => {
  const [newData, setNewData] = useState<IDataProps[]>([]); // O que é retornado para cada gráfico
  const [error, setError] = useState<boolean>(false);

  // Função para transformar os dados da API, retornando apenas o dia
  const transformData = (data: IDataProps[]): IDataProps[] => {
    return data.map((item) => {
      const day = item.date.split("/")[2]; // Extrai o dia da string "YYYY/MM/DD"
      return {
        ...item,
        date: day, // Substitui "date" pelo dia extraído
      };
    });
  };

  // Função para buscar e transformar dados da API
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/meetings");
      const json: IDataProps[] = await response.json();
      console.log("Fetched Data:", json);

      const transformedData = transformData(json);
      console.log("Transformed Data:", transformedData);

      setNewData(transformedData); // Define `newData` com os dados transformados
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError(true);
    }
  };

  // Efeito para buscar os dados uma vez e depois a cada 2 minutos
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); // 10 segundos para teste (ajuste para 2 minutos em produção)
    return () => clearInterval(intervalId);
  }, []);

  const context = {
    newData,
    error,
    setError,
  };

  return (
    <SystemLeadsActivitiesContext.Provider value={context}>
      {children}
    </SystemLeadsActivitiesContext.Provider>
  );
};
