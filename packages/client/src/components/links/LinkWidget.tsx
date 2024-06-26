'use client'
import '../../app/globals.css'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { BsFire, BsStar, BsStarFill } from 'react-icons/bs'

import SmallKeywords from '@/components/keywords/SmallKeywords'
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
  const [isOptimisticallyFavourite, setIsOptimisticallyFavourite] = React.useState(false)

  const makeFavorite = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    setIsOptimisticallyFavourite(true)
    await axios.post('/api/favorites/', { id: link.id })
    router.refresh()
  }
  const removeFavorite = async (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    setIsOptimisticallyFavourite(false)
    await axios.delete('/api/favorites/' + link.id)
    router.refresh()
  }
  const visitLink = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    //Actual link, for counting clicks
    window.open(process.env.NEXT_PUBLIC_API_URL + '/links/visit/' + link.slug)
  }

  useEffect(() => {
    setIsOptimisticallyFavourite(link.isFavorite)
  }, [link])

  return (
    <div
      //Fake link for preview
      title={link.url}
      className='flex-no-wrap bg-blue min-w-80 flex w-max cursor-pointer flex-col items-center rounded-xl p-2'
      onClick={e => visitLink(e)}
    >
      <div className='-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400'></div>

      <div className='h-35 relative w-fit rounded-xl bg-white p-2'>
        <div className='flex w-full flex-row'>
          <img
            className={cn('ml-0 aspect-square flex-none', link.iconUrl === null ? 'h-8 w-8' : 'h-8 w-8')}
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
          <div className='ml-2 h-2/3 w-full'>
            <div className='flex w-full justify-between'>
              <h2 className='text-nowrap flex text-3xl'>{link.title}</h2>
              <div className='ml-4 flex items-center'>
                {/*{!!props.visits && props.visits > 10 && (*/}
                <div className={'mr-2 flex items-center'} title='Kattintások száma'>
                  <BsFire color={'red'} size={18} className='inline' />
                  <h4 className={'text-s'}>{props.visits}32</h4>
                </div>
                {/*)}*/}
                {user.data &&
                  (!(link.isFavorite || isOptimisticallyFavourite) ? (
                    <BsStar className='text-slate-500 hover:text-amber-300' size={20} title='Kedvelem' onClick={e => makeFavorite(e)} />
                  ) : (
                    <BsStarFill className='text-amber-300 hover:text-amber-200' size={20} title='Nem kedvelem' onClick={e => removeFavorite(e)} />
                  ))}
              </div>
            </div>
            <h4 className='text-xs'>{link.url}</h4>
          </div>
        </div>
        <div className='ml-2'>
          <p className='mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>{link.description}</p>
        </div>
        <SmallKeywords keywords={link.keywords} />
      </div>
    </div>
  )
}
