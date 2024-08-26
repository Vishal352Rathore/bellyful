import React, { useState ,useEffect} from "react";
import subCategoryBannerBg from "../../images/sub-category-banner-bg.png";
import subCategoryBanner from "../../images/sub-category-banner.png";
import waterBottle from "../../images/water-bottle.png";
import { Link ,useLocation } from "react-router-dom";
import useApi from "../../Customhook/useApi";

const SubCategory = () => {

  const location = useLocation();
  console.log("location",location);
  const { categoryName ,isSubcategory } = location.state || {};

  const [currentPage, setCurrentPage] = useState("Colddriks");

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  const [products, setProducts] = useState([]);

  var token = localStorage.getItem("userToken");

  const { data, loading, error } = useApi(
    location.pathname === "/Groceries/category/subcategory" || location.state.isSubcategory ? `${process.env.REACT_APP_GET_PRODUCT_BY_SUBCATEGORY}?sub_category_name=${categoryName}&page=${1}` :
     `${process.env.REACT_APP_GET_PRODUCT_BY_CATEGORY}?category_name=${categoryName}&page=${1}` ,
    "GET",
    null,
    token
  );

  useEffect(() => {
    if (data) {
      console.log("All Product by categories", data);
      setProducts(data.items.products);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);


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

      <nav className="p-4 sm:p-6 lg:p-10">
        <ul className="flex flex-wrap gap-2 justify-center sm:justify-start mx-2 sm:mx-4 lg:mx-6 text-sm sm:text-base">
          {["Colddriks", "Milk Products", "Water", "Coffee", "Tea"].map(
            (tab) => (
              <li
                key={tab}
                className={`px-4 py-2 sm:px-6 sm:py-1.5 bg-white text-black list-none border border-black rounded-lg cursor-pointer transition-colors duration-300 ${
                  currentPage === tab
                    ? "!bg-[#4CD47B] !text-white !border-none"
                    : "bg-white text-black border border-black"
                }`}
                onClick={(e) => handlePageChange(e, tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
        {products?.map((product, index) => (
          <Link to="ProductDescription" state={{productName:product.name}} key={index}>
            <div
              
              className="shadow-lg shadow-gray-400/50 p-4 rounded-lg flex flex-col items-center bg-white"
            >
              <img
                src={waterBottle}
                alt="waterBottle"
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-auto mb-4"
              />
              <div className="flex flex-col items-start text-left sm:text-left w-full">
                <p className="text-green-600 font-semibold text-sm sm:text-base">
                  {product.price}
                </p>
                <p className="text-gray-800 font-medium mt-2 text-sm sm:text-base">
                  {product.brand_name}
                </p>
                <p className="text-gray-600 text-sm sm:text-base"></p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
