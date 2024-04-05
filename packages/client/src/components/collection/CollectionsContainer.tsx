'use client'
import { clsx } from 'clsx'
import { useState } from 'react'

import { CollectionListItem } from '@/components/collection/CollectionListItem'
import SearchField from '@/components/ui/SearchField'
import { GetCollectionsDto } from '@/types/collection.type'

interface Props {
  collections: GetCollectionsDto
}

export default function CollectionsContainer({ collections }: Props) {
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
    </>
  )
}
