import Image from "next/image";
import Link from "next/link";
import React from "react";

const Herosec = () => {
  return (
   



    <div className=" flex flex-row top-0 min-w-[390px] h-[502px] sm:w-full sm:max-w-[1440px] sm:h-[704px] bg-white mx-auto ">
      <div className="flex flex-col  bg-[#2A254B] w-[390px] h-[502px] sm:w-[760px]  sm:h-[584px] sm:mt-[60px] sm:ml-[80px] ">

        <div className=" flex flex-col w-[342PX] h-[135PX] mt-[40px] ml-[24px] sm:w-[513px] sm:h-[187px] sm:mt-[60px] sm:ml-[60px] gap-41 ">
          <h2 className=" text-white font-[400] text-[32px] leading-[44.8px] font-clash-display ">
            
            The furniture brand for the future, with timeless designs
          </h2>
          <div className=" hidden sm:block w-[170px] mt-[41px] h-[56px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#F9F9F926] gap-10">
          <Link href="./allproducts">  <button className="  text-white font-[400] text-[15px] leading-[24px] ">
             View collection 
            </button> </Link>
          </div>
        </div>
          {/* paragraph  */}
        <div className="w-[342px] h-[223px] mt-[80px] ml-[24px] sm:w-[602px] sm:h-[81px] sm:mt-[198px] sm:ml-[60px] ">
          <p className=" text-white text-[18px] font-clash-display font-[400] leading-[27px]  ">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>

            {/* 2nd button  */}
        <div className=" block sm:hidden w-[170px] mt-[41px] h-[56px] pt-[16px] pb-[16px] pr-[32px] pl-[32px] bg-[#F9F9F926] gap-10">
            <button className="  text-white font-[400] text-[15px] leading-[24px] ">
            <Link href="./allproducts"> View collection </Link>
            </button>
          </div>
        </div>
      
      </div>

      <div className="hidden sm:block">
        <img
          src="/chair1.png"
          alt="chair"
          className="w-[520px] h-[584px] mt-[60px] mr-[80px]"
        ></img>
      </div>
    </div>
  );
};

export default Herosec;
