import React from "react";
import logo from "../images/logo (2).png";
import closeup from "../images/close-up.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Login = ({ toggleForm }) => {
  return (
    <div className="flex h-full w-full items-center justify-center md:p-0">
      <div className="flex flex-col justify-center md:flex-row w-full h-full rounded-2xl bg-white border overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-8">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-12 mb-4 md:w-[200px] md:h-[58px]"
          />
          <form className="w-full" method="POST" action="#">
            <div className="flex flex-col mt-4">
              <label className="text-black font-bold text-sm md:text-base">
                Email address:
              </label>
              <input
                id="email"
                type="text"
                className="h-10 w-full px-4 border rounded-lg border-gray-300"
                name="email"
                placeholder="Enter Your address"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-black font-bold text-sm md:text-base">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="h-10 w-full px-4 border rounded-lg border-gray-300"
                name="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="flex flex-col mt-6">
              <button
                type="submit"
                className="h-10 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center text-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center">
            <Stack direction="row" spacing={2}>
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
          <div className="flex justify-center items-center pt-4">
            <p className="text-sm font-semibold">
              Don’t have an account yet?{" "}
              <span
                className="text-green-600 cursor-pointer"
                onClick={toggleForm}
              >
                Register Now
              </span>
            </p>
          </div>
        </div>
        <div
          className="hidden md:block w-1/2  bg-cover bg-center"
          style={{ backgroundImage: `url(${closeup})` }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
