"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Clock from "@/components/clock/clock";
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
  const router = useRouter();

  return (
    <header className="sticky top-0 border bg-white px-6 py-3">
      <Clock />
      <div className="m-auto flex max-w-screen-2xl items-center justify-between">
        {/*logo*/}
        <Link href="/" className="flex align-middle">
          <h1 className="m-0 scroll-m-20 text-3xl font-extrabold tracking-tight">
            StartlapSch
          </h1>
        </Link>
        {/*desktop menu*/}
        <nav className="mr-auto hidden items-center md:inline-flex">
          <ul className="flex space-x-4 px-10">
            <li>
              <Link href="/links">Links</Link>
            </li>
            <li>
              <Link href="/collections">Collections</Link>
            </li>
          </ul>
        </nav>

        {/*right-side nav*/}
        <div className="flex w-1/2 max-w-md items-center justify-end space-x-5 md:items-stretch">
          <span className="hidden w-full md:inline-flex">
            <SearchBar></SearchBar>
          </span>
          {/*todo set state*/}
          <Button>
            <a href={`${process.env.NEXT_PUBLIC_API_URL}/auth/login`}>
              Belépés
            </a>
          </Button>
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
          <ul className="flex flex-col space-y-2 pt-3">
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
