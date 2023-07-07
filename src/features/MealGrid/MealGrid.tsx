import { mealListData } from "@/mock";
import { MealCard } from "./MealCard";

export function MealGrid() {
  return (
    <div>
      <div className="meal-grid grid grid-cols-4 gap-x-2 gap-y-2 w-full">
        {mealListData.map(meal => (
          <MealCard
            id={meal.id}
            time={meal.time}
            name={meal.name}
            image={meal.image}
            cardKey={String(meal.id)}
          />
        ))}
      </div>
    </div>
  )
}