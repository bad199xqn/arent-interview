import { LoadMoreButton } from "@/components/LoadMoreButton";
import { DefaultLayout } from "@/features/Layout";
import { MealGrid } from "@/features/MealGrid";
import { RecordNavButton } from "@/features/RecordNavButton";

export function MyPage() {
  return (
    <>
      <DefaultLayout>
        <div className="w-full">
          <div className="flex flex-col gap-y-6">
            <RecordNavButton />
            <MealGrid />
          </div>
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
