import { useState, useEffect } from "react";
import logo from "../../images/belliful_logo.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModel";
import AllCategoryDropdown from "../ui/DropDown";
import useApi from "../../Customhook/useApi";
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([
    {
      name: "Household Cleaners",
      subcategories: [], // Initialize with empty array
    },
    {
      name: "Grocery",
      subcategories: [{ name: "Subcategory 2-1" }, { name: "Subcategory 2-2" }],
    },
  ]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  var token = localStorage.getItem("userToken");

  useEffect(() => {
  if(!token){
    setModalOpen(true);
  }
  }, [])
  

  const { data, loading, error } = useApi(
    process.env.REACT_APP_GET_CATEGORY_API_URL,
    "GET",
    null,
    token
  );

  useEffect(() => {
    if (data) {
      // console.log("All Subcategories", data);
      setSubcategories(data.categories);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  useEffect(() => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === "Household Cleaners"
          ? { ...category, subcategories }
          : category
      )
    );
  }, [subcategories]);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Main Header */}
      <div className="bg-white p-4 shadow-md">
        <div className="flex items-center px-4 md:px-12 justify-between max-w-screen-xxl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Bellyful Logo" className="h-12 md:h-16" />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative w-[300px] md:w-[418px]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Enter Keyword"
                className="p-2 pl-10 pr-14 border border-gray-300 w-full h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-black text-base subpixel-antialiased font-semibold">
                  Search
                </span>
              </div>
            </div>

            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="Cart"
                  className="text-black text-base subpixel-antialiased font-semibold hover:text-green-500"
                >
                  <ShoppingBasketIcon className="mr-1 h-4" />
                  Cart
                </Link>
              </li>
              <li>
                <a
                  href="."
                  className="text-black text-base subpixel-antialiased font-semibold hover:text-green-500"
                >
                  How it Works
                </a>
              </li>
              {/* <li className="flex items-center space-x-1">
                <button
                  onClick={openModal}
                  className="text-black text-base subpixel-antialiased font-semibold hover:text-green-500 flex items-center"
                >
                  <PermIdentityIcon className="mr-1" />
                  LogIn
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white shadow-md z-50 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-64`}
      >
        <div className="flex flex-col p-4">
          <div className="flex justify-between">
            <Link to="/">
              <img src={logo} alt="Bellyful Logo" className="h-12 md:h-16" />
            </Link>
            <button
              className="self-end p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="relative mb-4 mt-8">
            <input
              type="search"
              placeholder="Enter Keyword"
              className="p-2 border border-gray-300 w-full h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="text-black text-base font-semibold hover:text-green-500 flex items-center"
                onClick={handleMenuItemClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="Faqs"
                className="text-black text-base font-semibold hover:text-green-500 flex items-center"
                onClick={handleMenuItemClick}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="subcategory"
                className="text-black text-base font-semibold hover:text-green-500 flex items-center"
                onClick={handleMenuItemClick}
              >
                Supermarket
              </Link>
            </li>
            <li>
              <Link
                to="Cart"
                className="text-black text-base font-semibold hover:text-green-500 flex items-center"
                onClick={handleMenuItemClick}
              >
                <ShoppingBasketIcon className="mr-1 h-4" />
                Cart
              </Link>
            </li>
            {/* <li>
              <button
                onClick={() => {
                  openModal();
                  handleMenuItemClick();
                }}
                className="text-black text-base font-semibold hover:text-green-500 flex items-center"
              >
                <PermIdentityIcon className="mr-1" />
                LogIn
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      {isModalOpen && <LoginModal closeModal={closeModal} setModalOpen={setModalOpen}/>}

      {/* Bottom Navigation */}
      <div className="bg-green-900 text-white">
        <div className="flex items-center justify-between h-10 max-w-screen-xxl mx-auto px-4 md:px-12">
          <div className="flex items-center bg-lime-300 h-[29px] w-[205px] border border-lime-200 rounded-full">
            <AllCategoryDropdown categories={categories} />

            {/* <p className="text-sm font-semibold text-amber-50 w-full h-full flex items-center justify-center">
              <DehazeIcon className="mr-1" />
              All Category
            </p>
            <Dropdown categories={categories} /> */}
          </div>

          <div className="hidden md:flex items-center text-base space-x-8">
            <ul className="flex space-x-12 items-center">
              <li>
                <Link to="/" className="block hover:text-lime-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="Faqs" className="block hover:text-lime-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="subcategory" className="block hover:text-lime-200">
                  Supermarket
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
