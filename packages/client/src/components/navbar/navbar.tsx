"use client";
import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Button } from "@/components/ui/button";

import SearchBar from "../ui/searchbar";

export default function Navbar() {
  const isNavOpen = false;

  return (
    <header className="bg-white px-6 py-3 border">
      <div className="flex justify-between max-w-screen-2xl m-auto">
        {/*logo*/}
        <a href="#" className="flex align-middle">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            StartlapSch
          </h1>
        </a>
        {/*primary nav*/}
        <nav className="hidden md:inline-flex mr-auto items-center">
          <ul className="flex space-x-4 px-10">
            <li>
              <a href="#">Links</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
          </ul>
        </nav>
        {/*secondary nav*/}
        <div className="flex justify-end space-x-5 w-1/2 max-w-md">
          <span className="hidden w-full md:inline-flex">
            <SearchBar></SearchBar>
          </span>
          <Button>Belépés</Button>
          <span className="md:hidden">
            {isNavOpen ? (
              <FaTimes className="h-full" />
            ) : (
              <FaBars className="h-full" />
            )}
          </span>
        </div>
      </div>

      {/*mobile nav*/}
      <div className="md:hidden">
        <ul className="flex flex-col pt-3 space-y-2">
          <li>
            <a href="#">Links</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
