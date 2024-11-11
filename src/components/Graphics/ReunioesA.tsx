import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Wrapper } from "../ui";
import { IReunioesAgendadasProps } from "../../types/auxProps";

const ReunioesA = ({ name, data }: IReunioesAgendadasProps) => {
  return (
    <Wrapper>
      <h1>{name}</h1>
      <ComposedChart
        className="mx-auto w-full"
        width={1200}
        height={270}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#E5ADFF" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalReunioesAgendadas" barSize={60} fill="#fff" />
        <Line type="monotone" dataKey="Total Geral" stroke="#000" />
      </ComposedChart>
    </Wrapper>
  );
};

export default ReunioesA;
