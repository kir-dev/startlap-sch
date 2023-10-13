import { useState } from "react";

type searchProps = {
  onSubmit: (term: string) => void;
  searchTerm: string;
};

export default function SearchField(props: searchProps) {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  return (
    <div className="absolute right-8 top-8 m-2 flex w-min flex-row items-center justify-center">
      <input
        className="m-3 h-10 rounded-2xl border-2 border-black bg-none p-5 text-lg focus:outline-none"
        type="search"
        name="search"
        placeholder="Keresés"
        value={searchTerm}
        //onChange={(e) => setSearchTerm(e.target.value)}
        //todo for some reason the filtering does not cancel if i delete the search phrase
        onChange={(e) => {
          setSearchTerm(e.target.value);
          props.onSubmit(searchTerm);
        }}
      />
    </div>
  );
}
