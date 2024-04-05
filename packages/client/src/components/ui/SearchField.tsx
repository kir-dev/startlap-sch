type searchProps = {
  onSubmit: (term: string) => void
  searchPhrase: string
}

export default function SearchField({ onSubmit, searchPhrase }: searchProps) {
  return (
    <div className='m-2 mr-8 w-fit'>
      <input
        className='m-3 h-10 w-80 rounded-2xl border-2 border-black bg-none p-5 text-lg focus:outline-none'
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
