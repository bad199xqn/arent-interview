import { RECORD_PAGE_NAVIGATE_BUTTONS } from "@/constants";
import { RecordNavButtonPropsType } from "./types";

export function RecordNavButton(props:RecordNavButtonPropsType) {
  const {onScroll} = props

  return (
    <div className="column-nav-button-grid grid grid-cols-3 gap-x-12 gap-y-8 w-full">
      {RECORD_PAGE_NAVIGATE_BUTTONS.map((button, index) => (
        <div
          className="w-72 h-72 border-[1.5rem] border-primary-300 cursor-pointer"
          key={`record-page-navigation-${index}`}
          onClick={() => onScroll(button.id)}
        >
          <div className="h-full w-full flex flex-col justify-center items-center bg-dark-600" style={{ backgroundImage: `url(${button.image})` }}>
            <p className="line-clamp-2 text-[1.5625rem] leading-7 text-primary-300">{button.engTitle}</p>
            <div className="text-center bg-primary-400 w-40 h-5 mt-3">
              <p className="text-light text-[1.125rem] text-sm">{button.jpTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}