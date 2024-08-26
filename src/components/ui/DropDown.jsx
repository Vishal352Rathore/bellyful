import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom"; // Import the icon

const AllCategoryDropdown = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setOpenCategory(null);
    setOpenSubcategory(null);
  };

  const handleCategoryHover = (index) => {
    if (isDropdownOpen) {
      setOpenCategory(index);
    }
  };

  const handleSubcategoryHover = (index) => {
    setOpenSubcategory(index);
  };

  return (
    <div className="relative">
      {/* All Category Button */}
      <div
        className="flex items-center bg-lime-300 h-[29px] w-[205px] border border-lime-200 rounded-full cursor-pointer"
        onClick={handleMouseEnter}
      >
        <p className="text-sm font-semibold text-amber-50 w-full h-full flex items-center justify-center">
          <DehazeIcon className="mr-1" />
          All Category
        </p>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute text-black top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul>
            {categories?.map((category, index) => (
              <li
                key={index}
                className="group relative cursor-pointer py-1 px-2 hover:bg-gray-100"
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={() => {
                  setOpenCategory(null);
                }}
              >
                {category.name}
                {openCategory === index && category.subcategories && (
                  <ul
                    className="absolute left-full top-0 mt-2 w-48 bg-white shadow-md rounded-md"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {category?.subcategories?.map((subcategory, subIndex) => (
                      <li
                        key={subIndex}
                        className="group relative cursor-pointer py-1 px-2 hover:bg-gray-100 flex items-center justify-between"
                        onMouseEnter={() => handleSubcategoryHover(subIndex)}
                        onMouseLeave={() => {
                          setOpenSubcategory(null);
                        }}
                      >
                        <Link
                          to={
                            subcategory.sub_categories
                              ? "category"
                              : "subcategory"
                          }
                          state={{
                            categoryName: subcategory.name,
                            isSubcategory: false,
                            index: subIndex,
                          }}
                        >
                          <span>{subcategory.name}</span>
                        </Link>
                        {subcategory?.sub_categories && (
                          <ArrowForwardIosIcon fontSize="small" />
                        )}
                        {openSubcategory === subIndex &&
                          subcategory.sub_categories && (
                            <ul className="absolute left-full top-0 mt-2 w-48 bg-white shadow-md rounded-md">
                              {subcategory?.sub_categories?.map(
                                (subSubcategory, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className="cursor-pointer p-2 hover:bg-gray-100"
                                  >
                                    <Link
                                      to="subcategory"
                                      state={{
                                        categoryName: subSubcategory.name,
                                        isSubcategory: true,
                                        index: subIndex,
                                      }}
                                    >
                                      <span> {subSubcategory.name} </span>
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllCategoryDropdown;
