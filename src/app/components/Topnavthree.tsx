import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import Link from "next/link";

const Topnavthree = () => {
  return (
    <div className="flex flex-col justify-center bg-white h-[132px] w-full max-w-[1440px] mx-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="font-[400] text-[24px] leading-[29.52px] text-[#22202E]">
          Avion
        </h1></Link>

        <div className="flex items-center gap-9">
          <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">About us</a>
          <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Contact</a>
          <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Blog</a>
          <div className="flex items-center gap-4">
           <IoCartOutline className="w-[16px] h-[16px]" />
          <HiOutlineUserCircle className="w-[16px] h-[16px]" />
          <IoSearchOutline className="w-[16px] h-[16px]" /> </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-black h-[1px] w-full mt-4 opacity-10"></div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-[44px] mt-4">
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Plant pots</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Ceramics</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Tables</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Chairs</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Crockery</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Tableware</a>
        <a className="hover:text-gray-900 cursor-pointer text-[#726E8D]">Cutlery</a>
      </div>
    </div>
  )
}

export default Topnavthree
