import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
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
            font-normal linear-[24px] text-[#FFFFFF] px-8 py-4"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
