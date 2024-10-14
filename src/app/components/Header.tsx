"use client";

import React from "react";
import { Search } from "lucide-react";
import ImageFiller from "react-image-filler";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white shadow-sm z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-900">Saziware</h1>
      </div>
      <div className="hidden md:flex items-center">
        <div className="relative mr-4">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-900"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <Link href="/login" className="mr-4">
          <button className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50">
            Login
          </button>
        </Link>
        <ImageFiller
          width={50}
          height={50}
          color="red"
          text="Profile Filler"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
