'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { CollectionPreview } from '@/types/collection.type'

interface Props {
  collection: CollectionPreview
}

export function CollectionListItem({ collection }: Props) {
  const [hasImageError, setHasImageError] = useState(false)
  const fallbackImage = 'https://mozsarmate.me/marci.jpg'

  return (
    <Link href={'/collections/' + collection.slug} className='relative h-64 w-96 overflow-hidden rounded-xl'>
      <div className='absolute -z-10 h-full w-full'>
        <div className='absolute flex h-6 w-full flex-row items-center rounded-t-xl bg-blue-400'></div>
        <Image
          src={hasImageError ? fallbackImage : collection.bannerUrl}
          alt={collection.name}
          fill={true}
          className={cn('mt-3 overflow-hidden rounded-xl object-cover brightness-50', hasImageError ? 'bg-black' : 'bg-white')}
          onError={() => setHasImageError(true)}
        />
      </div>
      <div className='relative flex flex-col justify-between bg-gradient-to-b px-5 pb-10 pt-6 text-white'>
        <h2 className='pb-2'> {collection.name}</h2>
        <p>{collection.links} link</p>
      </div>
    </Link>
  )
}
