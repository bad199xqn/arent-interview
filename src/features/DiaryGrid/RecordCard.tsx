import { convertDateTimezoneLocal } from "@/utils";
import { RecordCardPropsType } from "./types";

export function RecordCard(props: RecordCardPropsType) {
  const {id, time, title, content, cardKey} = props
  return(
    <div className="w-[14.4375rem] h-[14.4375rem] border-2 border-grayArent-400 p-4" key={cardKey}>
      {convertDateTimezoneLocal(time).split(" ").map(t => <p className="text-lg" key={`record-${id}`}>{t}</p>)}
      <p className="text-xs mt-2">{title}</p>
      <p className="text-xs line-clamp-5">{content}</p>
    </div>
  )
}