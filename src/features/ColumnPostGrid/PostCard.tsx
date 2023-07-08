import { LazyImage } from "@/components/LazyImage"
import { convertDateTimezoneLocal } from "@/utils"
import { PostCardPropsType } from "./types"

export function PostCard(props: PostCardPropsType) {
  const { image, time, title, tags, id, cardKey } = props
  return (
    <div className="post-card w-[234px] h-[224px]" key={cardKey}>
      <div className="card-image h-[144px] bg-red-100 relative">
        <LazyImage width={234} height={144} src={image} />
        <div className="post-time w-[144px] h-[24px] absolute z-1 bottom-0 left-0 px-2 bg-primary-300 flex items-center justify-between font-inter">
          {convertDateTimezoneLocal(time).split(" ").map(t =>
            <p className="text-light text-[15px]">{t}</p>
          )}
        </div>
      </div>
      <div className="card-title h-[48px] py-[5px] line-clamp-2 text-[15px] cursor-pointer hover:underline">
        {title}
      </div>
      <div className="card-hash-tag py-1.5 flex gap-3">
        {tags.map((tag, index) => (
          <p className="hash-tag-group text-xs text-primary-400 cursor-pointer hover:underline" key={`post-tag-${id}-${index}`}>{tag}</p>
        ))}

      </div>
    </div>
  )
}