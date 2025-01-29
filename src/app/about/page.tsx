import React from "react";
import Header from "../components/Header";
import Topnavthree from "../components/Topnavthree";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <Topnavthree />

      {/* 1st div  */}
      <div className=" flex px-0 relative w-full max-w-[1440px] h-[277px] mx-auto bg-white">
        <span className="w-[704px] h-[100px] text-[36px] font-normal font-clash-display mt-[88px] ml-[128px] leading-[50.4px] text-[#2A254B]">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </span>

        <button
          className=" w-[192px] h-[56px] mt-[88px] ml-[288px] bg-[#F9F9F9] 
    text-[16px] leading-6 font-normal font-Satoshi Medium text-[#2A254B] px-6 py-4"
        >
         <Link href="./allproducts"> View our products</Link>
        </button>
      </div>

      {/* 2nd div  */}

      <div className="flex justify-evenly relative w-full max-w-[1440px] h-[598px] py-[80px] px-[60px]   mx-auto bg-white">
        <div className="flex flex-col  bg-[#2A254B] w-[634px] h-[478px] ">
          <div className=" flex-row w-[495px] h-[99px] mx-16 mt-16 gap-[12px]">
            <h1 className="text-white font-normal w-[383px] h-[39px] text-[32px] leading-[39.36px] font-clash-display mb-[12px] ">
              It started with a small idea
            </h1>
            <p className="text-white font-normal w-[495px] h-[48px] text-[18px] leading-[24.3px] font-Satoshi Medium ">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
          </div>
          {/* button  */}
          <div className="w-[170px]  h-[56px] mt-[205px] ml-[64px]   bg-[#F9F9F926] ">
            <button className="  text-white font-[400] text-[16px] py-[16px]  px-[30px] leading-[24px] ">
            <Link href="./allproducts"> View collection</Link>
            </button>
          </div>
        </div>

        {/* image div  */}
        <div className="w-[630px] h-[478px]">
          <img
            src="/bannerchair.png"
            alt="chair"
            className=" w-full h-full"
          ></img>{" "}
        </div>
      </div>
      {/* 3rd div  */}
      <div className="w-full max-w-[1440px] h-[603px] mx-auto flex items-center ">
        <div className="w-[720px] h-[603px]">
          <img
            src="/getintouch.png"
            alt="getin"
            className="w-[720px] h-[603px]"
          ></img>
        </div>

        <div className="w-[720px] h-[603px] bg-[#FFFFFF]">
          <section
            className="w-[536px] h-[225px] mt-[72px] mx-[84px] 
        text-[24px] font-normal linear-[34px] text-[#2A254B]"
          >
            Our service isn’t just personal, it’s actually
            <br />
            hyper personally exquisite
            <p className="text-[16px] font-normal linear-[22px] text-[#505977] pt-[25px]">
              When we started Avion, the idea was simple. Make high quality
              furniture
              <br /> affordable and available for the mass market.
              <br />
              <br />
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </section>
          <button className="w-[150px] h-[56px] ml-[84px] mt-[196px] text-[16px] font-normal linear-[24px] text-[#2A254B] bg-[#F9F9F9] ">
            Get in touch
          </button>
        </div>
      </div>
    {/* cards div  */}
    <div className=" flex flex-col w-[1440px] h-[355px] mx-auto ">
      <p className="text-center mt-[60px] text-[24px] font-[400px] leading-[34px] font-clash-display">
        What makes our brand different
      </p>

      <div className="flex justify-between  items-center m-[60px]">
        <div className="w-[270px] h-124px] ">
          <img
            src="Delivery.png"
            alt="delivery"
            className="h-[24px] w-[24px] mb-4"
          ></img>
          <h4 className="text-20px font-normal linear-[28px] font-clash-display text-[#2A254B]">
            Next day as standard
          </h4>
          <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] mt-2">
            Order before 3pm and get your order <br />
            the next day as standard
          </p>
        </div>
        <div className="w-[270px] h-124px] ">
          <img
            src="Checkmark.png"
            alt="checkmark"
            className="h-[24px] w-[24px] mb-4"
          ></img>
          <h4 className="text-20px font-normal linear-[28px] font-clash-display text-[#2A254B]">
            Made by true artisans
          </h4>
          <p className="text-[16px] font-normal linear-[24px]  text-[#2A254B] mt-2">
            Handmade crafted goods made with <br />
            real passion and craftmanship
          </p>
        </div>
        <div className="w-[270px] h-124px] ">
          <img
            src="Purchase.png"
            alt="purchase"
            className="h-[24px] w-[24px] mb-4"
          ></img>
          <h4 className="text-20px font-normal linear-[28px] font-clash-display text-[#2A254B]">
            Unbeatable prices
          </h4>
          <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] mt-2">
            For our materials and quality you <br />
            won’t find better prices anywhere
          </p>
        </div>
        <div className="w-[270px] h-124px] ">
          <img
            src="Sprout.png"
            alt="sprout"
            className="h-[24px] w-[24px] mb-4"
          ></img>
          <h4 className="text-20px font-normal linear-[28px] font-clash-display text-[#2A254B]">
            Recycled packaging
          </h4>
          <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] mt-2">
            We use 100% recycled packaging to <br />
            ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
{/* join the club */}
<div className="w-[1440px] h-[481px] mx-auto flex items-center bg-[#F9F9F9]">
      <div className="w-[1273px] h-[364px]  mx-[80px]  bg-[#FFFFFF]">
        <h1
          className="text-[46px] font-normal leading-[50px] font-clash-display 
            text-center pt-[58px]" >
          Join the club and get the benefits
        </h1>
        <p className="text-[16px] font-normal leading-6 text-center text-[#2A254B] pt-4">
          Sign up for our newsletter and receive exclusive offers on new
          <br /> ranges, sales, pop up stores and more
        </p>
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="form-input  w-[354px] h-[56px]
               bg-[#F9F9F9] mt-[72px]" placeholder='Your@email.com '
          ></input>
          <button
            className="w-[118px] h-[56px] mt-[72px] bg-[#2A254B] text-[16px] 
            font-normal linear-[24px] text-[#FFFFFF] px-8 py-4 " 
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
      {/* main div close */}
    </div>
  );
};

export default page;
