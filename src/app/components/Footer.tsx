import React from 'react';
import { RiLinkedinLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { AiFillSkype } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto mx-auto bg-[#2A254B] sm:mt-10 px-4 sm:px-8 lg:px-20 py-10">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Menu Section */}
        <div className="w-full lg:w-auto">
          <ul className="flex flex-col gap-3">
            <li className="text-[16px] font-normal leading-[20px] font-clash-display text-[#FFFFFF]">
              Menu
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              New arrivals
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Recently viewed
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Popular this week
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              <Link href="./allproducts">All products</Link>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="w-full lg:w-auto">
          <ul className="flex flex-col gap-3">
            <li className="text-[16px] font-normal leading-[20px] font-clash-display text-[#FFFFFF]">
              Categories
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Crockery
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Furniture
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Homeware
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Plant pots
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Chairs
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Crockery
            </li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div className="w-full lg:w-auto">
          <ul className="flex flex-col gap-3">
            <li className="text-[16px] font-normal leading-[20px] font-clash-display text-[#FFFFFF]">
              Our company
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              <Link href="./about">About us</Link>
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Vacancies
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              <Link href="./listing">Contact us</Link>
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Privacy
            </li>
            <li className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
              Returns policy
            </li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="w-full lg:w-[627px]">
          <h1 className="text-[16px] font-normal leading-[20px] font-clash-display text-[#FFFFFF]">
            Join our mailing list
          </h1>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              className="w-full sm:w-[509px] h-[56px] bg-opacity-10 text-[16px] font-normal leading-[21px] bg-[#F9F9F9] px-4"
              placeholder="Your@email.com"
            />
            <button className="w-full sm:w-[118px] h-[56px] bg-[#FFFFFF] text-[16px] font-normal leading-[24px] text-[#2A254B] hover:bg-[#2A254B] hover:text-[#FFFFFF] transition-all duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#4E4D93] my-8"></div>

      {/* Copyright and Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-[14px] font-normal leading-[19px] font-Satoshi Medium text-[#FFFFFF]">
          Copyright 2022 Avion LTD
        </h1>
        <div className="flex gap-6">
          <RiLinkedinLine className="text-white w-[24px] h-[24px]" />
          <RiFacebookLine className="text-white w-[24px] h-[24px]" />
          <FaInstagram className="text-white w-[24px] h-[24px]" />
          <AiFillSkype className="text-white w-[24px] h-[24px]" />
          <TbBrandTwitterFilled className="text-white w-[24px] h-[24px]" />
          <FaPinterest className="text-white w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
