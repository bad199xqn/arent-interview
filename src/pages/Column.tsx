import { LoadMoreButton } from "@/components/LoadMoreButton";
import { ColumnNavButton } from "@/features/ColumnNavButton";
import { ColumnPostGrid } from "@/features/ColumnPostGrid";
import { postListData } from "@/mock";

export function ColumnPage() {
  return (
    <>
        <div className="mx-auto xl:max-w-[60rem] pb-16">
          <ColumnNavButton />
          <ColumnPostGrid postList={postListData} />
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton />
          </div>
        </div>
    </>
  );
}
