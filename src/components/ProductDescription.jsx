// import React from "react";
// import bottle from "../images/waterbottle.png";
// import amazon from "../images/amazon-logo.png";
// import carrefour from "../images/carrefour.png";

// const ProductDescription = ({ filledStars = 4, totalStars = 5 }) => {
//   const stars = Array(totalStars)
//     .fill(false)
//     .map((_, index) => index < filledStars);

//   return (
//     <>
//       <div className="flex items-center justify-evenly space-x-4 p-4 mt-8">
//         <div>
//           <img
//             src={bottle}
//             alt="water bottle"
//             className="h-[314px] object-cover"
//           />
//         </div>
//         <div className="">
//           <p className="text-3xl font-extrabold">Ergonomic Concrete Lamp</p>
//           <div className="flex items-center pt-4">
//             <p className="text-4xl font-medium font-black text-[#6CBD44]">
//               $24.00
//             </p>
//             {stars.map((isFilled, index) => (
//               <svg
//                 key={index}
//                 className={`w-4 h-4 ml-2 mt-4 ${
//                   isFilled
//                     ? "text-yellow-300"
//                     : "text-gray-300 dark:text-gray-500"
//                 }`}
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 22 20"
//               >
//                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//               </svg>
//             ))}
//             <p className="w-[50px] h-[16px] ml-4 mt-6 text-[10px] bg-[#E0EEE9] text-black text-center font-bold">
//               IN Stock
//             </p>
//           </div>

//           <p className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3 pt-4">
//             Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci
//             dapibus
//             <br /> ultrices. Tortor condimentum lacinia quis vel eros donec ac
//             odio. Velit euismod
//             <br /> in pellentesque massa placerat duis ultricies lacus.
//           </p>
//           <div className="flex mt-8 space-x-12">
//             <p class="h-9 w-[261px] rounded-full text-xl text-center border border-gray-400 flex items-center justify-center space-x-8">
//               <span class="text-[#6CBD44] text-4xl">-</span>
//               <span class="text-gray-500">|</span>
//               <span>3</span>
//               <span class="text-gray-500">|</span>
//               <span class="text-[#6CBD44] text-2xl">+</span>
//             </p>
//             <button className="h-[px] w-[261px] rounded-full bg-[#6CBD44] text-white">
//               Add to Cart
//             </button>
//           </div>
//           <div className="mt-4">
//             <p className="font-bold text-md">Price Comparison</p>
//             <p className="flex pl-2 items-center rounded-lg shadow-md w-[615px] h-[40px] border border-[#DADADA] bg-[#F4F4F4] text-black justify-between mt-4 text-wrap">
//               <img src={carrefour} alt="" className="w-[35px] h-[29px] " />
//               <span className=" pr-2 text-lg text-base font-semibold text-[#6CBD44]">
//                 $876
//               </span>
//             </p>
//             <p className="flex pl-2 items-center rounded-lg shadow-md w-[615px] h-[40px] border border-[#DADADA] text-black justify-between mt-4">
//               <img src={amazon} alt="" className="w-[50px] h-[25px] " />
//               <span className="pr-2 text-lg text-base font-semibold text-[#6CBD44]">
//                 $500
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full p-20 items-center justify-center ">
//         <a
//           href="."
//           className="block p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
//         >
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-bold">
//             Description
//           </h5>
//           <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//           <p className=" font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
//             People start migrating from conventional to organic products because
//             of their health benefits. Comparing chemically treated food versus
//             organic food reveals that the latter is more nutrient-dense. The
//             distinction between natural and organic food is well discernible. A
//             path of goodness extends from healthy soil to healthy humans in the
//             end.
//           </p>
//           <h5 className="font-bold mt-4">Overview :</h5>
//           <p>
//             Organic farming helps avoid the use of chemical additives or
//             genetically engineered ingredients. It must be fresh, and flavorful
//             with the myriad of vitamins and minerals that only come from whole
//             foods that have been harvested and consumed at their prime. Organic
//             food products provide a multitude of benefits.
//           </p>
//           <h5 className="font-bold  mt-4">Health Benefits :</h5>
//           <p>
//             Organic products may include higher concentrations of certain
//             antioxidants and flavonoids with antioxidant capabilities. A
//             naturally occurring toxic substance called cadmium is absorbed by
//             plants and can be found in higher quantities in fruits and
//             vegetables.Omega-3 fatty acids, a form of healthy unsaturated fat,
//             are present in organic dairy products, meats, and eggs in amounts up
//             to 50% higher than in conventional products.
//           </p>
//           <h5 className="font-bold bold mt-4">Environment :</h5>
//           <p>
//             Sustainable agricultural practices like organic farming aid in
//             mitigating the effects of global warming. Organic farming helps to
//             retain the soil's capacity for reproduction and regeneration, proper
//             plant nutrition, and solid soil management results in the production
//             of nutrient-rich and disease-resistant food. By diversifying their
//             crop portfolio, employing physical weed control, animal and green
//             manure, and crop rotation organic farmers seek to mitigate
//             ecological damage. Organic farming has the ability to sluggish
//             carbon dioxide emissions and slow down the effects of climate
//             change.
//           </p>
//         </a>
//       </div>
//     </>
//   );
// };

// export default ProductDescription;


import React from "react";
import bottle from "../images/waterbottle.png";
import amazon from "../images/amazon-logo.png";
import carrefour from "../images/carrefour.png";
import { Link } from "react-router-dom";

const ProductDescription = ({ filledStars = 4, totalStars = 5 }) => {
  const stars = Array(totalStars)
    .fill(false)
    .map((_, index) => index < filledStars);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4 p-4 mt-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={bottle}
            alt="water bottle"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-3xl font-extrabold">Ergonomic Concrete Lamp</p>
          <div className="flex items-center pt-4">
            <p className="text-4xl font-medium font-black text-[#6CBD44]">
              $24.00
            </p>
            {stars.map((isFilled, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ml-2 ${
                  isFilled
                    ? "text-yellow-300"
                    : "text-gray-300 dark:text-gray-500"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <p className="w-[50px] h-[16px] ml-4 mt-6 text-[10px] bg-[#E0EEE9] text-black text-center font-bold">
              IN Stock
            </p>
          </div>

          <p className="text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3 pt-4">
            Tortor at auctor urna nunc id cursus metus aliquam. Odio tempor orci
            dapibus
            <br /> ultrices. Tortor condimentum lacinia quis vel eros donec ac
            odio. Velit euismod
            <br /> in pellentesque massa placerat duis ultricies lacus.
          </p>
          <div className="flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0 lg:space-x-12">
            <p className="h-9 w-full lg:w-[261px] rounded-full text-xl text-center border border-gray-400 flex items-center justify-center space-x-8">
              <span className="text-[#6CBD44] text-4xl">-</span>
              <span className="text-gray-500">|</span>
              <span>3</span>
              <span className="text-gray-500">|</span>
              <span className="text-[#6CBD44] text-2xl">+</span>
            </p>
            <Link to="Cart" >
              <button className="h-12 w-full lg:w-[261px] rounded-full bg-[#6CBD44] text-white">Add to Cart</button>
            </Link>
          </div>
          <div className="mt-4">
            <p className="font-bold text-md">Price Comparison</p>
            <p className="flex items-center rounded-lg shadow-md w-full lg:w-[615px] h-[40px] border border-[#DADADA] bg-[#F4F4F4] text-black justify-between mt-4 text-wrap">
              <img src={carrefour} alt="" className="w-[35px] h-[29px] " />
              <span className="pr-2 text-lg text-base font-semibold text-[#6CBD44]">
                $876
              </span>
            </p>
            <p className="flex items-center rounded-lg shadow-md w-full lg:w-[615px] h-[40px] border border-[#DADADA] text-black justify-between mt-4">
              <img src={amazon} alt="" className="w-[50px] h-[25px] " />
              <span className="pr-2 text-lg text-base font-semibold text-[#6CBD44]">
                $500
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-4 lg:p-20">
        <a
          href="#"
          className="block p-4 bg-white border border-gray-200 rounded-lg shadow-md"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Description
          </h5>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            People start migrating from conventional to organic products because
            of their health benefits. Comparing chemically treated food versus
            organic food reveals that the latter is more nutrient-dense. The
            distinction between natural and organic food is well discernible. A
            path of goodness extends from healthy soil to healthy humans in the
            end.
          </p>
          <h5 className="font-bold mt-4">Overview :</h5>
          <p>
            Organic farming helps avoid the use of chemical additives or
            genetically engineered ingredients. It must be fresh, and flavorful
            with the myriad of vitamins and minerals that only come from whole
            foods that have been harvested and consumed at their prime. Organic
            food products provide a multitude of benefits.
          </p>
          <h5 className="font-bold mt-4">Health Benefits :</h5>
          <p>
            Organic products may include higher concentrations of certain
            antioxidants and flavonoids with antioxidant capabilities. A
            naturally occurring toxic substance called cadmium is absorbed by
            plants and can be found in higher quantities in fruits and
            vegetables.Omega-3 fatty acids, a form of healthy unsaturated fat,
            are present in organic dairy products, meats, and eggs in amounts up
            to 50% higher than in conventional products.
          </p>
          <h5 className="font-bold mt-4">Environment :</h5>
          <p>
            Sustainable agricultural practices like organic farming aid in
            mitigating the effects of global warming. Organic farming helps to
            retain the soil's capacity for reproduction and regeneration, proper
            plant nutrition, and solid soil management results in the production
            of nutrient-rich and disease-resistant food. By diversifying their
            crop portfolio, employing physical weed control, animal and green
            manure, and crop rotation organic farmers seek to mitigate
            ecological damage. Organic farming has the ability to sluggish
            carbon dioxide emissions and slow down the effects of climate
            change.
          </p>
        </a>
      </div>
    </>
  );
};

export default ProductDescription;
