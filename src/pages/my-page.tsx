import { useState, useEffect, useMemo } from "react";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { MainStatistics } from "@/features/MainStatistics";
import { MealButtonGroup } from "@/features/MealButtonGroup";
import { MealGrid, MealType } from "@/features/MealGrid";
import { mealListData } from "@/mock";
import { MEAL_TYPE } from "@/constants";

const getMeals = (pageSize: number, pageNumber: number, type: string = MEAL_TYPE[4]) => {
  const mealData = type !== MEAL_TYPE[4] ? mealListData.filter((meal) => meal.type === type) : mealListData;
  const dataSize = mealData.length;
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex =
    startIndex + pageSize < dataSize ? startIndex + pageSize - 1 : dataSize - 1;
    console.log({startIndex:startIndex, endIndex:endIndex});
  if (startIndex <= endIndex) {
    return mealData.filter(
      (_meal, index) => index >= startIndex && index <= endIndex
    );
  }

  return [];
};

export function MyPage() {
  const [mealData, setMealData] = useState<MealType[]>([]);
  const [mealType, setMealType] = useState(MEAL_TYPE[4]);
  const [mealPage, setMealPage] = useState(1);
  const mealPageSize = 8;
  const handleMealFilter = (mealType: string) => {
    setMealType(mealType);
  };

  const handleLoadMore = () => {
    setMealPage(page => page + 1)
  }

  useEffect(() => {
    const mealList = getMeals(mealPageSize, mealPage);
    setMealData(mealList);
  }, []);

  useMemo(() => {
    if (mealType !== MEAL_TYPE[4]) {
      setMealPage(1);
    }
  }, [mealType]);

  useMemo(() => {
    const mealList = getMeals(mealPageSize, mealPage, mealType);
    if (mealPage > 1) {
      setMealData(meal => [...meal, ...mealList]);
    }
    else {
      setMealData(mealList);
    }
  }, [mealPage, mealType]);

  return (
    <>
      <div className="mx-auto xl:max-w-7xl pb-16">
        <MainStatistics />
        <div className="mx-auto xl:max-w-[60rem] mt-[1.375rem]">
          <div className="flex flex-col gap-y-6">
            <MealButtonGroup onFilter={handleMealFilter} />
            <MealGrid mealList={mealData} />
          </div>
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton onLoadMore={handleLoadMore}/>
          </div>
        </div>
      </div>
    </>
  );
}
