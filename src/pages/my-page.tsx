import { LoadMoreButton } from "@/components/LoadMoreButton";
import { MainStatistics } from "@/features/MainStatistics";
import { MealButtonGroup } from "@/features/MealButtonGroup";
import { MealGrid } from "@/features/MealGrid";

export function MyPage() {
  return (
    <>
        <div className="mx-auto xl:max-w-7xl pb-16">
          <MainStatistics />
          <div className="mx-auto xl:max-w-[60rem] mt-[1.375rem]">
            <div className="flex flex-col gap-y-6">
              <MealButtonGroup />
              <MealGrid />
            </div>
            <div className="mt-[1.625rem] text-center">
              <LoadMoreButton />
            </div>
          </div>
        </div>
    </>
  );
}
