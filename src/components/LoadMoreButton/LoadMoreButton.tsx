export type LoadMoreButtonPropsType = {
  onLoadMore: () => void
}
export function LoadMoreButton({onLoadMore}: LoadMoreButtonPropsType) {
  return (
    <button 
    className="w-[18.5rem] h-14 text-center text-light text-[1.125rem] rounded bg-gradient-to-tr from-primary-300 to-primary-400 hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-300"
    onClick={onLoadMore}
    >
      コラムをもっと見る
    </button>
  )
}