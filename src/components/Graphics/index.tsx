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
// import useSystemLeadsActivitiesContext from "../../hooks/useSystemLeadsActivities";
import { IDataProps } from "../../types/auxProps";

interface IGraphicProps {
  name: string
  data: IDataProps[]
}

export default function Graphic({name, data}: IGraphicProps) {

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
        <XAxis dataKey="dia" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Reuniões" barSize={60} fill="#fff" />
        <Line type="monotone" dataKey="Meta Diária" stroke="#000" />
      </ComposedChart>
    </Wrapper>
  );
}
