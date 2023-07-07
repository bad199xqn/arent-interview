import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { KcalChartPropsType } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTick(props: any) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#fff">
        {payload.value}
      </text>
    </g>
  );
}

export function KcalChart(props: KcalChartPropsType) {
  const {
    data,
    containerWidth = "100%",
    containerHeight = 204,
    width = 500,
    height = 204,
  } = props;
  return (
    <ResponsiveContainer width={containerWidth} height={containerHeight}>
      <LineChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 10,
          right: 12,
          left: 12,
          bottom: 0,
        }}
      >
        <CartesianGrid horizontal={false} />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          axisLine={false}
          tick={CustomTick}
        />
        <Tooltip />
        <Line
          connectNulls
          type="linear"
          dataKey="duration"
          stroke="#FFFFFF"
          fill="#FFFFFF"
          strokeWidth={3}
        />
        <Line
          connectNulls
          type="linear"
          dataKey="kcal"
          stroke="#FFCC21"
          fill="#FFCC21"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
