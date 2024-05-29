'use client'
import Link from 'next/link'
import { TbLink } from 'react-icons/tb'

import LinkWidget from '@/components/links/LinkWidget'
import { Button } from '@/components/ui/button'
import SearchField from '@/components/ui/SearchField'
import { useProfile } from '@/hooks/queries/use-profile'
import { useSearchLink } from '@/hooks/useSearchLink'

export const dynamic = 'force-dynamic'

export default function Links() {
  const profile = useProfile()
  const { links, searchTerm, setSearchTerm } = useSearchLink()
  return (
    <main>
      <div className='flex flex-col items-end'>
        <div className='flex items-center'>
          {profile.data && (
            <Button asChild className='text-lg'>
              <Link href='/links/new'>
                <TbLink />
                <span className='ml-4 max-md:hidden'>Új link javaslat</span>
              </Link>
            </Button>
          )}
          <SearchField searchPhrase={searchTerm} onSubmit={setSearchTerm} />
        </div>
        <div className='flex w-full flex-wrap items-start justify-center gap-x-5 p-5'>
          {links.map(link => (
            <LinkWidget link={link} key={link.id} />
          ))}
        </div>
      </div>
    </main>
  )
}
