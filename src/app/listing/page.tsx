import React from "react";
import Header from "../components/Header";
import Topnav from "../components/Topnav2";
import Link from "next/link";

const page = () => {
  return (
    <div>
 
      <div className="  flex flex-row px-0 relative w-full max-w-[1440px] h-[759px] mx-auto bg-white">
        <div className=" w-[721px] h-[759px]">
          <img
            src="listingbanner.png"
            alt="listingbanner"
            className="w-full h-full"
          />
        </div>

        {/* left sec div main  */}
        <div className="absolute w-[602px] h-[657px] mt-[51px] ml-[783px]  bg-white ">
          {/* div 1 */}
          <div className="absolute w-[281px] h-[89px] mt-[40px] ml-[40px] gap-[13px] ">
            <h2 className="w-[281px] h-[44px] font-normal text-[36px] text-[#2A254B] leading-[44.28px] font-clash-display ">
              The Dandy Chair
            </h2>
            <h3 className="w-[59px ] h-[32px] font-normal text-[24px] text-[#12131A] leading-[32.4px] ">
              £250
            </h3>
          </div>
          {/* div 2 */}
          <div className="flex-row gap-4 justify-evenly absolute w-[602px] h-[251px] mt-[143px] p-[40px] ">
            <span>
              <h2 className="w-[88px] h-[20px] text-[16px] leading-[19.68px] font-normal text-[#2A254B] font-clash-display ">
                Description
              </h2>
            </span>
            <span className="">
              <h3 className="my-4 w-[498px] h-[66px] text-[16px] leading-[21.6px] font-normal text-[#505977] ">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The dandy chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </h3>
            </span>
            <span>
              <li className="w-[] h-[] text-[] leading-[] font-normal text-[#505977] ">
                Premium material
              </li>
              <li className="font-normal text-[#505977]">
                Handmade upholstery
              </li>
              <li className="font-normal text-[#505977]">
                Quality timeless classic
              </li>
            </span>
          </div>
          {/* div 3 */}
          <div className=" absolute w-[602px] h-[134px] mt-[401px]  ">
            <div className="flex-col gap-[28px] w-[241px] h-[99px] mt-[20px] ml-[40px] ">
              <h2 className=" text-[16px] text-[#2A254B] font-normal font-clash-display  ">
                Dimensions
              </h2>
              <div className="flex gap-[57px] w-[241px] h-[51px] mt-[28px] ">
                <span>
                  <ul>
                    <li className="text-[14px] text-[#2A254B] font-normal font-clash-display">
                      Height
                    </li>
                    <li className="text-[16px] text-[#505977] font-normal font-Satoshi Medium">
                      110cm
                    </li>
                  </ul>
                </span>

                <span>
                  <ul>
                    <li className="text-[14px] text-[#2A254B] font-normal font-clash-display">
                      Width
                    </li>
                    <li className="text-[16px] text-[#505977]font-normal font-Satoshi Medium">
                      75cm
                    </li>
                  </ul>
                </span>
                <span>
                  <ul>
                    <li className="text-[14px] text-[#2A254B] font-normal font-clash-display">
                      Depth
                    </li>
                    <li className="text-[16px] text-[#505977] font-normal font-Satoshi Medium">
                      50cm
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          {/* div 4  */}
          <div className="absolute w-[602px] h-[115px] mt-[542px]  ">
          <div className='flex gap-[140px]'>
          <input type="email" className="form-input w-[209px] h-[46px] ml-[40px] mt-[28px] bg-opacity-10
           text-[16px] font-normal font-clash-display linear-[21px] bg-[#F9F9F9]" placeholder='Amount:' 
          ></input>
           <Link href="./shoppingbasket"> <button
            className="w-[143px] h-[56px] text-[16px] mr-[40px] mt-[24px] bg-[#2A254B]
            font-normal linear-[24px] font-Satoshi Medium text-white"  >
            Add to cart
          </button></Link>
          </div>
          </div>
        </div>

        {/* closing */}
      </div>
      <Header /> <Topnav />
{/* products  */}
<div className=" flex flex-col w-[1440px] h-[744px] mx-auto bg-[#FFFFFF] ">
    <p className="text-left mt-[80px] mb-8 ml-[80px] text-[32px] font-[400px] leading-[39px] text-[#2A254B] font-clash-display">
    You might also like
    </p>

    <div className="flex justify-center  items-center gap-5 mx-20">
      <div className="h-[124px] w-[305px]  ">
        <img
          src="chair2.png"
          alt="delchair2ivery"
          className="h-[375px] w-[305px] mb-6"
        ></img>
        <h4 className="text-20px font-normal linear-[28px] font-clash-display pt-6 text-[#2A254B]">
        The Dandy chair
        </h4>
        <p className="text-[16px] font-normal linear-[24px] text-[#2A254B] pt-2">
        £250
        </p>
      </div>
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

{/* cards  */}
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


    </div>
  );
};

export default page;
