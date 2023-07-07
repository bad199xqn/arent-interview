import { ColumnNavButton } from "@/features/ColumnNavButton";
import { ColumnPostGrid } from "@/features/ColumnPostGrid";
import { DefaultLayout } from "@/features/Layout";
import { postListData } from "@/mock";

export function Column() {
  return (
    <>
      <DefaultLayout>
        <div className="w-full">
            <ColumnNavButton />
            <ColumnPostGrid postList={postListData} />
        </div>
      </DefaultLayout>
    </>
  );
}
