"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import SearchBar from "./searchbar";

export default function Navbar() {
  return (
    <>
      <header className="bg-white flex justify-between align-middle px-6 py-2 w-screen sticky border">
        <nav className="flex align-middle space-x-10">
          <a href="#" className="flex align-middle">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
              StartlapSch
            </h1>
          </a>
          <NavigationMenu className="align-sub">
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Links</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">Collections</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex justify-end space-x-5 w-1/2">
          <SearchBar></SearchBar>
          <Button>Belépés</Button>
        </div>
      </header>
    </>
  );
}
