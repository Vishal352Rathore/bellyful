import React, { useState, useEffect } from "react";
import useApi from '../Customhook/useApi';
import logo from "../images/image 1.png";
import closeup from "../images/close-up.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

// Reusable Input Component
const InputField = ({ id, type, label, name, placeholder, required, value, onChange }) => (
  <div className="flex flex-col md:w-[48%] w-full">
    <label htmlFor={id} className="text-black font-bold text-base">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
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
    firstName: '',
    lastName: '',
    mobileNumber: '',
    countryCode: '91', // Default value for country code
    email: '',
    password: '',
    confirmPassword:"",
    nationality: '',
    dateOfBirth: '',
  });

  const [countryCodes, setCountryCodes] = useState([]);
  const [nationalities, setNationalities] = useState([]); // New state for nationalities
  const [submitForm, setSubmitForm] = useState(false);
  const { data, loading, error } = useApi(
    submitForm ? `${process.env.REACT_APP_SIGNUP_API_URL}` : null,
    'POST',
    submitForm ? formData : null
  );

  useEffect(() => {
    if (data?.status) {
      console.log("signup successful:", data);
      // You can handle the success response, like redirecting the user or saving the token
    }
    if (error) {
      console.error("Error:", error);
      // Handle the error, show an error message to the user
    }
  }, [data, error]);

  useEffect(() => {
    // Fetch country codes and nationalities from REST Countries API
    const fetchCountryData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        const codes = countries
          .map(country => ({
            name: country.name.common,
            code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : '')
          }))
          .filter(c => c.code) // Remove countries without a dialing code
          .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name

        const nationalities = countries
          .map(country => country.name.common)
          .sort((a, b) => a.localeCompare(b)); // Sort alphabetically by nationality

        setCountryCodes(codes);
        setNationalities(nationalities); // Set nationalities
      } catch (error) {
        console.error('Error fetching country data:', error);
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
    setSubmitForm(true);
  };

  useEffect(() => {
    if (data) {
      console.log('Signup successful:', data);
      // Reset form and submitForm state only if the signup was successful
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        countryCode: '91',
        email: '',
        password: '',
        confirmPassword: '',
        nationality: '',
        dateOfBirth: '',
      });
      setSubmitForm(false); // Reset to prevent infinite loop
    }
    if (error) {
      console.error('Error:', error);
      setSubmitForm(false); // Also reset on error to stop repeated submissions
    }
  }, [data, error]);

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-y-scroll md:overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <img src={logo} alt="Logo" className="w-[200px] h-[58px] mb-4 " />
          <div className="w-full mt-4">
            {data ? (
              <div className="text-center">
                <h2 className="text-green-500 text-lg font-bold">Registration successful!</h2>
                <p className="text-gray-600 mt-2">You have registered successfully.</p>
              </div>
            ) : (
              <form className="w-full mx-auto" onSubmit={handleSubmit}>
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
                    <label htmlFor="country-code" className="text-black font-bold text-base">
                      Country Code
                    </label>
                    <select
                      id="country-code"
                      name="countryCode"
                      className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      required
                    >
                      {countryCodes.map(({ name, code }, index) => (
                        <option key={`${code}-${index}`} value={code}>
                          ({code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <InputField
                    id="mobile-number"
                    type="text"
                    label="Mobile Number"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    required
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8">
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
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8">
                  <InputField
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter Your Password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputField
                    id="confirm-password"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    required
                    value={formData.confirmPassword} // Use the password field again for confirmation
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-8">
                  <div className="flex flex-col md:w-[48%] w-full">
                    <label htmlFor="nationality" className="text-black font-bold text-base">
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
                        <option key={`${nationality}-${index}`} value={nationality}>
                          {nationality}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label htmlFor="dob" className="text-black font-bold text-base">
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
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-8">
                  <button
                    type="submit"
                    className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                  {error && <p className="text-red-500 mt-2">{error.message}</p>}
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
                    <Avatar alt="google" src={google} sx={{ width: 24, height: 24 }} />
                    <Avatar alt="facebook" src={facebook} sx={{ width: 24, height: 24 }} />
                  </Stack>
                </div>
                <div className="flex justify-center items-center pt-4">
                  <p className="text-sm font-semibold">
                    Already have an account?{" "}
                    <span className="text-[#6CBD44] cursor-pointer" onClick={toggleForm}>
                      Login Now
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="hidden md:block w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: `url(${closeup})` }}></div>
      </div>
    </div>
  );
};

export default Signup;