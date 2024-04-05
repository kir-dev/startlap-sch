"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Clock from "@/components/clock/clock";
import { Button } from "@/components/ui/button";

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
      <div className="grid grid-cols-3 items-center justify-between">
        <div className="align items-center">
          <Link href="/" className="flex w-fit align-middle">
            <h1 className="m-0 w-fit text-3xl font-extrabold tracking-tight">
              StartlapSCH
            </h1>
          </Link>
          {/*desktop menu*/}
          <nav className="mr-auto items-center">
            <ul className="flex space-x-4 px-10">
              <li>
                <Link href="/links">Links</Link>
              </li>
              <li>
                <Link href="/collections">Collections</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Clock />

        {/*right-side nav*/}
        <div className="max-w-md items-center space-x-5 text-right md:items-stretch">
          {/*<span className="hidden w-full md:inline-flex">
            <SearchBar></SearchBar>
          </span>*/}
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
