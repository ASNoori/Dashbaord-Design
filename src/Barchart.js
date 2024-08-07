import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5",
    uv: 4000,
    pv: 9500,
    // amt: 2400,
  },
  {
    name: "9",
    uv: 4000,
    pv: 4000,
    // amt: 2210,
  },
  {
    name: "11",
    uv: 5100,
    pv: 5100,
    // amt: 2290,
  },
  {
    name: "13",
    uv: 5000,
    pv: 5000,
    // amt: 2000,
  },
  {
    name: "15",
    uv: 5200,
    pv: 5300,
    // amt: 2181,
  },
  {
    name: "17",
    uv: 5100,
    pv: 10100,
    // amt: 2500,
  },
  {
    name: "19",
    uv: 10100,
    pv: 9000,
    // amt: 2100,
  },
  {
    name: "21",
    uv: 11000,
    pv: 16000,
    // amt: 2100,
  },
  {
    name: "23",
    uv: 4800,
    pv: 5100,
    // amt: 2100,
  },
  {
    name: "25",
    uv: 11000,
    pv: 5000,
    // amt: 2100,
  },
  {
    name: "27",
    uv: 5400,
    pv: 5100,
    // amt: 2100,
  },
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis
          tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
          tickCount={5} // Control the number of ticks
          domain={[0, "dataMax"]} // Set domain to start from 0 and extend to the maximum value
          ticks={[0, 5000, 10000, 15000]}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          fill="#8c73fd"
          radius={[10, 10, 10, 10]}
          activeBar={<Rectangle fill="#8c73fd" stroke="#8c73fd" />}
        />
        <Bar
          dataKey="uv"
          fill="#8c73fd"
          radius={[10, 10, 10, 10]}
          activeBar={<Rectangle fill="#8c73fd" stroke="#8c73fd" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
