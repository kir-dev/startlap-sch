import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="bg-white flex justify-between align-middle px-6 py-2 w-screen sticky border">
        <nav>
          <a href="#" className="text-3xl text-teal-600 font-semibold">
            StartlapSch
          </a>
        </nav>
        <input
          type="text"
          placeholder="Search.."
          className="border-2 border-gray-300 bg-white h-10 w-1/3 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <a href="#">Login</a>
      </header>
    </>
  );
}
