'use client'
import { clsx } from 'clsx'
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
    <>
      <div className='flex flex-col items-center justify-between p-8 md:flex-row'>
        <h1 className='m-0'>Kollekciók</h1>
        <SearchField onSubmit={Filter} searchPhrase={''}></SearchField>
      </div>

      <div className={clsx('flex flex-wrap justify-center gap-4 p-4')}>
        {filteredCollections.map(curCollection => (
          <CollectionListItem collection={curCollection} key={curCollection.id} />
        ))}
      </div>
      {profile.data && (
        <Button asChild>
          <Link href='/collections/new'>
            <TbPlus />
            Új kollekció
          </Link>
        </Button>
      )}
    </>
  )
}
