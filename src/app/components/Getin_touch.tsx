import React from 'react'

const Getin_touch = () => {
  return (
    <div className="w-[1440px] h-[603px] mx-auto flex items-center ">
     <div className='w-[720px] h-[603px] bg-[#FFFFFF]'> 
        <section className='w-[536px] h-[225px] mt-[72px] mx-[84px] 
        text-[24px] font-normal linear-[34px] text-[#2A254B]'>
        From a studio in London to a global brand with <br/>
        over 400 outlets
        <p className='text-[16px] font-normal linear-[22px] text-[#505977] pt-[25px]'>When we started Avion, the idea was simple. Make high quality furniture 
          <br/> affordable and available for the mass market.
          <br/><br/>
          Handmade, and lovingly crafted furniture 
          <br/>and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
        </section>
          <button className='w-[150px] h-[56px] ml-[84px] mt-[196px] text-[16px] font-normal linear-[24px] text-[#2A254B] bg-[#F9F9F9] '>
          Get in touch
          </button>

     </div>
     
     <div className='w-[720px] h-[603px]'> 
      <img src="/getin.png" alt='getin' className='w-[720px] h-[603px]'></img>
     </div>
      
      
    </div>
 
  )
}

export default Getin_touch