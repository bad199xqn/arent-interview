import { KcalChart } from "@/components/KcalChart";
import MainPhoto from "../../assets/images/main-photo.png";
import { kcalChartData } from "@/mock";
import { PercentChart } from "./PercentChart";

export function MainStatistics() {
  return (
    <div className="w-full flex flex-wrap">
      <div
        className="w-[33.75rem] h-[19.5rem] flex-none bg-primary-400"
        style={{
          background: `url(${MainPhoto}), lightgray 0px 0px / 100% 100% no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center center",

        }}
      >
        <div className="w-full h-full relative">
          <PercentChart />
        </div>
      </div>
      <div className="w-[44rem] h-[19.5rem] flex-auto bg-dark-600 px-[3.375rem] py-3 text-xs">
        <KcalChart data={kcalChartData} containerHeight={294} height={294} />
      </div>
    </div>
  );
}
