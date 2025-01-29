import Link from 'next/link'
import React from 'react'

const Popular_products = () => {
  return (
    <div className=" flex flex-col w-[1440px] h-[744px] mx-auto bg-[#FFFFFF] ">
    <h2 className="text-left mt-[80px] mb-6 ml-[80px] text-[32px] font-[400px] leading-[45px] text-[#2A254B] font-clash-display">
    Our popular products 
    </h2>
    <div className="flex justify-between  items-center gap-1 mx-20">
      <div className="w-[630px] h-[375px] ">
        <img
          src="sofa.png"
          alt="sofa"
          className="h-[375px] w-[630px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Poplar suede sofa
        </h4>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £980
        </p>
      </div>
      <div className="w-[305px] h-[375px] ">
        <img
          src="chair3.png"
          alt="chair3"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Dandy chair
        </h4>
        <p className="text-[16px] font-normal linear-[24px]  text-[#2A254B] pt-2">
        £250
        </p>
      </div>
      <div className="w-[305px] h-[375px] ">
        <img
          src="dancychair.png"
          alt="dancychair"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Dandy chair
        </h4>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £250
        </p>
      </div>
     
    </div>

    <div className='flex justify-center'>
    <button className='w-[170px] h-[56px] mt-[150px]  bg-[#F9F9F9] 
    text-[16px] leading-6 font-normal text-[#2A254B] px-7 py-4'><Link href="./allproducts">View collection</Link></button>
    </div>
  </div>
  )
}

export default Popular_products