import { LoadMoreButton } from "@/components/LoadMoreButton";
import { DiaryGrid } from "@/features/DiaryGrid";
import { DefaultLayout } from "@/features/Layout";
import { RecordChart } from "@/features/RecordChart";
import { RecordNavButton } from "@/features/RecordNavButton";

export function RecordPage() {
  return (
    <>
      <DefaultLayout>
        <div className="w-full">
          <div className="flex flex-col gap-y-14 mt-14">
            <RecordNavButton />
            <RecordChart />
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
