import { LoadMoreButton } from "@/components/LoadMoreButton";
import { DiaryGrid } from "@/features/DiaryGrid";
import { RecordChart } from "@/features/RecordChart";
import { RecordExercise } from "@/features/RecordExercise";
import { RecordNavButton } from "@/features/RecordNavButton";
import { scrollToElementById } from "@/utils";

export function RecordPage() {

  return (
    <>
      <div className="mx-auto xl:max-w-[60rem] pb-16">
        <div className="flex flex-col gap-y-14 mt-14">
          <RecordNavButton onScroll={scrollToElementById}/>
          <RecordChart />
          <RecordExercise />
          <DiaryGrid />
        </div>
        <div className="mt-[1.625rem] text-center">
          <LoadMoreButton />
        </div>
      </div>
    </>
  );
}
