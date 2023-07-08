import { convertDateTimezoneLocal } from "@/utils";
import { RecordCardPropsType } from "./types";

export function RecordCard(props: RecordCardPropsType) {
  const {id, time, title, content} = props
  return(
    <div className="w-[14.4375rem] h-[14.4375rem] border-2 border-grayArent-400 p-4">
      {convertDateTimezoneLocal(time).split(" ").map(t => <p className="text-lg font-inter" key={`record-${id}-${t}`}>{t}</p>)}
      <p className="text-xs mt-2">{title}</p>
      <p className="text-xs line-clamp-5">{content}</p>
    </div>
  )
}