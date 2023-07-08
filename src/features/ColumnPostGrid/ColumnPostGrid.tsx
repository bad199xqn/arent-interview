import { PostCard } from "./PostCard";
import { ColumnPostGridPropsType } from "./types";

export function ColumnPostGrid(props: ColumnPostGridPropsType) {
  const { postList } = props;

  return (
    <div className="column-post-grid grid grid-cols-4 gap-x-2 gap-y-4 w-full">
      {postList.map((post) => (
        <div key={post.id}>
          <PostCard
            id={post.id}
            title={post.title}
            time={post.time}
            image={post.image}
            tags={post.tags}
          />
        </div>
      ))}
    </div>
  );
}
