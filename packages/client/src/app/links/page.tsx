'use client'
import Link from 'next/link'
import { TbLink } from 'react-icons/tb'

import LinkWidget from '@/components/links/LinkWidget'
import { Button } from '@/components/ui/button'
import SearchField from '@/components/ui/SearchField'
import { getLinks } from '@/network/getLinks'
import { getProfile } from '@/network/getProfile'
import { useSearchLink } from '@/hooks/useSearchLink'

export default async function Links() {
  const profile = await getProfile()
  const isAuthenticated = Boolean(profile)
    const { links, loading, searchTerm, setSearchTerm } = useSearchLink()

    return (
    <main>
      <div className='flex flex-col items-end'>
        <SearchField searchPhrase={searchTerm} onSubmit={setSearchTerm} />
        <div className='flex flex-wrap justify-center gap-x-5 p-5 w-full items-start'>
          {links.map(link => (
            <LinkWidget link={link} key={link.id} />
          ))}
        </div>
      </div>
        {isAuthenticated && (
            <Button asChild>
                <Link href='/links/new'>
                    <TbLink /> Új link
                </Link>
            </Button>
        )}
    </main>
  )
}
