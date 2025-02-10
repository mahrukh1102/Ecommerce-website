import React from "react";
import Topnav from "../components/Topnav";

const Page = () => {
  return (
    <div>
      <Topnav />

      <div className="flex flex-wrap relative w-full max-w-[1440px] h-[749px] mt-0 mx-auto ">
        {/* text div */}
        <span className="flex absolute">
          <h1 className="font-clash-display w-[328px] h-[50px] mt-[64px] ml-[188px] font-normal text-[36px] leading-[50.4px] text-[#2A254B]">
            Your shopping cart
          </h1>
        </span>

        {/* menu div */}
        <div className="flex absolute max-w-[1440px] h-[20px] mx-auto mt-[162px] ml-[188px] mr-[194px]">
          <ul className="flex">
            <li className="mr-[595px] text-[14px]">Product</li>
            <li className="mr-[317px] text-[14px]">Quantity</li>
            <li className="text-[14px]">Total</li>
          </ul>
        </div>

        {/* divider */}
        <div className="w-[1064px] h-[0] border border-[#EBE8F4] border-1px mt-[194px] mx-[188px]"></div>

        {/* mini main div */}
        <div className="flex flex-col mt-[20px] ml-[188px]">
          {/* card div */}
          <div className="flex w-[1064px] h-[134px] mb-[20px]">
            <div className="w-[109px] h-[134px]">
              <img
                src="/cardimg1.png"
                alt="cardimg"
                className="w-full h-full"
              />
            </div>
            <div className="ml-[20px]">
              <h2 className="font-clash-display text-[20px] text-[#2A254B]">
                Graystone vase
              </h2>
              <p className="text-[14px] text-[#505977]">
                A timeless ceramic vase with a 11 color gray glass.
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="text-[16px] text-[#2A254B]">1</span>
            </div>
            <div className="ml-[317px] flex items-center">
              <span className="text-[16px] text-[#2A254B]">$888</span>
            </div>
          </div>

          {/* second card div */}
          <div className="flex w-[1064px] h-[134px] ">
            <div className="w-[109px] h-[134px]">
              <img
                src="/cardimg2.png"
                alt="cardimg"
                className="w-full h-full"
              />
            </div>
            <div className="ml-[20px]">
              <h2 className="font-clash-display text-[20px] text-[#2A254B]">
                Basic white vase
              </h2>
              <p className="text-[14px] text-[#505977]">
                Beautiful and simple, this is one for the classics.
              </p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="text-[16px] text-[#2A254B]">1</span>
            </div>
            <div className="ml-[317px] flex items-center">
              <span className="text-[16px] text-[#2A254B]">$825</span>
            </div>
          </div>
        </div>

        {/* 2nd divider */}
        <div className="w-[1064px] h-[0] border border-[#EBE8F4] border-1px mt-[32px] mx-[188px]"></div>

        {/* subtotal */}
        <div className="flex flex-col items-end gap-3 mt-[28px] w-[282px] h-[67px] mx-auto mr-[194px]">

          <div className="flex gap-4 justify-center w-[150px] h-[34px]">
            <span className="text-[20px] text-[#2A254B]">Subtotal</span>
            <span className="text-[24px] text-end text-[#2A254B]">$220</span>
            
          </div>

          <div className="w-full mt-[10px]">
            <span className="text-[14px] text-[#505977]">
              Taxes and shipping are calculated at checkout
            </span>
          </div>
     
        </div>
       


      </div>
      <button className="   mt-[16px] mx-auto gap-[10px] ml-[1080px] mb-4 w-[172px] h-[56px] bg-[#2A254B] text-white text-[16px]">
            Go to checkout
          </button>
    </div>
  );
};

export default Page;
