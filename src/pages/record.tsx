import { useState, useEffect } from "react";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { DiaryGrid, RecordType } from "@/features/DiaryGrid";
import { RecordChart } from "@/features/RecordChart";
import { RecordExercise } from "@/features/RecordExercise";
import { RecordNavButton } from "@/features/RecordNavButton";
import { recordListData } from "@/mock";
import { scrollToElementById } from "@/utils";
import { PrivateView } from "@/features/Layout";

const getDiarys = (pageSize: number, pageNumber: number) => {
  const data = recordListData;
  const dataSize = data.length;
  const startIndex = pageSize * (pageNumber - 1);
  const endIndex =
    startIndex + pageSize < dataSize ? startIndex + pageSize - 1 : dataSize - 1;
  if (startIndex <= endIndex) {
    return data.filter(
      (_item, index) => index >= startIndex && index <= endIndex
    );
  }

  return [];
};

export function RecordPage() {
  const [diaryList, setDiaryList] = useState<RecordType[]>([]);
  const [diaryPage, setDiaryPage] = useState(1);
  const diarySize = 8;

  const handleLoadMore = () => {
    setDiaryPage((page) => page + 1);
  };

  useEffect(() => {
    const initDiaryList = getDiarys(diarySize, diaryPage);
    setDiaryList(initDiaryList);
  }, []);

  useEffect(() => {
    if (diaryPage > 1) {
      const moreDiaryList = getDiarys(diarySize, diaryPage);
      setDiaryList((list) => [...list, ...moreDiaryList]);
    }
  }, [diaryPage]);

  return (
    <>
      <PrivateView>
        <div className="mx-auto xl:max-w-[60rem] pb-16">
          <div className="flex flex-col gap-y-14 mt-14">
            <RecordNavButton onScroll={scrollToElementById} />
            <RecordChart />
            <RecordExercise />
            <DiaryGrid diaryList={diaryList} />
          </div>
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton onLoadMore={handleLoadMore} />
          </div>
        </div>
      </PrivateView>
    </>
  );
}
