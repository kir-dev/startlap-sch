import axios from 'axios'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface FunFact {
  year: number
  text: string
}

export async function funFactOfTheDay(date: Date): Promise<FunFact> {
  const FUN_FACT_API_BASE = 'https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all'
  const response = await axios.get(`${FUN_FACT_API_BASE}/${date.getMonth() + 1}/${date.getDate()}`)

  const chosenEvent = response.data.events[Math.floor(Math.random() * response.data.events.length)]
  return {
    text: chosenEvent.text,
    year: chosenEvent.year,
  }
}

export function fillWith0(input: number, neededLength: number) {
  if (input.toString().length >= neededLength) return input.toString()

  const addedCount = neededLength - input.toString().length
  let answer = ''
  for (let i = 0; i < addedCount; i++) {
    answer += '0'
  }
  answer += input.toString()

  return answer
}

