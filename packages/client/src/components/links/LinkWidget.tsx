import '../../app/globals.css'

import Link from 'next/link'

import { LinkEntity } from '@/types/link.type'

interface Props {
  link: LinkEntity
  visits?: number
}

export default function LinkWidget(props: Props) {
  const link = props.link
  return (
    <Link href={link.url} className='flex-no-wrap bg-blue flex w-80 flex-col items-center overflow-hidden rounded-xl p-2' target='_blank'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/*have changed cover image to solid color, maybe should be dependent on the link entity*/}
      {/*      <img
        className="-z-1 -mb-3 flex h-8 w-full flex-row items-center rounded-t-xl"
        src={
          "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
        }
        alt="felso sav"
      />*/}
      <div className='-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400'></div>

      <div className='h-35 w-full overflow-hidden rounded-xl bg-white p-2'>
        <div className=' flex flex-grow flex-row'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={` ml-0 aspect-square flex-none ${
              link.iconUrl === null ? "h-8 w-8" : "h-1/6 w-1/6"
            }`}
            src={
              link.iconUrl === null
                ? `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link.url.replace(
                    "www.",
                    ""
                  )}&size=128`
                : link.iconUrl
            }
            alt="ikon"
            width={100}
            height={100}
          />
          <div className="ml-2 h-2/3 flex-grow overflow-hidden">
            <h2 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl">
              {link.title}
            </h2>
            <h4 className="text-xs">{link.url}</h4>
            {/*We don't want to show the number of visits if it's zero*/}
            {!!props.visits && <p className='mt-0.5 text-xs'>Látogatások száma: {props.visits}</p>}
          </div>
        </div>
        <div className='ml-2'>
          <p className='mt-2 overflow-hidden overflow-ellipsis whitespace-nowrap  text-base'>{link.description}</p>
        </div>
      </div>
    </Link>
  )
}
