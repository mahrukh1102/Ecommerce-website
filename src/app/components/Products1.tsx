import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products1 = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto bg-[#FFFFFF] px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
      {/* Title */}
      <p className="text-left text-2xl sm:text-3xl lg:text-[32px] font-[400] leading-[39px] text-[#2A254B] font-clash-display mb-8">
        New ceramics
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <Link href="/listing">
          <div className="cursor-pointer">
            <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[375px]">
              <Image
                src="/chair2.png"
                alt="The Dandy chair"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
              The Dandy chair
            </h4>
            <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
              £250
            </p>
          </div>
        </Link>

        {/* Product 2 */}
        <div className="cursor-pointer">
          <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[375px]">
            <Image
              src="/rustyvas.png"
              alt="Rustic Vase Set"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            Rustic Vase Set
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £155
          </p>
        </div>

        {/* Product 3 */}
        <div className="cursor-pointer">
          <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[375px]">
            <Image
              src="/silkyvas.png"
              alt="The Silky Vase"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            The Silky Vase
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £125
          </p>
        </div>

        {/* Product 4 */}
        <div className="cursor-pointer">
          <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[375px]">
            <Image
              src="/lamp.png"
              alt="The Lucy Lamp"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h4 className="text-[20px] font-normal leading-[28px] font-clash-display pt-6 text-[#2A254B]">
            The Lucy Lamp
          </h4>
          <p className="text-[16px] font-normal leading-[24px] text-[#2A254B] pt-2">
            £399
          </p>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center mt-10 sm:mt-20">
        <Link href="/allproducts">
          <button className="w-[170px] h-[56px] bg-[#F9F9F9] text-[16px] leading-6 font-normal text-[#2A254B] px-7 py-4 cursor-pointer hover:bg-[#2A254B] hover:text-[#FFFFFF] transition-all duration-300">
            View collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products1;
