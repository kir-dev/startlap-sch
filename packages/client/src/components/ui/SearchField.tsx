import { useState } from 'react'

type searchProps = {
  onSubmit: (term: string) => void
  searchPhrase: string
}

export default function SearchField({ onSubmit, searchPhrase }: searchProps) {
  const [searchTerm, setSearchTerm] = useState(searchPhrase)

  return (
    <input
      className='m-3 h-10 w-80 rounded-2xl border-2 border-black bg-none p-5 text-lg focus:outline-none'
      type='search'
      name='search'
      placeholder='Keresés'
      value={searchTerm}
      onChange={e => {
        setSearchTerm(e.target.value)
        onSubmit(e.target.value)
      }}
    />
  )
}
