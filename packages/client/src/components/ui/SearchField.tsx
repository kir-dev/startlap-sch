import { useState } from "react";

type searchProps = {
  onSubmit: (term: string) => void;
  searchTerm: string;
};

export default function SearchField(props: searchProps) {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);
  return (
    <div className="m-2 flex w-min flex-row items-center justify-center rounded-lg border-4 border-gray-300">
      <input
        className="m-3 h-10 bg-white p-5 text-center text-lg focus:outline-none"
        type="search"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="right-0 top-0 mx-2"
        onClick={() => props.onSubmit(searchTerm)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </button>
    </div>
  );
}
