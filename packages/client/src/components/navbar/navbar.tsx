"use client";
import Hamburger from "hamburger-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import SearchBar from "../ui/searchbar";

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [toggledClass, toggleClass] = useState(
    "transition-all duration-200 ease-in-out opacity-0 h-0"
  );

  const toggleMenu = () => {
    if (isMenuVisible) {
      setMenuVisible(false);
      toggleClass("transition-all duration-200 ease-in-out opacity-0 h-0");
    } else {
      setMenuVisible(true);
      toggleClass("transition-all duration-200 ease-in-out opacity-100 h-20");
    }
  };

  return (
    <header className="bg-white sticky top-0 px-6 py-3 border">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto">
        {/*logo*/}
        <a href="#" className="flex align-middle">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight">
            StartlapSch
          </h1>
        </a>
        {/*desktop menu*/}
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
        {/*right-side nav*/}
        <div className="flex justify-end items-center md:items-stretch space-x-5 w-1/2 max-w-md">
          <span className="hidden w-full md:inline-flex">
            <SearchBar></SearchBar>
          </span>
          <Button>Belépés</Button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Hamburger
              rounded
              toggled={isMenuVisible}
              direction="right"
              size={30}
            />
          </button>
        </div>
      </div>

      {/*mobile menu*/}

      <div className="md:hidden">
        <div className={toggledClass}>
          <ul className="flex flex-col pt-3 space-y-2">
            <li>
              <a href="#">Links</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
