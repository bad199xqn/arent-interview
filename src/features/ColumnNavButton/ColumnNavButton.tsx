import { COLUMN_PAGE_NAVIGATE_BUTTONS } from "@/constants";

export function ColumnNavButton() {
  return (
    <div className="column-nav-button-grid grid grid-cols-4 gap-x-8 gap-y-6 w-full py-14">
      {COLUMN_PAGE_NAVIGATE_BUTTONS.map((button, index) => (
        <div className="w-[13.5rem] bg-dark-600 hover:bg-dark-500 h-36 px-2 pt-6 pb-[1.375rem] text-center cursor-pointer" key={`column-page-navigation-${index}`}>
          <p className="line-clamp-2 text-[1.375rem] leading-7 text-primary-300 font-inter">{button.engTitle}</p>
          <div className="w-full flex justify-center py-[10px]">
            <div className="w-14 h-0 border-b border-b-light" />
          </div>
          <p className="text-light text-[1.125rem]">{button.jpTitle}</p>
        </div>
      ))}
    </div>
  )
}