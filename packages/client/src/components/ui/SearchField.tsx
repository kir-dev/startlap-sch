type searchProps = {
  onSubmit: (term: string) => void
  searchPhrase: string
}

export default function SearchField({ onSubmit, searchPhrase }: searchProps) {
  return (
    <div className='mr-8 inline-block w-fit'>
      <input
        className='m-3 h-10 w-fit rounded border-2 border-black bg-none px-4 text-lg focus:outline-none'
        type='search'
        name='search'
        placeholder='Keresés'
        value={searchPhrase}
        onChange={e => {
          onSubmit(e.target.value)
        }}
      />
    </div>
  )
}
