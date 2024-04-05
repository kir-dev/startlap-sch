'use client'
import Link from 'next/link'
import { useState } from 'react'

import { Collection } from '@/types/collection.type'

interface Props {
  collection: Collection
}

export function CollectionListItem({ collection }: Props) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Link
      href={'/collections/' + collection.id}
      className='flex-no-wrap bg-blue relative m-2 inline-block inline flex w-96 flex-col items-center overflow-hidden rounded-xl p-2'
    >
      <div className='-z-1 -mb-3 flex h-6 w-full flex-row items-center rounded-t-xl bg-red-400'></div>
      <object data={collection.bannerUrl} type='image/png' className={`h-40 w-full overflow-hidden rounded-xl bg-${imageError ? 'black' : 'local'} `}>
        <img
          className={`h-40 w-full overflow-hidden rounded-xl  bg-${imageError ? 'black' : 'local'} `}
          src={'https://mozsarmate.me/marci.jpg'}
          alt={''}
          onError={handleImageError}
        />
      </object>
      <div className='absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-between p-5 text-white'>
        <h2 className='py-2'>{collection.name}</h2>
      </div>
    </Link>
  )
}
