import {useState, useEffect} from "react";
import { LoadMoreButton } from "@/components/LoadMoreButton";
import { ColumnNavButton } from "@/features/ColumnNavButton";
import { ColumnPostGrid, ColumnPostType } from "@/features/ColumnPostGrid";
import { postListData } from "@/mock";

const getPosts = (pageSize: number, pageNumber: number) => {
  const data = postListData;
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

export function ColumnPage() {
  const [postList, setPostList] = useState<ColumnPostType[]>([]);
  const [postPage, setPostPage] = useState(1);
  const postSize = 8;

  const handleLoadMore = () => {
    setPostPage(page => page + 1)
  }

  useEffect(() => {
    const initDiaryList = getPosts(postSize, postPage);
    setPostList(initDiaryList);
  }, []);

  useEffect(() => {
    if (postPage > 1) {
      const moreDiaryList = getPosts(postSize, postPage);
      setPostList(list => [...list, ...moreDiaryList]);
    }
  }, [postPage]);

  return (
    <>
        <div className="mx-auto xl:max-w-[60rem] pb-16">
          <ColumnNavButton />
          <ColumnPostGrid postList={postList} />
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton onLoadMore={handleLoadMore}/>
          </div>
        </div>
    </>
  );
}
