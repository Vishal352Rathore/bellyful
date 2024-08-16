import React from "react";
import logo from "../images/logo (2).png";
import closeup from "../images/close-up.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// Reusable Input Component
const InputField = ({ id, type, label, name, placeholder, required }) => (
  <div className="flex flex-col md:w-[48%] w-full">
    <label htmlFor={id} className="text-black font-bold text-base text-sm m-1">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      name={name}
      placeholder={placeholder}
      required={required}
    />
  </div>
);
const Signup = ({ toggleForm }) => {
  return (
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-y-scroll md:overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
        <img src={logo} alt="Logo" className="w-[200px] h-[58px] mb-2 " />

          <div className="w-full">
            <form className="w-full mx-auto" method="POST" action="#">
              {/* Name and Contact Info */}

              <div className="flex md:flex-row md:space-x-4 md:gap-0 gap-4">
                <InputField
                  id="first-name"
                  type="text"
                  label="First Name"
                  name="first_name"
                  placeholder="First Name"
                  required
                />
                <InputField
                  id="last-name"
                  type="text"
                  label="Last Name"
                  name="last_name"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:space-x-4 md:mt-4 ">
                <InputField
                  id="mobile-number"
                  type="text"
                  label="Mobile Number"
                  name="mobile_number"
                  placeholder="Mobile Number"
                  required
                />
                <InputField
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  placeholder="Enter Your Address"
                  required
                />
              </div>

              {/* Password and Confirm Password */}
              <div className="flex flex-col md:flex-row md:space-x-4 md:mt-4">
                <InputField
                  id="password"
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />
                <InputField
                  id="confirm-password"
                  type="password"
                  label="Confirm Password"
                  name="confirm_password"
                  placeholder="Confirm Your Password"
                  required
                />
              </div>

              {/* Nationality and Date of Birth */}
              <div className="flex flex-col md:flex-row md:space-x-4 md:mt-4">
                <InputField
                  id="nationality"
                  type="text"
                  label="Nationality"
                  name="nationality"
                  placeholder="Enter Your Nationality"
                  required
                />
                <div className="flex flex-col w-full md:w-1/2 px-2">
                  <label
                    htmlFor="dob"
                    className="text-black font-bold text-base text-md m-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3] text-gray-400"
                    name="dob"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col mt-4">
                <button
                  type="submit"
                  className="h-[40px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
                >
                  Register
                </button>
              </div>
            </form>

            {/* Divider and Social Media Links */}
            <div className="flex items-center text-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-600">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center items-center mb-2">
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="google"
                  src={google}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="facebook"
                  src={facebook}
                  sx={{ width: 24, height: 24 }}
                />
              </Stack>
            </div>

            {/* Login Link */}
            <div className="flex justify-center items-center">
              <p className="text-sm font-semibold">
                Already have an account?{" "}
                <span
                  className="text-[#6CBD44] cursor-pointer"
                  onClick={toggleForm}
                >
                  Login Now
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
            className="hidden md:block w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${closeup})` }}
          ></div>
      </div>
    </div>
  );
};
export default Signup;
