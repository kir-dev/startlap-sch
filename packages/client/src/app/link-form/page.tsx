"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Select from "react-select";

export default function linkForm() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const keywords = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
  const [option, setOption] = useState({});
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(option);
  };
  return (
    <div className="flex flex-col m-4">
      <h2 className="mt-14 p-1 font-bold">Add new Link</h2>
      <form
        className="m-6 flex flex-col"
        action="/link"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-col w-2/3 justify-normal">
            <div className="flex flex-row mb-6 flex-grow h-2/3">
              <input
                className="border-purple-500 border-2 rounded-sm flex-grow flex"
                id="url"
                name="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
              <button className="font-bold flex items-center text-center float-right border-purple-500 border-2 rounded-sm w-1/12">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 25L40 25M40 25L30 15M40 25L30 35"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
            <input
              className="border-purple-500  border-2 h-1/3 flex"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <img
            src="https://kir-dev.hu/favicon.png"
            className="m-6 float-right"
          />
        </div>

        <p>keywords</p>
        <input
          className="border-purple-500  border-2"
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Select
          onChange={(keyword) => setOption(keyword)}
          isMulti
          defaultValue={[keywords[0], keywords[2]]}
          name="keywords"
          options={keywords}
        />
        <Link href="/">Drop</Link>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
