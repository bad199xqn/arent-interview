import { MEAL_BUTTON_GROUP } from "@/constants";
import { MealButtonGroupPropsType } from "./types";

export function MealButtonGroup(props: MealButtonGroupPropsType) {
  const { onFilter } = props;
  return (
    <div className="w-full flex gap-x-[5.25rem] justify-center">
      {MEAL_BUTTON_GROUP.map((btn) => (
        <div
          className="relative cursor-pointer"
          onClick={() => onFilter(btn.name)}
          key={`btn-filter-${btn.name}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={116}
            height={134}
            viewBox="0 0 116 134"
            fill="none"
          >
            <path
              d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z"
              fill="url(#paint0_linear_0_100)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_100"
                x1="25.9565"
                y1="165.202"
                x2="147.019"
                y2="118.302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFCC21" />
                <stop offset={1} stopColor="#FF963C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-1">
            {btn.icon}
            <p className="text-light text-xl font-inter">{btn.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
