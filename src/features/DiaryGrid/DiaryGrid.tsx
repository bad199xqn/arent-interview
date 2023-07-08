import { recordListData } from "@/mock";
import { RecordCard } from "./RecordCard";
import { RECORD_PAGE_NAVIGATE_BUTTONS } from "@/constants";

export function DiaryGrid() {
  return (
    <div className="w-full" id={RECORD_PAGE_NAVIGATE_BUTTONS[2]?.id}>
      <p className="text-[1.375rem]">MY DIARY</p>
      <div className="record-grid grid grid-cols-4 gap-x-3 gap-y-3 w-full">
        {recordListData.map(record => (
          <RecordCard
            id={record.id}
            time={record.time}
            title={record.title}
            content={record.content}
            cardKey={String(record.id)}
          />
        ))}
      </div>
    </div>
  )
}