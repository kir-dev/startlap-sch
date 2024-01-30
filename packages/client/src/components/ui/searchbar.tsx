import { FaSearch } from "react-icons/fa";
export default function SearchBar() {
  return (
    <div className="border flex align-middle border-2 border-gray-300 bg-white rounded-lg w-1/3 flex-grow">
      <FaSearch className="h-full mx-3"></FaSearch>
      <input
        type="text"
        placeholder="Search.."
        className=" h-fullpr-16 bg-transparent text-sm focus:outline-none w-full"
      />
    </div>
  );
}
