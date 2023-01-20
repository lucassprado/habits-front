import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'

import { HabitDay } from './HabitDay'

const WEEK_DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const SUMMARY_DATES = generateDatesFromYearBeginning()
const MINIMUM_SUMMARY_DATES_SIZE = 18 * 7 // 18 weeks
const AMOUNT_OF_DAYS_TO_FILL = MINIMUM_SUMMARY_DATES_SIZE - SUMMARY_DATES.length

export function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {WEEK_DAYS.map((weekDay, index) => {
          return (
            <div
              key={`${weekDay}-${index}`}
              className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center"
            >
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {SUMMARY_DATES.map(date => {
          return (
            <HabitDay
              key={date.toString()}
              amount={5}
              completed={Math.round(Math.random() * 5)}
            />
          )
        })}

        {AMOUNT_OF_DAYS_TO_FILL > 0 && Array.from({ length: AMOUNT_OF_DAYS_TO_FILL }).map((_, index) => {
          return (
            <div
              key={index}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          )
        })}
      </div>
    </div>
  )
}