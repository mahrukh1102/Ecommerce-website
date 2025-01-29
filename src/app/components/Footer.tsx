import React from 'react'
import { RiLinkedinLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { AiFillSkype } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
  <>
   <div className=" flex flex-wrap justify-between items-center w-full max-w-[1440px] h-[380px] mx-auto  bg-[#2A254B]" >

      
      <div className=' w-[108px] h-[175px] ml-[82px] mt-[58px] '>
        <ul className=' flex flex-col justify-between gap-[12px]'>
          <li className='text-[16px] w-[43px] h-[20px] font-normal linear-[20px]  font-clash-display text-[#FFFFFF]'>
          Menu
          </li>
          <li className='text-[14px] font-normal linear-[19px]    font-Satoshi Medium text-[#FFFFFF]'>New arrivals</li>
          <li className='text-[14px] font-normal linear-[19px]   font-Satoshi Medium text-[#FFFFFF]'>Recently viewed</li>
          <li className='text-[14px] font-normal linear-[19px]   font-Satoshi Medium text-[#FFFFFF]'>Popular this week</li>
          <li className='text-[14px] font-normal linear-[19px]   font-Satoshi Medium text-[#FFFFFF]'><Link href="./allproducts">All products</Link></li>
        </ul>
      </div>
      <div className='w-[105px] h-[175px] mt-[58px] gap-12'>
        <ul className=' flex flex-col justify-between gap-[12px]' >
          <li className='text-[16px] font-normal linear-[20px] font-clash-display 
          text-[#FFFFFF]'>Categories</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Crockery</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Furniture</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Homeware</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Plant pots</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Chairs</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Crockery</li>
        </ul>
      </div>
      <div className='w-[105px] h-[175px] mt-[58px] gap-12'>
        <ul className=' flex flex-col justify-between gap-[12px]'>
          <li className='text-[16px] font-normal linear-[20px] font-clash-display
           text-[#FFFFFF]'>Our company</li>
           
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'><Link href="./about">About us</Link></li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Vacancies</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'><Link href="./listing"> Contact us</Link></li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Privacy</li>
          <li className='text-[14px] font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Returns policy</li>

        </ul>
        </div>
      <div className=' w-[627px] h-[175px] mt-[58px] mr-[82px] '>
        
          <h1 className='text-[16px]  font-normal linear-[20px] font-clash-display 
          text-[#FFFFFF]'>Join our mailing list</h1>
         
          <div className='mt-4 '>
          <input type="email" className="form-input w-[509px] h-[56px] bg-opacity-10
           text-[16px] font-normal linear-[21px] bg-[#F9F9F9]" placeholder='Your@email.com ' 
          ></input>
           <button
            className="w-[118px] h-[56px] text-[16px] bg-[#FFFFFF]
            font-normal linear-[24px] text-[#2A254B] "  >
            Sign up
          </button>
          </div>

        </div>
       <div className='w-[1277px] h-[0] border border-[#4E4D93] border-1px mx-[80px] items-center mt-[80px]  '></div>
                       
      {/* copywrite div */}
       <div className=' w-full mx-[80px]  flex justify-between items-center mb-[10px] '>
              <h1 className='text-[14px]  font-normal linear-[19px] font-Satoshi Medium text-[#FFFFFF]'>Copyright 2022 Avion LTD</h1>
              <div className='flex gap-[24px]'>
              <RiLinkedinLine className='bg-white w-[24px] h-[24px] '/>
              <RiFacebookLine className='bg-white w-[24px] h-[24px]' />
              <FaInstagram className='text-white w-[24px] h-[24px]'/>
              <AiFillSkype className='text-white w-[24px] h-[24px]'/>
              <TbBrandTwitterFilled className='text-white w-[24px] h-[24px]'/>
              <FaPinterest className='text-white w-[24px] h-[24px]'/>
            </div>
            
           
        
              </div>
    </div>

    

    </>   
       
       
    
  )
}

export default Footer