import { classNames } from "@/utils";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartButtonGroupPropsType } from "./types";

const data = [
  { name: '1月', kcal: 2190, duration: 3600 },
  { name: '2月', kcal: 2090, duration: 3900 },
  { name: '3月', kcal: 2000, duration: 3700 },
  { name: '4月' },
  { name: '5月', kcal: 1890, duration: 3500 },
  { name: '6月', kcal: 2390, duration: 3800 },
  { name: '7月', kcal: 2290, duration: 3700 },
  { name: '8月', kcal: 2100, duration: 3300 },
  { name: '9月' },
  { name: '10月', kcal: 1890, duration: 3900 },
  { name: '11月', kcal: 2390, duration: 3200 },
  { name: '12月', kcal: 1990, duration: 3700 },
];

const chartButtonGroup = [
  { id: 1, title: "日", isActive: false },
  { id: 2, title: "週", isActive: false },
  { id: 3, title: "月", isActive: true },
  { id: 4, title: "年", isActive: false },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTick(props: any) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#fff"
      >
        {payload.value}
      </text>
    </g>
  );
}

function ChartButtonGroup({buttonGroupData}:ChartButtonGroupPropsType) {
  return (
    <div className="flex gap-4">
      {buttonGroupData.map(buttonData =>
        <button
          key={`record-chart-button-${buttonData.id}`}
          className={
            classNames(buttonData.isActive ? "bg-primary-300 text-light" : "bg-light text-primary-300", 
            "w-14 h-6 rounded-xl text-center text-[15px]")
          }
        >
          {buttonData.title}
        </button>
      )}
    </div>
  )
}

export function RecordChart() {
  return (
    <div className="w-full bg-dark-500 px-6 py-4">
      <div className="flex">
        <p className="text-[15px] w-24 h-9 text-light leading-[18px]">BODY RECORD</p>
        <p className="text-[1.375rem] text-light">2021.05.21</p>
      </div>
      <div className="px-[1.625rem] text-xs mb-2">
        <ResponsiveContainer width="100%" height={204}>
          <LineChart
            width={500}
            height={204}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis dataKey="name" interval="preserveStartEnd" axisLine={false} tick={CustomTick} />
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
      </div>
      <ChartButtonGroup buttonGroupData={chartButtonGroup}/>
    </div>
  )
}