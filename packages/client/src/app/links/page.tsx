'use client'
import LinkWidget from '@/components/links/LinkWidget'
import SearchField from '@/components/ui/SearchField'
import { useSearchLink } from '@/hooks/useSearchLink'

export const dynamic = 'force-dynamic'

export default function Links() {
  const { links, searchTerm, setSearchTerm } = useSearchLink()

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
    </main>
  )
}

