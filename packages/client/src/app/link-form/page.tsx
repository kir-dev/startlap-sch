"use client";
import { TextField } from "@/components/textField";
import { collections } from "@/mocks/collections.mock";
import { Collection } from "@/types/collection.type";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Select from "react-select";

export default function LinkForm() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [linkError, setLinkError] = useState(false);
  const transformedCollections = collections.map((collection: Collection) => ({
    value: collection.id,
    label: collection.name,
  }));
  const [option, setOption] = useState<{ value: string; label: string } | null>(
    null
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  // const checkLink = async () => {
  //   try {
  //     const response = await fetch(url);
  //     console.log(response);
  //     if (response.status != 200) setLinkError(true);
  //   } catch (e) {
  //     setLinkError(true);
  //   }
  //   console.log(linkError);
  //   setLinkError(false);
  // };
  return (
    <form
      className="m-14 ml-20 flex flex-col justify-between"
      action="/link"
      onSubmit={handleSubmit}
    >
      <h1 className=" font-bold text-2xl">Add new Link</h1>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2 justify-between items-center py-8">
          <div className="flex flex-row h-16 left-0 mt-5">
            <TextField
              id="url"
              name="url"
              placeholder="Link url"
              value={url}
              setValue={setUrl}
            />

            <button
              className="font-bold flex items-center text-center justify-center float-right border-purple-500 border-2 rounded-sm w-1/6"
              //onClick={checkLink}
            >
              <img src="arrow.svg" alt="arrow" className="w-1/2 h-1/2" />
            </button>
          </div>
          {linkError && (
            <h4 className="text-red-500 m-5">Failed link validation</h4>
          )}
          <TextField
            id="title"
            name="title"
            placeholder="Title"
            value={title}
            setValue={setTitle}
            className="mt-6"
          />
          <TextField
            id="keywords"
            name="keywords"
            placeholder="Keywords"
            value={keywords}
            setValue={setKeywords}
            className="object-bottom mt-20"
          />
        </div>
        <input
          type="file"
          id="icon"
          name="icon"
          className="m-6 float-right"
        ></input>
      </div>
      <Select
        onChange={(collection) => setOption(collection)}
        name="collection"
        options={transformedCollections}
        isSearchable
        placeholder="Collection"
        className="text-center w-1/2"
      />
      <textarea
        placeholder="Description"
        className="border-purple-500 border-2 rounded-sm text-center flex items-center h-44 my-10"
        id="description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="flex flex-row justify-between h-16">
        <Link
          className="flex border-purple-500 border-2 rounded-sm w-32 text-center items-center justify-center text-xl"
          href="/"
          onClick={() => {
            console.log("red");
          }}
        >
          Drop
        </Link>
        <button
          className="border-purple-500 border-2 rounded-sm w-32 text-center text-xl"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
