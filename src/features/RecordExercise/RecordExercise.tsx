import { exerciseListData } from "@/mock"
import { ExerciseType } from "./types"
import { RECORD_PAGE_NAVIGATE_BUTTONS } from "@/constants"

function ExerciseItem(props: ExerciseType) {
  const {itemKey, exercise, duration, kcal} = props
  return (
    <div key={itemKey} className="flex justify-between w-full border-b border-b-grayArent-400 items-start pt-2 pb-1">
      <div className="flex gap-1">
        <p>●</p>
        <div className="text-[15px]">
          <p className="text-light">{exercise}</p>
          <p className="text-primary-300 mt-1">{`${kcal}kcal`}</p>
        </div>
      </div>
      <p className="text-primary-300 text-lg leading-[22px]">{duration}</p>
    </div>
  )
}

export function RecordExercise() {
  return (
    <div className="w-full bg-dark-500 px-6 py-4" id={RECORD_PAGE_NAVIGATE_BUTTONS[1]?.id}>
      <div className="flex font-inter">
        <p className="text-[15px] w-24 h-9 text-light leading-[18px]">MY EXERCISE</p>
        <p className="text-[1.375rem] text-light">2021.05.21</p>
      </div>
      <div className="custom-scroll-bar px-[1.625rem] text-xs mb-2 h-48 overflow-y-auto">
        <div className="grid grid-cols-2 gap-x-10">
        {exerciseListData.map(exercise => (
          <ExerciseItem
            id={exercise.id}
            exercise={exercise.exercise}
            duration={exercise.duration}
            kcal={exercise.kcal}
            itemKey={`exercise-${exercise.id}`}
          />
        ))}
        </div>
      </div>

    </div>
  )
}