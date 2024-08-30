import React, { useState, useEffect } from "react";
import useApi from "../Customhook/useApi";
import logo from "../images/image 1.png";
import closeup from "../images/close-up.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Reusable Input Component
const InputField = ({
  id,
  type,
  label,
  name,
  placeholder,
  required,
  value,
  onChange,
}) => (
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
      value={value}
      onChange={onChange}
    />
  </div>
);

const Signup = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    countryCode: "+971",
    email: "",
    password: "",
    confirmPassword: "",
    nationality: "United Arab Emirates",
    dateOfBirth: "",
  });

  const [errors, setErrors] = useState({});
  const [countryCodes, setCountryCodes] = useState([]);
  const [nationalities, setNationalities] = useState([]); // New state for nationalities
  const [submitForm, setSubmitForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, loading, error } = useApi(
    submitForm ? `${process.env.REACT_APP_SIGNUP_API_URL}` : null,
    "POST",
    submitForm ? formData : null
  );
  const today = new Date();
  const minAgeDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [userExistsError, setUserExistsError] = useState(false);
  const [apiError, setApiError] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };

  useEffect(() => {
    if (data?.status === false) {
      // Default error message
      let errorMessage = "An unexpected error occurred. Please try again.";
  
      if (data.message) {
        // Check errorName and message for more details
        const { errorName, message } = data.message;
  
        if (errorName === "duplicateUser") {
          errorMessage = "Email or mobile number already exists.";
          setErrors({
            email: message.includes("Email") ? "Email already exists" : "",
            mobileNumber: message.includes("mobile") ? "Mobile number already exists" : "",
          });
        } else {
          // Handle other types of errors if applicable
          errorMessage = message || errorMessage;
        }
      }
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        api: errorMessage,
      }));
      setUserExistsError("User already exists. Please use a different email or phone number.");
      setSubmitForm(false); // Prevent further submission attempts
    } else if (data?.status === true) {
      setErrors({});
      setUserExistsError(""); // Reset user existence error
      localStorage.setItem("userToken", data.items.token);
      localStorage.setItem("userId", data.items.userId);
      alert("Signup Successfully");
      setFormData({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        countryCode: "+971",
        email: "",
        password: "",
        confirmPassword: "",
        nationality: "United Arab Emirates",
        dateOfBirth: "",
      });
      setSubmitForm(false);
    }
  
    if (error) {
      console.error("Error:", error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        api: typeof error.message === 'string' ? error.message : "An unexpected error occurred. Please try again.",
      }));
      setSubmitForm(false); // Prevent further submission attempts
    }
  }, [data, error]);
  
  useEffect(() => {
    if (data) {
      console.log("API Response Data:", data); // Log API response
    }
  }, [data]);

  useEffect(() => {
    // Fetch country codes and nationalities from REST Countries API
    const fetchCountryData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        const codes = countries
          .map((country) => ({
            name: country.name.common,
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          }))
          .filter((c) => c.code) // Remove countries without a dialing code
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

        const nationalities = countries
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b)); // Sort alphabetically by nationality

        setCountryCodes(codes);
        setNationalities(nationalities); // Set nationalities
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate form data
    const formErrors = validateForm();
    setErrors(formErrors);
  
    // Prevent form submission if there are validation errors or user existence errors
    if (Object.keys(formErrors).length > 0 || userExistsError) {
      setSubmitForm(false); // Prevent form submission
      setIsSubmitting(false); // Ensure submitting state is reset
      return; // Exit the function early
    }
  
    // If no validation errors and user doesn't already exist
    setIsSubmitting(true);
    setSubmitForm(true);
  };
  

  const validateForm = () => {
    const errors = {};
    const passwordRegex = /^.{6,10}$/;
  
    if (!formData.mobileNumber.trim() || !/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = "Mobile number must be exactly 10 digits";
    }
  
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
  
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      errors.password = "Must be between 6 to 10 characters";
    }
  
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    return errors;
  };
  

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-y-scroll md:overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <img src={logo} alt="Logo" className="w-[200px] h-[58px] mb-4 " />
          <div className="w-full mt-4 mx-auto">
            {data ? (
              <div className="text-center">
                <h2 className="text-green-500 text-lg font-bold">
                  Registration successful!
                </h2>
                <p className="text-gray-600 mt-2">
                  You have registered successfully.
                </p>
                <div className="flex justify-center items-center pt-4">
                  <p className="text-sm font-semibold">
                    Go For Login{" "}
                    <span
                      className="text-[#6CBD44] cursor-pointer"
                      onClick={toggleForm}
                    >
                      Login Now
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <form className="w-full mx-auto" onSubmit={handleSubmit}>
                {userExistsError && (
                  <div className="text-red-500 mb-4">{userExistsError}</div>
                )}
                <div className="flex md:flex-row md:space-x-4 md:gap-0 gap-4">
                  <InputField
                    id="first-name"
                    type="text"
                    label="First Name"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <InputField
                    id="last-name"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8 ">
                  <div className="flex flex-col md:w-[48%] w-full">
                    <label
                      htmlFor={"mobile-number"}
                      className="text-black font-bold text-base text-sm m-1"
                    >
                      {"Mobile Number"}
                    </label>
                    <div className="flex border rounded-lg border-[#E3E3E3]">
                      <select
                        id="country-code"
                        name="countryCode"
                        className="h-[30px] w-[18%] md:w-[25%] "
                        value={formData.countryCode}
                        onChange={handleCountryCodeChange}
                        required
                      >
                        {countryCodes.map(({ name, code }, index) => (
                          <option key={`${code}-${index}`} value={code}>
                            {code}
                          </option>
                        ))}
                      </select>
                      <input
                        id="mobile-number"
                        type="text"
                        className="h-[30px] md:w-[75%] px-4 "
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        required
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.mobileNumber}
                      </p>
                    )}
                    {errors.api && (
                      <p className="text-red-500 text-sm">{errors.api}</p>
                    )}
                  </div>
                  <InputField
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    placeholder="Enter Your Email Address"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                  {errors.api && (
                    <p className="text-red-500 text-sm">{errors.api}</p>
                  )}
                </div>

                <div className="flex flex-col relative md:flex-row md:space-x-4 md:mt-8">
                  <div className="flex flex-col md:w-[48%] w-full relative">
                    <label
                      htmlFor="password"
                      className="text-black font-bold text-base text-sm m-1"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type={isPasswordVisible ? "text" : "password"}
                      className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                      name="password"
                      placeholder="Enter Your Password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <span
                      className="absolute right-2 top-11 sm:top-11  transform -translate-y-1/2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col md:w-[48%] w-full relative">
                    <label
                      htmlFor="confirm-password"
                      className="text-black font-bold text-base text-sm m-1"
                    >
                      Confirm Password
                    </label>
                    <input
                      id="confirm-password"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <span
                      className="absolute right-2 top-11 sm:top-11 transform -translate-y-1/2 cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {isConfirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8">
                  <div className="flex flex-col md:w-[48%] w-full">
                    <label
                      htmlFor="nationality"
                      className="text-black font-bold text-base"
                    >
                      Nationality
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      required
                    >
                      {nationalities.map((nationality, index) => (
                        <option
                          key={`${nationality}-${index}`}
                          value={nationality}
                          selected={nationality === "United Arab Emirates"}
                        >
                          {nationality}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label
                      htmlFor="dob"
                      className="text-black font-bold text-base"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      max={minAgeDate}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <button
                    type="submit"
                    className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    Register
                  </button>
                  {apiError && <p className="text-red-500 mt-2">{apiError}</p>}
                </div>
              </form>
            )}

            {!data && (
              <>
                <div className="flex items-center text-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-600">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex justify-center items-center mb-4">
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
                <div className="flex justify-center items-center pt-4">
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
              </>
            )}
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

// useEffect(() => {
//   if (data?.status) {
//     console.log("Signup successful:", data);
//     // Handle the success response
//     setFormData({
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       countryCode: "+971",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       nationality: "United Arab Emirates",
//       dateOfBirth: "",
//     });
//     setSubmitForm(false);
//   }
//   if (error) {
//     console.error("Error:", error);
//     if (error.message.includes("user already exists")) {
//       setUserExistsError(
//         "User already exists. Please use a different email or phone number."
//       );
//     } else {
//       setApiError(error.message);
//     }
//     setSubmitForm(false);
//   }
// }, [data, error]);

// const Signup = ({ toggleForm }) => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     countryCode: "+971",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     nationality: "United Arab Emirates",
//     dateOfBirth: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [countryCodes, setCountryCodes] = useState([]);
//   const [nationalities, setNationalities] = useState([]);
//   const [submitForm, setSubmitForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [apiError, setApiError] = useState("");
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const { data, loading, error } = useApi(
//     submitForm ? `${process.env.REACT_APP_SIGNUP_API_URL}` : null,
//     "POST",
//     submitForm ? formData : null
//   );

//   const today = new Date();
//   const minAgeDate = new Date(
//     today.getFullYear() - 18,
//     today.getMonth(),
//     today.getDate()
//   )
//     .toISOString()
//     .split("T")[0];

//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
//     useState(false);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => !prevState);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setIsConfirmPasswordVisible((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (data) {
//       console.log("API Response Data:", data);
//       if (data.status === false) {
//         const { errorName, message } = data.message;
//         let errorMessage = "An unexpected error occurred. Please try again.";

//         if (errorName === "duplicateUser") {
//           errorMessage = "Email or mobile number already exists.";
//           setErrors({
//             email: message.includes("Email") ? "Email already exists" : "",
//             mobileNumber: message.includes("mobile") ? "Mobile number already exists" : "",
//           });
//         } else {
//           errorMessage = message || errorMessage;
//         }

//         setApiError(errorMessage);
//         setRegistrationSuccess(false);
//         setSubmitForm(false);
//       } else if (data.status === true) {
//         setErrors({});
//         setApiError("");
//         setRegistrationSuccess(true);
//         localStorage.setItem("userToken", data.items.token);
//         localStorage.setItem("userId", data.items.userId);
//         alert("Signup Successfully");
//         setFormData({
//           firstName: "",
//           lastName: "",
//           mobileNumber: "",
//           countryCode: "+971",
//           email: "",
//           password: "",
//           confirmPassword: "",
//           nationality: "United Arab Emirates",
//           dateOfBirth: "",
//         });
//         setSubmitForm(false);
//       }
//     }

//     if (error) {
//       console.error("Error:", error);
//       setApiError("An unexpected error occurred. Please try again.");
//       setRegistrationSuccess(false);
//       setSubmitForm(false);
//     }
//   }, [data, error]);

//   useEffect(() => {
//     const fetchCountryData = async () => {
//       try {
//         const response = await fetch("https://restcountries.com/v3.1/all");
//         const countries = await response.json();
//         const codes = countries
//           .map((country) => ({
//             name: country.name.common,
//             code:
//               country.idd.root +
//               (country.idd.suffixes ? country.idd.suffixes[0] : ""),
//           }))
//           .filter((c) => c.code)
//           .sort((a, b) => a.name.localeCompare(b.name));

//         const nationalities = countries
//           .map((country) => country.name.common)
//           .sort((a, b) => a.localeCompare(b));

//         setCountryCodes(codes);
//         setNationalities(nationalities);
//       } catch (error) {
//         console.error("Error fetching country data:", error);
//       }
//     };

//     fetchCountryData();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCountryCodeChange = (e) => {
//     setFormData({ ...formData, countryCode: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     setErrors(formErrors);

//     if (Object.keys(formErrors).length > 0) {
//       setSubmitForm(false);
//       setIsSubmitting(false);
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitForm(true);
//   };

//   const validateForm = () => {
//     const errors = {};
//     const passwordRegex = /^.{6,10}$/;

//     if (!formData.mobileNumber.trim() || !/^\d{10}$/.test(formData.mobileNumber)) {
//       errors.mobileNumber = "Mobile number must be exactly 10 digits";
//     }

//     if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = "Valid email is required";
//     }

//     if (!formData.password) {
//       errors.password = "Password is required";
//     } else if (!passwordRegex.test(formData.password)) {
//       errors.password = "Must be between 6 to 10 characters";
//     }

//     if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   return (
//     <div className="flex flex-col items-center w-full ">
//       <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-y-scroll md:overflow-hidden">
//         <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
//           <img src={logo} alt="Logo" className="w-[200px] h-[58px] mb-4 " />
//           <div className="w-full mt-4 mx-auto">
//             {registrationSuccess ? (
//               <div className="text-center">
//                 <h2 className="text-green-500 text-lg font-bold">
//                   Registration successful!
//                 </h2>
//                 <p className="text-gray-600 mt-2">
//                   You have registered successfully.
//                 </p>
//                 <div className="flex justify-center items-center pt-4">
//                   <p className="text-sm font-semibold">
//                     Go For Login{" "}
//                     <span
//                       className="text-[#6CBD44] cursor-pointer"
//                       onClick={toggleForm}
//                     >
//                       Login Now
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 {apiError && (
//                   <div className="text-red-500 mb-4">{apiError}</div>
//                 )}
//                 <form className="w-full mx-auto" onSubmit={handleSubmit}>
//                   <div className="flex md:flex-row md:space-x-4 md:gap-0 gap-4">
//                     <InputField
//                       id="first-name"
//                       type="text"
//                       label="First Name"
//                       name="firstName"
//                       placeholder="First Name"
//                       required
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                     />
//                     <InputField
//                       id="last-name"
//                       type="text"
//                       label="Last Name"
//                       name="lastName"
//                       placeholder="Last Name"
//                       required
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8 ">
//                     <div className="flex flex-col md:w-[48%] w-full">
//                       <label
//                         htmlFor="mobile-number"
//                         className="text-black font-bold text-base text-sm m-1"
//                       >
//                         {"Mobile Number"}
//                       </label>
//                       <div className="flex border rounded-lg border-[#E3E3E3]">
//                         <select
//                           id="country-code"
//                           name="countryCode"
//                           className="h-[30px] w-[25%] px-4 border-r border-[#E3E3E3]"
//                           value={formData.countryCode}
//                           onChange={handleCountryCodeChange}
//                         >
//                           {countryCodes.map((code, index) => (
//                             <option key={`${code}-${index}`} value={code}>
//                               {code}
//                             </option>
//                           ))}
//                         </select>
//                         <input
//                           id="mobile-number"
//                           type="text"
//                           className="h-[30px] md:w-[75%] px-4"
//                           name="mobileNumber"
//                           placeholder="Mobile Number"
//                           required
//                           value={formData.mobileNumber}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       {errors.mobileNumber && (
//                         <p className="text-red-500 text-sm">
//                           {errors.mobileNumber}
//                         </p>
//                       )}
//                     </div>
//                     <InputField
//                       id="email"
//                       type="email"
//                       label="Email Address"
//                       name="email"
//                       placeholder="Enter Your Email Address"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm">{errors.email}</p>
//                     )}
//                   </div>

//                   <div className="flex flex-col relative md:flex-row md:space-x-4 md:mt-8">
//                     <div className="flex flex-col md:w-[48%] w-full relative">
//                       <label
//                         htmlFor="password"
//                         className="text-black font-bold text-base text-sm m-1"
//                       >
//                         Password
//                       </label>
//                       <input
//                         id="password"
//                         type={isPasswordVisible ? "text" : "password"}
//                         className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                         name="password"
//                         placeholder="Enter Your Password"
//                         required
//                         value={formData.password}
//                         onChange={handleInputChange}
//                       />
//                       <span
//                         className="absolute right-2 top-11 sm:top-11 transform -translate-y-1/2 cursor-pointer"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
//                       </span>
//                       {errors.password && (
//                         <p className="text-red-500 text-xs mt-1">
//                           {errors.password}
//                         </p>
//                       )}
//                     </div>
//                     <div className="flex flex-col md:w-[48%] w-full relative">
//                       <label
//                         htmlFor="confirm-password"
//                         className="text-black font-bold text-base text-sm m-1"
//                       >
//                         Confirm Password
//                       </label>
//                       <input
//                         id="confirm-password"
//                         type={isConfirmPasswordVisible ? "text" : "password"}
//                         className="h-[30px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                         name="confirmPassword"
//                         placeholder="Confirm Your Password"
//                         required
//                         value={formData.confirmPassword}
//                         onChange={handleInputChange}
//                       />
//                       <span
//                         className="absolute right-2 top-11 sm:top-11 transform -translate-y-1/2 cursor-pointer"
//                         onClick={toggleConfirmPasswordVisibility}
//                       >
//                         {isConfirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
//                       </span>
//                       {errors.confirmPassword && (
//                         <p className="text-red-500 text-xs mt-1">
//                           {errors.confirmPassword}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8">
//                     <div className="flex flex-col md:w-[48%] w-full">
//                       <label
//                         htmlFor="nationality"
//                         className="text-black font-bold text-base"
//                       >
//                         Nationality
//                       </label>
//                       <select
//                         id="nationality"
//                         name="nationality"
//                         className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                         value={formData.nationality}
//                         onChange={handleInputChange}
//                         required
//                       >
//                         {nationalities.map((nationality, index) => (
//                           <option
//                             key={`${nationality}-${index}`}
//                             value={nationality}
//                           >
//                             {nationality}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                     <div className="flex flex-col w-full md:w-1/2 px-2">
//                       <label
//                         htmlFor="dob"
//                         className="text-black font-bold text-base"
//                       >
//                         Date of Birth
//                       </label>
//                       <input
//                         id="dob"
//                         type="date"
//                         className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                         name="dateOfBirth"
//                         required
//                         value={formData.dateOfBirth}
//                         onChange={handleInputChange}
//                         max={minAgeDate}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-col mt-8">
//                     <button
//                       type="submit"
//                       className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting..." : "Register"}
//                     </button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {!registrationSuccess && !data && (
//               <>
//                 <div className="flex items-center text-center my-4">
//                   <div className="flex-grow border-t border-gray-300"></div>
//                   <span className="mx-4 text-gray-600">OR</span>
//                   <div className="flex-grow border-t border-gray-300"></div>
//                 </div>
//                 <div className="flex justify-center items-center mb-4">
//                   <Stack direction="row" spacing={2} alignItems="center">
//                     <Avatar
//                       alt="google"
//                       src={google}
//                       sx={{ width: 24, height: 24 }}
//                     />
//                     <Avatar
//                       alt="facebook"
//                       src={facebook}
//                       sx={{ width: 24, height: 24 }}
//                     />
//                   </Stack>
//                 </div>
//                 <div className="flex justify-center items-center pt-4">
//                   <p className="text-sm font-semibold">
//                     Already have an account?{" "}
//                     <span
//                       className="text-[#6CBD44] cursor-pointer"
//                       onClick={toggleForm}
//                     >
//                       Login Now
//                     </span>
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//         <div
//           className="hidden md:block w-1/2 h-full bg-cover bg-center"
//           style={{ backgroundImage: `url(${closeup})` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Signup;