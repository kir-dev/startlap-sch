'use client'
import '../../app/globals.css'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsFire } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

import { useProfile } from '@/hooks/queries/use-profile'
import { cn } from '@/lib/utils'
import { LinkEntity } from '@/types/link.type'

interface Props {
  link: LinkEntity
  visits?: number
}

export default function LinkWidget(props: Props) {
  const link = props.link
  const router = useRouter()
  const user = useProfile()

  const makeFavorite = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    await axios.post('/api/favorites/', { id: link.id })
    router.refresh()
  }
  const removeFavorite = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    await axios.delete('/api/favorites/' + link.id)
    router.refresh()
  }
  const visitLink = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    //Actual link, for counting clicks
    window.open(process.env.NEXT_PUBLIC_API_URL + '/links/visit/' + link.slug)
  }

  return (
    <div
      //Fake link for preview
      title={link.url}
      className='flex-no-wrap bg-blue flex w-80 cursor-pointer flex-col items-center overflow-hidden rounded-xl p-2'
      onClick={e => visitLink(e)}
    >
      <div className='-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400'></div>

      <div className='h-35 relative w-full overflow-hidden rounded-xl bg-white p-2'>
        <div className=' flex flex-grow flex-row'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={cn('ml-0 aspect-square flex-none', link.iconUrl === null ? 'h-8 w-8' : 'h-1/6 w-1/6')}
            src={
              link.iconUrl === null
                ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url.replace(
                    'www.',
                    ''
                  )}&size=128`
                : link.iconUrl
            }
            alt='ikon'
            width={100}
            height={100}
          />
          <div className='ml-2 h-2/3 flex-grow overflow-hidden'>
            <div className='flex justify-between'>
              <h2 className='flex basis-5/6 overflow-hidden overflow-ellipsis text-3xl'>{link.title}</h2>
              <div className='flex basis-1/6 justify-end rounded p-0.5 align-super text-3xl'>
                {user.data &&
                  (!link.isFavorite ? (
                    <FaRegStar className='text-slate-500 hover:text-amber-300' title='Favorite' onClick={e => makeFavorite(e)} />
                  ) : (
                    <FaStar className='text-amber-300 hover:text-amber-200' title='Unfavorite' onClick={e => removeFavorite(e)} />
                  ))}
              </div>
            </div>
            <h4 className='text-xs'>{link.url}</h4>
            {!!props.visits && props.visits > 10 && (
              <div className={'absolute bottom-2 right-2 flex items-center'} title='Kattintások száma'>
                <BsFire color={'red'} size={14} className='inline' />
                <h4 className={'text-s'}>{props.visits}</h4>
              </div>
            )}
          </div>
        </div>
        <div className='ml-2'>
          <p className='mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>{link.description}</p>
        </div>
      </div>
    </div>
  )
}
