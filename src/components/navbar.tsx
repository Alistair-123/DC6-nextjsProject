"use client";
import React, { useState } from "react";
import Link from "next/link";


export default function Navbar() {

  const [activeItem, setActiveItem] = useState("");
  return (
    <nav className=" border-gray-300 h-[100px] flex items-end px-10  bg-blue-200 ">
      <div className=" flex  gap-5 ml-[150px]">
        <Link href="/">
          <li
            className={`px-4 py-2 rounded-t-md list-none ${activeItem === "home"
              ? "bg-white text-black"
              : "hover:bg-blue-500 hover:text-white"
              }`}
            onClick={() => setActiveItem("home")}
          >
            Home
          </li>
        </Link>
        <Link href="/todos">
          <li
            className={`px-4 py-2 rounded-t-md list-none ${activeItem === "deleted"
              ? "bg-white text-black"
              : "hover:bg-blue-500 hover:text-white"
              }`}
            onClick={() => setActiveItem("deleted")}
          >
            To-Do
          </li>
        </Link>
      </div>
    </nav>
  );
}
