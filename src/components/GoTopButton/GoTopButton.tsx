import { scrollToTop } from "@/utils";

export function GoTopButton() {
  return (
    <button className="w-12 h-12 rounded-full border border-grayArent-400 bg-light" onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M30.5853 28.042L24.0003 21.6579L17.4153 28.042L16.5391 27.1925L24.0003 19.959L31.4615 27.1925L30.5853 28.042Z" fill="#777777" />
      </svg>
    </button>
  )
}