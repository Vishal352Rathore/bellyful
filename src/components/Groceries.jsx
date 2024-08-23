import React from "react";
import { useState, useEffect } from "react";
import useApi from "../Customhook/useApi";
import backgrountblue from "../images/empty-studio-blue.png";
import pngitem from "../images/Pngitem.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import beverage1 from "../images/assorted-beverage-1.png";
import beverage2 from "../images/assorted-beverage-2.png";
import beverage3 from "../images/assorted-beverage-3.png";
import beverage4 from "../images/assorted-beverage-4.png";

const Groceries = () => {
  const location = useLocation();

  const [subcategories, setSubcategories] = useState([]);

  const [isSubcategory, setIsSubcategory] = useState(false);

  var token = localStorage.getItem("userToken");

  const { data, loading, error } = useApi(
    process.env.REACT_APP_GET_CATEGORY_API_URL,
    "GET",
    null,
    token
  );

  useEffect(() => {
    if (data) {
      console.log("All Subcategories", data);
      setSubcategories(data.categories);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  return (
    <>
      <div className="relative w-full h-[25vh] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <img
          src={backgrountblue}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 h-full flex items-center justify-end p-2 md:p-4 lg:p-8">
          <img
            src={pngitem}
            alt="Groceries"
            className="w-[150px] md:w-[300px] lg:w-[556px] h-auto object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-20 md:left-4 lg:left-[189px] transform -translate-y-1/2 flex flex-col items-start md:items-start p-2 md:p-4 lg:p-8">
          <div className="text-white font-sans text-left md:text-left">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#000000]">
              Groceries
            </p>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
              at your
            </p>
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#000000]">
              doorstep
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end p-4">
        <div className="relative w-full max-w-[418px]">
          <input
            type="search"
            placeholder="Search by City"
            className="w-full h-[35px] rounded-full border border-gray-300 px-4 pr-10"
          />
          <ExpandMoreIcon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            fontSize="small"
          />
        </div>
      </div>

      <div className="flex justify-center p-4 md:p-8">
        <div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          style={{ gap: "30px" }}
        >
          {subcategories?.map((subcategory, index) => (
            <Link
              to={subcategory.sub_categories ?  "category" : "subcategory"}
              state={{
                categoryName: subcategory.name,
                isSubcategory: isSubcategory
              }}
              onClick={() => {
                if (subcategory.sub_categories) {
                  setSubcategories(subcategory.sub_categories);
                  setIsSubcategory(true);
                }
              }}
            >
              <div
                key={index}
                className="bg-[#F2FFE6] max-w-[295px] max-h-[232px] w-full h-auto rounded-lg flex flex-col justify-between items-center p-4 shadow-custom"
              >
                <p className="text-center font-bold text-sm text-md text-lg">
                  {subcategory.name}
                </p>
                <img
                  src={beverage1}
                  alt={subcategory.name}
                  className="w-full h-auto max-w-[215px] max-h-[163px] object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Groceries;
