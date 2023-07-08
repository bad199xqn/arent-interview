import { classNames } from "@/utils";
import { ChartButtonGroupPropsType } from "./types";
import { KcalChart } from "@/components/KcalChart";
import { kcalChartData } from "@/mock";
import { RECORD_PAGE_NAVIGATE_BUTTONS } from "@/constants";

const chartButtonGroup = [
  { id: 1, title: "日", isActive: false },
  { id: 2, title: "週", isActive: false },
  { id: 3, title: "月", isActive: true },
  { id: 4, title: "年", isActive: false },
]

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
    <div className="w-full bg-dark-500 px-6 py-4" id={RECORD_PAGE_NAVIGATE_BUTTONS[0]?.id}>
      <div className="flex">
        <p className="text-[15px] w-24 h-9 text-light leading-[18px]">BODY RECORD</p>
        <p className="text-[1.375rem] text-light">2021.05.21</p>
      </div>
      <div className="px-[1.625rem] text-xs mb-2">
        <KcalChart data={kcalChartData} />
      </div>
      <ChartButtonGroup buttonGroupData={chartButtonGroup}/>
    </div>
  )
}