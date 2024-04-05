import { Search } from 'lucide-react'
import * as React from 'react'
import { useMemo, useState } from 'react'

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface SearchableSelectProps {
  options: { label: string; value: string }[]
  onChange: (value: string) => void
  value?: string
}

export function SearchableSelect({ options, onChange, value }: SearchableSelectProps): JSX.Element {
  const [filter, setFilter] = useState('')

  const filteredOptions = useMemo(() => {
    if (!filter) return options
    return options.filter(option => option.label.toLowerCase().includes(filter.toLowerCase()))
  }, [options, filter])

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder='Kiválasztás' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <div className='flex items-center border-b px-3'>
            <Search className='mr-2 h-4 w-4 shrink-0 opacity-50' />
            <input
              onChange={e => setFilter(e.target.value)}
              placeholder='Keresés...'
              value={filter}
              className={cn(
                'placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50'
              )}
            />
          </div>
        </SelectGroup>
        {filteredOptions.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
