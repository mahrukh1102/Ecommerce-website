import React from "react";
import Topnav from "../components/Topnav";

const page = () => {
  return (
    <div>
      <Topnav />
      
      
      <div className="flex flex-wrap relative w-full max-w-[1440px] h-[749px] mt-0 mx-auto ">
        {/* text div */}
        <span className="flex absolute  ">
          <h1 className="font-clash-display w-[328px] h-[50px] mt-[64px] ml-[188px] font-normal text-[36px] leading-[50.4px] text-[#2A254B]">
            Your shopping cart
          </h1>
        </span>

        {/* menu div  */}
        <div className=" flex absolute max-w-[1440px] h-[20px] mx-auto mt-[162px] ml-[188px] mr-[194px] ">
          <ul className="flex">
          <li className=" mr-[595px] text-[14px] ">Product</li>
          <li className=" mr-[317px] text-[14px] ">Quantity</li>
          <li className="  text-[14px] ">Total</li>
          </ul></div>

          {/* divider  */}
          <div className=' w-[1064px] h-[0] border border-[#EBE8F4] border-1px mt-[194px]  mx-[188px] items-center  '></div>


        {/* mini main div */}
        <div>
          {/* card div  */}
          <div className="flex w-[309px] h-[134px] ml-[188px] "> 
            <div className="w-[109px] h-[134px]  "><img src="/cardimg1.png" alt="cardimg" className="w-full h-full" /></div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default page;
