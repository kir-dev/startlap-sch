import { useState } from "react";

type searchProps = {
  onSubmit: (term: string) => void;
  searchTerm: string;
};

export default function SearchField(props: searchProps) {
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  return (
    <div className="float-right m-2 mr-8">
      <input
        className="m-3 h-10 w-80 rounded-2xl border-2 border-black bg-none p-5 text-lg focus:outline-none"
        type="search"
        name="search"
        placeholder="Keresés"
        value={searchTerm}
        //onChange={(e) => setSearchTerm(e.target.value)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          //todo should use searchterm as onsubmit's argument, within a then chain or something like that??
          props.onSubmit(e.target.value);
        }}
      />
    </div>
  );
}
