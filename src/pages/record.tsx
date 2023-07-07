import { LoadMoreButton } from "@/components/LoadMoreButton";
import { DiaryGrid } from "@/features/DiaryGrid";
import { DefaultLayout } from "@/features/Layout";
import { RecordChart } from "@/features/RecordChart";
import { RecordExercise } from "@/features/RecordExercise";
import { RecordNavButton } from "@/features/RecordNavButton";

export function RecordPage() {
  return (
    <>
      <DefaultLayout>
        <div className="mx-auto xl:max-w-[60rem] pb-16">
          <div className="flex flex-col gap-y-14 mt-14">
            <RecordNavButton />
            <RecordChart />
            <RecordExercise />
            <DiaryGrid />
          </div>
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
