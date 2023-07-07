import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 80 },
  { name: "Group B", value: 20 },
];
const COLORS = ["#fff", "none"];

export function PercentChart() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={181} height={181}>
          <Pie
            data={data}
            cx="11.25rem"
            cy="4.25rem"
            innerRadius={88}
            outerRadius={90.5}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={-360}
          >
            {data.map((entry, index) => (
              <Cell
                key={`${entry}-stat`}
                fill={COLORS[index % COLORS.length]}
                stroke="none"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[6.375rem] h-[1.875rem] text-light flex items-end gap-0.5">
        <p className="text-lg leading-none">{`05/21`}</p>
        <p className="text-[1.5625rem] leading-none">{`${data[0].value}%`}</p>
      </div>
    </>
  );
}
