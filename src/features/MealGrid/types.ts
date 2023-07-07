export type MealType = {
  id: number, 
  name: string,
  time: string,
  image: string
}

export type MealGridPropsType = {
  mealList: MealType[]
}

export type MealCardPropsType = {
  id: number, 
  name: string,
  time: string,
  cardKey: string,
  image: string
}