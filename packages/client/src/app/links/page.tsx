'use client'
import LinkWidget from '@/components/links/LinkWidget'
import SearchField from '@/components/ui/SearchField'
import { useSearchLink } from '@/hooks/useSearchLink'

export const dynamic = 'force-dynamic'

export default function Links() {
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
    </main>
  )
}

