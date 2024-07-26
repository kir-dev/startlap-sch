'use client'
import axios from 'axios'
import { clsx } from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import LinkWidget from '@/components/links/LinkWidget'
import { Collection } from '@/types/collection.type'

import { Button } from '../ui/button'

export default function CollectionListContainer({ collection, editable }: { collection: Collection; editable: boolean }) {
  const router = useRouter()
  return (
    <>
      <div className='m-4 ml-8 flex flex-row items-center'>
        <div className='flex flex-row items-center gap-4'>
          <Button>
            <Link href='/collections'>
              <ArrowLeft />
            </Link>
          </Button>
          <h1 className='m-0'> Kollekció: {collection.name}</h1>
        </div>
      </div>
      <div className={clsx('flex flex-wrap justify-start px-4')}>
        {collection.links.map((link, _index) => (
          <LinkWidget
            key={_index}
            link={link}
            onRemove={
              editable
                ? () => axios.post('/api/collections/removeLink', { collectionId: collection.id, linkId: link.id }).then(() => router.refresh())
                : undefined
            }
          />
        ))}
      </div>
    </>
  )
}
