'use client'
import axios from 'axios'
import { PlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useSearchLink } from '@/hooks/useSearchLink'

export default function AddLinkCombobox({ collectionId, linkIds }: { collectionId: string; linkIds: string[] }) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { links, searchTerm, setSearchTerm } = useSearchLink()
  const filteredLinks = links.filter(link => !linkIds.includes(link.id))
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='absolute right-16 w-[200px] justify-between'>
          Link hozzáadása...
          <PlusIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[300px] p-0'>
        <Command shouldFilter={false}>
          <CommandInput placeholder='Link keresése...' onValueChange={setSearchTerm} value={searchTerm} />
          <CommandEmpty>Nem található ilyen link</CommandEmpty>
          <CommandGroup>
            {filteredLinks.map(link => (
              <CommandItem
                key={link.id}
                value={link.id}
                onSelect={currentValue => {
                  axios.post('/api/collections/addLink', { collectionId, linkId: currentValue }).then(() => router.refresh())
                  setOpen(false)
                }}
              >
                <div className='flex flex-col'>
                  <b>{link.title}</b>
                  <h4 className='text-xs'>{link.url}</h4>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
