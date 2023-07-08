import { LazyImage } from "@/components/LazyImage";
import { MONTH_YEAR_FORMAT } from "@/constants";
import { convertDateTimezoneLocal } from "@/utils";
import { MealCardPropsType } from "./types";

export function MealCard(props: MealCardPropsType) {
  const {time, image, cardKey, type} = props
  return(
    <div className="w-[14.625rem] h-[14.625rem]" key={cardKey}>
      <div className="card-image h-full bg-red-100 relative">
        <LazyImage width={234} height={144} src={image} />
        <div className="post-time w-[120px] h-[32px] absolute z-1 bottom-0 left-0 p-2 bg-primary-300 flex items-center">
            <p className="text-light text-[15px]">{`${convertDateTimezoneLocal(time, MONTH_YEAR_FORMAT)}.${type}`}</p>
        </div>
      </div>
    </div>
  )
}