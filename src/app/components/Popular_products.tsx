import Link from 'next/link';
import React from 'react';

const Popular_products = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#FFFFFF] px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
      {/* Title */}
      <h2 className="text-left text-2xl sm:text-3xl lg:text-[32px] font-[400] leading-[45px] text-[#2A254B] font-clash-display mb-6">
        Our popular products
      </h2>

      {/* Product Grid */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:mb-20">
        {/* Large Product (Sofa) */}
        <div className="w-full lg:w-[630px] h-[375px]">
          <img
            src="sofa.png"
            alt="sofa"
            className="w-full h-full object-cover mb-6 rounded-lg"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            The Poplar suede sofa
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £980
          </p>
        </div>

        {/* Smaller Products (Chairs) */}
        <div className="w-full lg:w-[305px] h-[375px]">
          <img
            src="chair3.png"
            alt="chair3"
            className="w-full h-full object-cover mb-6 rounded-lg"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            The Dandy chair
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £250
          </p>
        </div>

        <div className="w-full lg:w-[305px] h-[375px]">
          <img
            src="dancychair.png"
            alt="dancychair"
            className="w-full h-full object-cover mb-6 rounded-lg"
          />
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            The Dandy chair
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £250
          </p>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-10 sm:mt-20 ">
        <Link href="./allproducts">
          <button className="w-[170px] h-[56px] bg-[#F9F9F9] text-[16px] leading-6 font-normal text-[#2A254B] px-7 py-4 hover:bg-[#2A254B] hover:text-[#FFFFFF] transition-all duration-300">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular_products;
