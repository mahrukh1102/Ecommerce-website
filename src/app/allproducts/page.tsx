import React from "react";
import Image from "next/image";
import Link from "next/link";
import Topnav from "../components/Topnav";

function allproducts() {
  const products = [
    {
      name: "The Dandy chair",
      price: "£250",
      img: "/chair1.png",
    },
    {
      name: "Rustic Vase Set",
      price: "£155",
      img: "/rustyvas.png",
    },
    {
      name: "The Silky Vase",
      price: "£125",
      img: "/silkyvas.png",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      img: "/lamp.png",
    },
  ];

  const moreproducts = [
    {
        name: "The Dandy chair",
        price: "£250",
      img: "/hanglamp.png",
    },
    {
     name: "Rustic Vase Set",
        price: "£155",
      img: "/pot.png",
    },
    {
        name: "The Silky Vase",
        price: "£125",
      img: "/table.png",
    },
    {
      name: "The Lucy Lamp",
      price: "£399",
      img: "/chairs.png",
    },
  ];

  return (
   <div> 
     <Topnav/>
    <div className=" w-full max-w-[1440px]  mx-auto">
      {/* banner */}
      <div className="w-[1440px] h-[209px]">
        <img
          src="Frame 143.png"
          alt="frame143"
          className="w-full h-full "
        ></img>
      </div>

      {/* fixed div */}
      <div className=" sticky top-0 flex justify-between items-center w-full max-w-[1440px] h-[64px]  mx-auto  bg-white ">
        <div className=" flex justify-between w-[557px] h-[48px]  ml-[24px] gap-[12px] bg-white">
          {/* category */}
          <div className="w-full max-w-sm">
            <select
              id="Category"
              name="Category"
              className="block w-[137px] h-[48px] px-[24px] py-[12px] gap-[8px] bg-white  focus:outline-none font-Satoshi Medium font-normal text-[#2A254B] text-[16px]"
            >
              <option value="" disabled selected hidden>
                Category
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          {/* product type */}
          <div className="w-full max-w-sm">
            <select
              name="options"
              className="block w-[162px] h-[48px] px-[24px] py-[12px] gap-[8px] bg-white  focus:outline-none  font-Satoshi Medium font-normal text-[#2A254B] text-[16px]"
            >
              <option value="" disabled selected hidden>
                Product type
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          {/* price  */}
          <div className="w-full max-w-sm">
            <select
              name="options"
              className="block w-[108px] h-[48px] px-[24px] py-[12px] gap-[8px] bg-white  focus:outline-none font-Satoshi Medium font-normal text-[#2A254B] text-[16px]"
            >
              <option value="" disabled selected hidden>
                Price
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          {/* brand */}
          <div className="w-full max-w-sm">
            <select
              name="options"
              className="block w-[114px] h-[48px] px-[24px] py-[12px] gap-[8px] bg-white  focus:outline-none font-Satoshi Medium font-normal text-[#2A254B] text-[16px]"
            >
              <option value="" disabled selected hidden>
                Brand
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>

            {/* sorting  */}
        <div className="flex items-center w-[240px] h-[48px] mr-[24px] gap-[8px] ">
          <h2 className=" font-Satoshi Medium text-[#2A254B] font-normal w-[67px] h-[21px] text-[14px] leading-[21px]  ">
            Sorting by:
          </h2>

          <select
            id="Date"
            name="Date"
            className="block w-[154px] h-[48px] px-[24px] py-[12px] bg-white   focus:outline-none font-Satoshi Medium font-normal  text-[16px]"
          >
            <option value="" disabled selected hidden>
              Date added
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      {/* product grid row 1 */}

      <div className="container w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className=" overflow-hidden "
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-[305px] h-[375px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>

                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* row 2  */}
      <div className="container w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {moreproducts.map((product, index) => (
            <div
              key={index}
              className=" overflow-hidden "
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-[305px] h-[375px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>

                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* row 3 */}
      <div className="container w-[1440px]  mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className=" overflow-hidden ">
              <img
                src={product.img}
                alt={product.name}
                className="w-[305px] h-[375px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-[24px]  leading-[28px] font-semibold text-[#3A3A3A] mt-[10px] p-2">
                  {product.name}
                </h2>

                <p className="text-[20px] weight-[600px] leading=[30px] text-[#3A3A3A] p-2 ">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* button div  */}
      <div className=" flex  justify-center">
        {" "}
        <button
          className="w-[170px] h-[56px] mt-[35px]  mb-[40px] bg-[#F9F9F9] 
    text-[16px] leading-6 font-normal text-[#2A254B] px-7 py-4"
        >
          View collection
        </button>
      </div>
      {/* maindiv down */}
    </div>
    </div>
  );
}

export default allproducts;
