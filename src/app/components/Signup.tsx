import React from "react";
import Image from "next/image";

const Signup = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto sm:h-[481px] mx-auto flex items-center justify-center bg-[#F9F9F9] py-10 sm:py-0">
      <div className="w-full max-w-[1273px] h-auto sm:h-[364px] mx-4 sm:mx-8 lg:mx-20 bg-[#FFFFFF] p-6 sm:p-12 lg:p-16">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[46px] font-normal leading-[1.2] sm:leading-[50px] font-clash-display text-center">
          Join the club and get the benefits
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-[16px] font-normal leading-5 sm:leading-6 text-center text-[#2A254B] mt-4 sm:mt-6">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>

        {/* Input and Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-12">
          <input
            type="text"
            className="w-full sm:w-[354px] h-[56px] bg-[#F9F9F9] px-4 py-2 text-sm sm:text-[16px] placeholder:text-[#2A254B]"
            placeholder="Your@email.com"
          />
          <button className="w-full sm:w-[118px] h-[56px] bg-[#2A254B] text-sm sm:text-[16px] font-normal text-[#FFFFFF] px-4 sm:px-8 py-2 sm:py-4 hover:bg-[#4A4556] transition-all duration-300">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
