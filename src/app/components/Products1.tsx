import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products1 = () => {
  return (
       <div className=" flex flex-col w-[1440px] h-[744px] mx-auto bg-[#FFFFFF] ">
    <p className="text-left mt-[80px] mb-8 ml-[80px] text-[32px] font-[400px] leading-[39px] text-[#2A254B] font-clash-display">
    New ceramics
    </p>

    <div className="flex justify-center  items-center gap-5 mx-20">
    <Link href="/listing"><div className="h-[124px] w-[305px]  "> 
    <img
          src="chair2.png"
          alt="delchair2ivery"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <Link href="/listing"><h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Dandy chair
        </h4></Link>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £250
        </p>
      </div></Link>
      <div className="h-[124px] w-[305px]  ">
        <img
          src="rustyvas.png"
          alt="rustyvas"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        Rustic Vase Set
        </h4>
        <p className="text-[16px] font-normal linear-[24px]  text-[#2A254B] pt-2">
        £155
        </p>
      </div>
      <div className="h-[124px] w-[305px]  ">
        <img
          src="silkyvas.png"
          alt="silkyvas"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Silky Vase
        </h4>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £125
        </p>
      </div>
      <div className="h-[124px] w-[305px]  ">
        <img
          src="lamp.png"
          alt="lamp"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Lucy Lamp  
        </h4>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £399
        </p>
      </div>
    </div>
        <div className='flex justify-center'>
    <button className='w-[170px] h-[56px] mt-[400px]  bg-[#F9F9F9] 
    text-[16px] leading-6 font-normal text-[#2A254B] px-7 py-4'><Link href="./allproducts">View collection</Link></button>
    </div>
  </div>
  );
};

export default Products1;
