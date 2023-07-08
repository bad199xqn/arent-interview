import { MealCard } from "./MealCard";
import { MealGridPropsType } from "./types";

export function MealGrid(props:MealGridPropsType) {
  const {mealList} = props
  console.log("MealGrid",mealList)
  return (
    <div>
      <div className="meal-grid grid grid-cols-4 gap-x-2 gap-y-2 w-full">
        {mealList.map(meal => (
          <MealCard
            id={meal.id}
            time={meal.time}
            name={meal.name}
            image={meal.image}
            type={meal.type}
            cardKey={String(meal.id)}
          />
        ))}
      </div>
    </div>
  )
}