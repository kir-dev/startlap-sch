'use client'
import { useEffect, useState } from 'react'

import { fillWith0, FunFact, funFactOfTheDay } from '@/lib/utils'

export default function Clock() {
  const [dateState, setDateState] = useState(new Date())
  const [onThisDayEvent, setOnThisDayEvent] = useState<FunFact | undefined>()

  const datestr = `${dateState
    .toLocaleDateString('hu-HU', {
      dateStyle: 'short',
    })
    .split(' ')
    .join('')}
  ${dateState.toLocaleDateString('hu-HU', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })}`

  const day = dateState.getDate()
  useEffect(
    () => {
      funFactOfTheDay(dateState).then(fact => setOnThisDayEvent(fact))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [day]
  )

  useEffect(() => {
    const intervalId = setInterval(() => setDateState(new Date()), 15 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='float group z-50 flex justify-center duration-300 hover:transition-all max-xl:hidden'>
      <div className='m-1 w-fit'>
        <svg xmlns='http://www.w3.org/2000/svg' height='18' viewBox='0 -960 960 960' width='18'>
          <path d='M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z' />
        </svg>
      </div>
      <div className='w-fit flex-col'>
        <div className=' w-fit'>
          <h5 className='text-base'>{datestr}</h5>
        </div>
        <div className='flex w-fit opacity-0 transition duration-300 ease-in-out group-hover:opacity-100'>
          <div>
            <h5 className='text-base text-gray-500'>
              {' '}
              {typeof onThisDayEvent === 'undefined'
                ? ''
                : fillWith0(onThisDayEvent.year, 4) + '.' + fillWith0(dateState.getMonth() + 1, 2) + '.' + fillWith0(dateState.getDate(), 2) + '.'}
            </h5>
          </div>

          <div className='h-8 w-40'>
            <p className='ml-2 h-fit w-80 rounded bg-white p-2 pt-0 text-xs text-gray-500 group-hover:opacity-100  '>
              {typeof onThisDayEvent === 'undefined' ? '' : onThisDayEvent.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
