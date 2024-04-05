'use client'
import Link from 'next/link'
import { TbLink } from 'react-icons/tb'

import LinkWidget from '@/components/links/LinkWidget'
import { Button } from '@/components/ui/button'
import SearchField from '@/components/ui/SearchField'
import { useProfile } from '@/hooks/queries/use-profile'
import { useSearchLink } from '@/hooks/useSearchLink'

export default function Links() {
  const profile = useProfile()
  const { links, loading, searchTerm, setSearchTerm } = useSearchLink()
  return (
    <main>
      <div className='flex flex-col items-end'>
        <SearchField searchPhrase={searchTerm} onSubmit={setSearchTerm} />
        <div className='flex w-full flex-wrap items-start justify-center gap-x-5 p-5'>
          {links.map(link => (
            <LinkWidget link={link} key={link.id} />
          ))}
        </div>
      </div>
      {profile.data && (
        <Button asChild>
          <Link href='/links/new'>
            <TbLink /> Új link
          </Link>
        </Button>
      )}
    </main>
  )
}
