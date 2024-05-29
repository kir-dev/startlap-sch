'use client'
import Link from 'next/link'
import { useState } from 'react'
import { TbPlus } from 'react-icons/tb'

import { CollectionListItem } from '@/components/collection/CollectionListItem'
import { Button } from '@/components/ui/button'
import SearchField from '@/components/ui/SearchField'
import { useProfile } from '@/hooks/queries/use-profile'
import { GetCollectionsDto } from '@/types/collection.type'

interface Props {
  collections: GetCollectionsDto
}

export default function CollectionsContainer({ collections }: Props) {
  const profile = useProfile()
  const [filteredCollections, setFilteredCollection] = useState(collections)

  function Filter(searchPhrase: string) {
    if (searchPhrase == '') {
      setFilteredCollection(collections)
    } else {
      setFilteredCollection(collections.filter(cur => cur.name.toLowerCase().includes(searchPhrase)))
    }
  }

  return (
    <main>
      <div className='flex flex-col items-end'>
        <div className='flex items-center'>
          {profile.data && (
            <Button asChild className='text-lg'>
              <Link href='/collections/new'>
                <TbPlus />
                <span className='ml-4 max-md:hidden'>Új kollekció</span>
              </Link>
            </Button>
          )}
          <SearchField searchPhrase={''} onSubmit={Filter} />
        </div>
        <div className='flex w-full flex-wrap items-start justify-center gap-4 p-4'>
          {filteredCollections.map(collection => (
            <CollectionListItem collection={collection} key={collection.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
