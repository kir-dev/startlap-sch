import { FaSearch } from 'react-icons/fa'
export default function SearchBar() {
  return (
    <div className='flex w-1/3 flex-grow rounded-lg border-2 border-gray-300 bg-white align-middle'>
      <FaSearch className='mx-3 h-full'></FaSearch>
      <input type='text' placeholder='Search..' className=' h-fullpr-16 w-full bg-transparent text-sm focus:outline-none' />
    </div>
  )
}
