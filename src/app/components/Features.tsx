import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] h-auto mx-auto px-4">
      <p className="text-center mt-8 text-[24px] font-[400px] leading-[34px] font-clash-display">
        What makes our brand different
      </p>

      <div className="flex flex-wrap justify-between items-center gap-8 mt-8">
        <div className="w-full sm:w-[270px] text-center sm:text-left">
          <img
            src="Delivery.png"
            alt="delivery"
            className="h-[24px] w-[24px] mb-4 mx-auto sm:mx-0"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display text-[#2A254B]">
            Next day as standard
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] mt-2">
            Order before 3pm and get your order <br />
            the next day as standard
          </p>
        </div>
        <div className="w-full sm:w-[270px] text-center sm:text-left">
          <img
            src="Checkmark.png"
            alt="checkmark"
            className="h-[24px] w-[24px] mb-4 mx-auto sm:mx-0"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display text-[#2A254B]">
            Made by true artisans
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] mt-2">
            Handmade crafted goods made with <br />
            real passion and craftmanship
          </p>
        </div>
        <div className="w-full sm:w-[270px] text-center sm:text-left">
          <img
            src="Purchase.png"
            alt="purchase"
            className="h-[24px] w-[24px] mb-4 mx-auto sm:mx-0"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display text-[#2A254B]">
            Unbeatable prices
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] mt-2">
            For our materials and quality you <br />
            won’t find better prices anywhere
          </p>
        </div>
        <div className="w-full sm:w-[270px] text-center sm:text-left">
          <img
            src="Sprout.png"
            alt="sprout"
            className="h-[24px] w-[24px] mb-4 mx-auto sm:mx-0"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display text-[#2A254B]">
            Recycled packaging
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] mt-2">
            We use 100% recycled packaging to <br />
            ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
