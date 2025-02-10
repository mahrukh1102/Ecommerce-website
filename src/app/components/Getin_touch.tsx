import React from 'react';

const Getin_touch = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto lg:h-[603px] mx-auto flex flex-col lg:flex-row items-center">
      {/* Left Section (Text Content) */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[603px] bg-[#FFFFFF] p-6 sm:p-8 lg:p-12">
        <section className="w-full max-w-[536px] h-auto mx-auto text-lg sm:text-xl lg:text-[24px] font-normal leading-[1.5] sm:leading-[34px] text-[#2A254B]">
          From a studio in London to a global brand with over 400 outlets
          <p className="text-sm sm:text-[16px] font-normal leading-[1.5] sm:leading-[22px] text-[#505977] pt-6">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
            <br /><br />
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
        </section>
        <button className="w-full sm:w-[150px] h-[56px] mt-8 sm:mt-12 text-sm sm:text-[16px] font-normal leading-[24px] text-[#2A254B] bg-[#F9F9F9] hover:bg-[#2A254B] hover:text-[#FFFFFF] transition-all duration-300">
          Get in touch
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 h-auto lg:h-[603px]">
        <img
          src="/getin.png"
          alt="getin"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Getin_touch;
