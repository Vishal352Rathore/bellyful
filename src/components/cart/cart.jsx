import React from "react";
import cartLogo from "../../images/Cart_logo.png";
import waterBottle from "../../images/water-bottle.png";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveTwoToneIcon from "@mui/icons-material/RemoveTwoTone";
import amazonShortLogo from "../../images/Amazon_short_logo.png";
import carreFourLogo from "../../images/Carrefour_logo.png";

const cart = () => {
  return (
    // <div className="cart px-40">
    //   <div className="flex flex-col p-6">
    //     <div className="flex gap-6 mt-14">
    //       <div className="shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)] p-4 rounded-2xl px-14 py-6  flex flex-col items-center justify-center">
    //         <img
    //           src={waterBottle}
    //           alt="waterBottle"
    //           className="w-[59px] h-[59px] mb-4"
    //         />
    //         <div className="flex justify-center items-center gap-3">
    //           <p className="text-black font-semibold">
    //             <RemoveTwoToneIcon />
    //           </p>
    //           <p className="text-black font-semibold">3</p>
    //           <p className="text-black font-semibold">
    //             <AddTwoToneIcon />
    //           </p>
    //         </div>
    //       </div>

    //       <div className=" shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)]  p-4 px-20 py-8 rounded-2xl flex flex-col justify-evenly gap-6 bg-[#F1FFE3]">
    //         <div className="flex flex-col items-center w-full">
    //           <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //           <p className="text-[40px] text-[#6CBD44] font-bold">500</p>
    //           <p className="text-gray-600">5 liter</p>
    //         </div>
    //       </div>

    //       <div className="shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)] p-4 px-20 py-8 rounded-2xl flex flex-col justify-evenly gap-6 bg-[#FFFFFF]">
    //         <div className=" flex flex-col items-center w-full">
    //           <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //           <p className="text-[40px] text-[#6CBD44] font-bold">500</p>
    //           <p className="text-gray-600">5 liter</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex gap-6 mt-14">
    //       <div className="shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)] p-4 rounded-2xl px-14 py-6  flex flex-col items-center justify-center">
    //         <img
    //           src={waterBottle}
    //           alt="waterBottle"
    //           className="w-[59px] h-[59px] mb-4"
    //         />
    //         <div className="flex justify-center items-center gap-3">
    //           <p className="text-black font-semibold">
    //             <RemoveTwoToneIcon />
    //           </p>
    //           <p className="text-black font-semibold">3</p>
    //           <p className="text-black font-semibold">
    //             <AddTwoToneIcon />
    //           </p>
    //         </div>
    //       </div>

    //       <div className=" shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)]  p-4 px-20 py-8 rounded-2xl flex flex-col justify-evenly gap-6 bg-[#F1FFE3]">
    //         <div className="flex flex-col items-center w-full">
    //           <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //           <p className="text-[40px] text-[#6CBD44] font-bold">500</p>
    //           <p className="text-gray-600">5 liter</p>
    //         </div>
    //       </div>

    //       <div className="shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_4px_8px_rgba(0,0,0,0.2)] p-4 px-20 py-8 rounded-2xl flex flex-col justify-evenly gap-6 bg-[#FFFFFF]">
    //         <div className=" flex flex-col items-center w-full">
    //           <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //           <p className="text-[40px] text-[#6CBD44] font-bold">500</p>
    //           <p className="text-gray-600">5 liter</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div></div>
    //   </div>
    //   <div className="flex gap-6 p-6 mt-28">
    //     <div className="flex flex-col items-center gap-6">
    //       <div className=" px-16 py-12 rounded-2xl flex flex-col items-center justify-center w-full">
    //         <div className="w-[63px] h-[63px]">
    //           <img
    //             src={cartLogo}
    //             alt="cartLogo"
    //             className="w-full h-full mb-4"
    //           />
    //         </div>
    //         <span className="text-[48] font-bold">Total</span>
    //       </div>
    //     </div>

    //     <div className=" shadow-lg shadow-gray-400/50 px-8 py-6 rounded-2xl flex flex-col  gap-6 bg-[#F1FFE3]">
    //       <div className="flex flex-col items-center w-full">
    //         <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //         <p className="text-[40px] text-[#6CBD44] font-bold">1000</p>
    //         <button className="w-full bg-[#6CBD44]  px-8 rounded-full text-white text-[24px] font-medium">
    //           Checkout
    //         </button>
    //       </div>
    //     </div>

    //     <div className="shadow-lg shadow-gray-400/50 px-8 py-6 rounded-2xl flex flex-col gap-6 bg-[#FFFFFF]">
    //       <div className=" flex flex-col items-center w-full">
    //         <p className="text-[24px] text-gray-800 font-medium">AED</p>
    //         <p className="text-[40px] text-[#6CBD44] font-bold">1000</p>
    //         <button className="w-full bg-[#6CBD44]  px-8 rounded-full text-white text-[24px] font-medium">
    //           Checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="cart px-4 lg:px-40">
      <div className="flex flex-col p-6">
        {/* First Row */}
        <div className="flex gap-6 mt-8 md:mt-14">
          {/* Product Section */}
          <div className="p-4 flex flex-col items-center justify-center w-full sm:w-1/3"></div>

          <div className=" p-4 flex flex-col items-center justify-center w-full md:w-1/6 sm:w-1/3">
            <img
              src={carreFourLogo}
              alt="carreFourLogo"
              className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] mb-4"
            />
          </div>
          <div className=" p-4 flex flex-col items-center justify-center w-full md:w-1/3">
            <img
              src={amazonShortLogo}
              alt="amazonShortLogo"
              className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] mb-4"
            />
          </div>
        </div>

        <div className="flex gap-6 mt-8 md:mt-14">
          {/* Product Section */}
          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center w-full md:w-1/6 sm:w-1/3">
            <img
              src={waterBottle}
              alt="waterBottle"
              className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] mb-4"
            />
            <div className="flex justify-center items-center gap-3">
              <button className="text-black font-semibold">
                <RemoveTwoToneIcon />
              </button>
              <p className="text-black font-semibold">3</p>
              <button className="text-black font-semibold">
                <AddTwoToneIcon />
              </button>
            </div>
          </div>

          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center bg-[#F1FFE3] w-full md:w-1/6 sm:w-1/3">
            <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
              AED
            </p>
            <p className="text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
              200
            </p>
            <p className="text-gray-600 text-[14px] md:text-[16px]">5 liter</p>
          </div>
          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center bg-white  w-full md:w-1/6 sm:w-1/3">
            <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
              AED
            </p>
            <p className="text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
              300
            </p>
            <p className="text-gray-600 text-[14px] md:text-[16px]">5 liter</p>
          </div>
        </div>
        <div className="flex gap-6 mt-8 md:mt-14">
          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center w-full md:w-1/6">
            <img
              src={waterBottle}
              alt="waterBottle"
              className="w-[50px] h-[50px] md:w-[59px] md:h-[59px] mb-4"
            />
            <div className="flex justify-center items-center gap-3">
              <button className="text-black font-semibold">
                <RemoveTwoToneIcon />
              </button>
              <p className="text-black font-semibold">3</p>
              <button className="text-black font-semibold">
                <AddTwoToneIcon />
              </button>
            </div>
          </div>
          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center  bg-[#F1FFE3] w-full md:w-1/6">
            <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
              AED
            </p>
            <p className="text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
              210
            </p>
            <p className="text-gray-600 text-[14px] md:text-[16px]">5 liter</p>
          </div>
          <div className="shadow-md lg:p-4 sm:p-1 rounded-2xl flex flex-col items-center justify-center  bg-white w-full md:w-1/6">
            <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
              AED
            </p>
            <p className="text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
              350
            </p>
            <p className="text-gray-600 text-[14px] md:text-[16px]">5 liter</p>
          </div>
        </div>
      </div>
      {/* Total and Checkout Section */}
      <div className="flex gap-6 p-6 mt-16 md:mt-28">
        <div className="flex flex-col items-center gap-6 w-full sm:w-1/6 md:w-1/6">
          <div className="lg:px-6 lg:py-4 sm:px-10 sm:py-8 md:px-16 md:py-12 rounded-2xl flex flex-col items-center justify-center w-full">
            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[63px] md:h-[63px]">
              <img
                src={cartLogo}
                alt="cartLogo"
                className="w-full h-full mb-4"
              />
            </div>
            <span className="text-[28px] sm:text-[36px] md:text-[48px] font-bold">
              Total
            </span>
          </div>
        </div>

        <div className="shadow-lg lg:px-6 sm:px-10 sm:py-8 md:px-12 md:py-8 rounded-2xl flex flex-col items-center bg-[#F1FFE3] w-full h-full sm:w-1/6 md:w-1/6">
          <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
            AED
          </p>
          <p className="text-[28px] sm:text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
            1000
          </p>
          <button className="w-full bg-[#6CBD44] px-4 py-2 sm:px-8 sm:py-2 md:px-8 md:py-2 rounded-full text-white text-[18px] sm:text-[20px] md:text-[24px] font-medium">
            Checkout
          </button>
        </div>

        <div className="shadow-lg lg:px-6  sm:px-10 sm:py-8 md:px-12 md:py-8 rounded-2xl flex flex-col items-center bg-white w-full h-full sm:w-1/6 md:w-1/6">
          <p className="text-[20px] md:text-[24px] text-gray-800 font-medium">
            AED
          </p>
          <p className="text-[28px] sm:text-[32px] md:text-[40px] text-[#6CBD44] font-bold">
            1000
          </p>
          <button className="w-full bg-[#6CBD44] px-4 py-2 sm:px-8 sm:py-2 md:px-8 md:py-2 rounded-full text-white text-[18px] sm:text-[20px] md:text-[24px] font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

// Test comment 2

export default cart;
