// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import useApi from "../../Customhook/useApi"; // assuming you have a custom hook for API calls
// import subCategoryBannerBg from "../../images/sub-category-banner-bg.png";
// import subCategoryBanner from "../../images/sub-category-banner.png";

// const Searchcategoryname = () => {
//   const location = useLocation();
//   const { products = [], categoryName = "",page,limit } = location.state || {}; // Extract data from location.state

//   const [currentPage, setCurrentPage] = useState(limit); // Initialize currentPage state to 1
//   const [totalPages, setTotalPages] = useState(page); // State to track total number of pages
//   const [productList, setProductList] = useState(products); // Use state to manage products

//   const token = localStorage.getItem("userToken");

//   const { data, loading, error } = useApi(
//     location.pathname === "/Groceries/category/subcategory" ||
//       location.state?.isSubcategory
//       ? `${process.env.REACT_APP_GET_PRODUCT_BY_SUBCATEGORY}?sub_category_name=${categoryName}&page=${currentPage}`
//       : `${process.env.REACT_APP_GET_PRODUCT_BY_CATEGORY}?category_name=${categoryName}&page=${currentPage}`,
//     "GET",
//     null,
//     token
//   );

//   // useEffect(() => {
//   //   if (data) {
//   //     console.log("All Product by categories", data);
//   //     setProductList(data.items.products);
//   //     setTotalPages(data.items.totalPages); // Assuming your API returns totalPages
//   //   }
//   //   if (error) {
//   //     console.error("Error:", error);
//   //   }
//   // }, [data, error]);

//   return (
//     <div className="overflow-x-hidden">
//       <div className="relative w-full h-[25vh] sm:h-[300px] md:h-[400px] lg:h-[500px]">
//         <img
//           src={subCategoryBannerBg}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 right-0 flex items-center justify-end p-4 md:p-6 lg:p-8">
//           <img
//             src={subCategoryBanner}
//             alt="Banner"
//             className="w-[190px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto object-contain"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center p-4 sm:p-4 md:mx-10 sm:mx-4 md:p-4 mt-10 md:mt-20">
//         <div
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full"
//           style={{ gap: "30px" }}
//         >
//           {productList.length > 0 ? (
//             productList.map((product, index) => (
//               <Link
//                 to="ProductDescription"
//                 state={{ productName: product.name }}
//                 key={index}
//               >
//                 <div className="shadow-lg shadow-gray-400/50  w-full p-4  rounded-lg flex flex-col justify-center items-center bg-white h-[225px]">
//                   <img
//                     src={product.image_path}
//                     alt={product.name}
//                     className="w-[85px] h-[100px] sm:w-[100px] sm:h[120px] md:w-[140px] lg:w-[100px] object-fit mb-4"
//                   />
//                   <div className="flex flex-col items-start text-left sm:text-left w-full">
//                     <p className="text-green-600 font-semibold text-sm sm:text-base">
//                       {product.price}
//                     </p>
//                     <p className="text-gray-800  mt-2 text-sm sm:text-base line-clamp-2">
//                       {product.name}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No Product Available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchcategoryname;

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import subCategoryBannerBg from "../../images/sub-category-banner-bg.png";
// import subCategoryBanner from "../../images/sub-category-banner.png";

// const Searchcategoryname = () => {
//   const location = useLocation();
//   const {
//     products = [],
//     categoryName = "",
//     page = 2,
//     limit = 10,
//   } = location.state || {};
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(page);
//   const [totalPages, setTotalPages] = useState(1);
//   const [productList, setProductList] = useState(products);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setTotalPages();
//     // Trigger a new search with the updated page
//     navigate(`/searchcategoryname`, {
//       state: {
//         products: productList,
//         categoryName,
//         page: pageNumber, // Updated page number
//         limit,
//       },
//     });
//   };

//   return (
//     <div className="overflow-x-hidden">
//       <div className="relative w-full h-[25vh] sm:h-[300px] md:h-[400px] lg:h-[500px]">
//         <img
//           src={subCategoryBannerBg}
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 right-0 flex items-center justify-end p-4 md:p-6 lg:p-8">
//           <img
//             src={subCategoryBanner}
//             alt="Banner"
//             className="w-[190px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto object-contain"
//           />
//         </div>
//       </div>

//       <div className="flex justify-center p-4 sm:p-4 md:mx-10 sm:mx-4 md:p-4 mt-10 md:mt-20">
//         <div
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full"
//           style={{ gap: "30px" }}
//         >
//           {products.length > 0 ? (
//             products.map((product, index) => (
//               <Link
//                 to="ProductDescription"
//                 state={{ productName: product.name }}
//                 key={index}
//               >
//                 <div className="shadow-lg shadow-gray-400/50 w-full p-4 rounded-lg flex flex-col justify-center items-center bg-white h-[225px]">
//                   <img
//                     src={product.image_path}
//                     alt={product.name}
//                     className="w-[85px] h-[100px] sm:w-[100px] sm:h[120px] md:w-[140px] lg:w-[100px] object-fit mb-4"
//                   />
//                   <div className="flex flex-col items-start text-left sm:text-left w-full">
//                     <p className="text-green-600 font-semibold text-sm sm:text-base">
//                       {product.price}
//                     </p>
//                     <p className="text-gray-800 mt-2 text-sm sm:text-base line-clamp-2">
//                       {product.name}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No Product Available</p>
//           )}
//         </div>
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           disabled={currentPage <= 1}
//           onClick={() => handlePageChange(currentPage - 1)}
//           className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-lg">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           disabled={currentPage >= totalPages}
//           onClick={() => handlePageChange(currentPage + 1)}
//           className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Searchcategoryname;



import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import subCategoryBannerBg from "../../images/sub-category-banner-bg.png";
import subCategoryBanner from "../../images/sub-category-banner.png";

const Searchcategoryname = () => {
  const location = useLocation();
  const {
    products = [],
    categoryName = "",
    page = 1,
    limit = 12,
    totalProducts = 0, // Ensure this value is correctly passed
  } = location.state || {};

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(1);
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    // Ensure totalPages is calculated correctly
    const calculatedTotalPages = Math.ceil(totalProducts / limit);
    console.log("Total Products:", totalProducts); // Debugging output
    console.log("Limit:", limit); // Debugging output
    console.log("Calculated Total Pages:", calculatedTotalPages); // Debugging output
    
    setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1);
    setProductList(products);
  }, [products, totalProducts, limit]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Trigger a new search with the updated page
    navigate(`/searchcategoryname`, {
      state: {
        products: productList,
        categoryName,
        page: pageNumber, // Updated page number
        limit,
        totalProducts, // Ensure totalProducts is passed along
      },
    });
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-[25vh] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={subCategoryBannerBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 flex items-center justify-end p-4 md:p-6 lg:p-8">
          <img
            src={subCategoryBanner}
            alt="Banner"
            className="w-[190px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center p-4 sm:p-4 md:mx-10 sm:mx-4 md:p-4 mt-10 md:mt-20">
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full"
          style={{ gap: "30px" }}
        >
          {productList.length > 0 ? (
            productList.map((product, index) => (
              <Link
                to="ProductDescription"
                state={{ productName: product.name }}
                key={index}
              >
                <div className="shadow-lg shadow-gray-400/50 w-full p-4 rounded-lg flex flex-col justify-center items-center bg-white h-[225px]">
                  <img
                    src={product.image_path}
                    alt={product.name}
                    className="w-[85px] h-[100px] sm:w-[100px] sm:h[120px] md:w-[140px] lg:w-[100px] object-fit mb-4"
                  />
                  <div className="flex flex-col items-start text-left sm:text-left w-full">
                    <p className="text-green-600 font-semibold text-sm sm:text-base">
                      {product.price}
                    </p>
                    <p className="text-gray-800 mt-2 text-sm sm:text-base line-clamp-2">
                      {product.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Product Available</p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage <= 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage >= totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Searchcategoryname;