"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Topnav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center bg-white h-[80px] w-full max-w-[1440px] mx-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6 sm:px-12">
        {/* Left Section: Avion Text */}
        <div className="flex items-center gap-2">
         <Link href="/"> <h1 className="flex font-[400] text-[24px] font-clash-display leading-[29.52px] text-[#22202E] sm:ml-4">
            Avion
          </h1></Link>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="hidden sm:flex flex-wrap justify-center gap-[44px]">
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Plant pots</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Ceramics</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Tables</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Chairs</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Crockery</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Tableware</a>
          <a className="hover:text-gray-900 cursor-pointer font-clash-display text-[#726E8D]">Cutlery</a>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <IoSearchOutline className="w-[20px] h-[20px]" />
          
          {/* Cart and User Icons (Hidden on sm screens) */}
          <div className="hidden sm:flex gap-4">
            <IoCartOutline className="w-[20px] h-[20px]" />
            <HiOutlineUserCircle className="w-[20px] h-[20px]" />
          </div>

          {/* Hamburger Icon (Visible only on sm screens) */}
          <div className="sm:hidden">
            {isMenuOpen ? (
              <HiOutlineX
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <HiOutlineMenu
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

     

      {/* Mobile Menu (Visible only when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 mt-4 bg-pink-200 p-4">
          <a className="hover:text-gray-900 cursor-pointer">Plant pots</a>
          <a className="hover:text-gray-900 cursor-pointer">Ceramics</a>
          <a className="hover:text-gray-900 cursor-pointer">Tables</a>
          <a className="hover:text-gray-900 cursor-pointer">Chairs</a>
          <a className="hover:text-gray-900 cursor-pointer">Crockery</a>
          <a className="hover:text-gray-900 cursor-pointer">Tableware</a>
          <a className="hover:text-gray-900 cursor-pointer">Cutlery</a>
        </div>
      )}
    </div>
  );
};

export default Topnav;
