import React, { useState ,useEffect} from "react";
import logo from "../images/image 1.png";
import closeup from "../images/close-up.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import useApi from "../Customhook/useApi";

const Login = ({ toggleForm ,setModalOpen}) => {
  const [postData, setPostData] = useState({ email: "", password: "" });
  const [triggerApiCall, setTriggerApiCall] = useState(false);
  const [errors, setErrors] = useState({});

  const { data, loading, error } = useApi(
    triggerApiCall ?  process.env.REACT_APP_LOGININ_API_URL : null,
    "POST",
    triggerApiCall ? postData : null
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setTriggerApiCall(true); // Trigger the API call
    }
  }; 

  useEffect(() => {
    if (data?.status) {
      console.log("Login successful:", data);
      localStorage.setItem("userToken",data.items.token);
      localStorage.setItem("userId",data.items.userId)
      setModalOpen(false);
    }
    if (error) {
      console.error("Error:", error);
    }
  }, [data, error]);

  const validateForm = () => {
    const errors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`|}{[\]:;?,./<>]).{6,}$/;

    if (!postData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(postData.email)) {
      errors.email = 'Valid email is required';
    }

    if (!postData.password) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(postData.password)) {
      errors.Password = 'Must be 6+ chars, incl. uppercase, lowercase, digit, & special char';
    }
    return errors;
  };

  return (
    <div className="flex h-full w-full items-center justify-center md:p-0">
      <div className="flex flex-col justify-center md:flex-row w-full h-full rounded-2xl bg-white border overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-8">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-12 mb-4 md:w-[200px] md:h-[58px]"
          />
          <form
            className="w-full justify-center items-center"
            method="POST"
            onSubmit={handleSubmit}
            action="#"
          >
            <div className="flex flex-col mt-4 ">
              <label className="text-black font-bold text-sm md:text-base text-left">
                Email address:
              </label>
              <input
                id="email"
                type="text"
                className="h-8  px-4 border rounded-lg border-gray-300"
                name="email"
                placeholder="Enter Your address"
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-black font-bold text-sm md:text-base">
                Password:
              </label>
              <input
                id="password"
                type="password"
                className="h-8  px-4 border rounded-lg border-gray-300"
                name="password"
                placeholder="Enter Your Password"
                onChange={handleChange}
                required
              />
             {errors.Password && <p className="text-red-500 text-xs mt-1">{errors.Password}</p>}
            </div>
            <div className="flex flex-col mt-6">
              <button
                type="submit"
                className="h-8 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg"
                onSubmit={handleSubmit}
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
