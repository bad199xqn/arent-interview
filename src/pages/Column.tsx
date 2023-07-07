import { LoadMoreButton } from "@/components/LoadMoreButton";
import { ColumnNavButton } from "@/features/ColumnNavButton";
import { ColumnPostGrid } from "@/features/ColumnPostGrid";
import { DefaultLayout } from "@/features/Layout";
import { postListData } from "@/mock";

export function ColumnPage() {
  return (
    <>
      <DefaultLayout>
        <div className="w-full">
          <ColumnNavButton />
          <ColumnPostGrid postList={postListData} />
          <div className="mt-[1.625rem] text-center">
            <LoadMoreButton />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
