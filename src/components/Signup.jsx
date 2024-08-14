// import React from 'react';
// import logo from '../images/image 1.png';
// import closeup from '../images/close-up.png';
// import google from '../images/google.png';
// import facebook from '../images/facebook.png';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';

// const Signup = ({ toggleForm }) => {
//   return (
//     <div className="flex h-full w-full items-center justify-center">
//       <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-hidden">
//         <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
//           <img
//             src={logo}
//             alt="Logo"
//             className="w-[200px] h-[58px] mb-4"
//           />
//           <div className="w-full mt-4">
//             <form className="w-full mx-auto" method="POST" action="#">
//               <div className="flex justify-between mt-4">
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">First Name</label>
//                   <input
//                     id="first-name"
//                     type="text"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="first_name"
//                     placeholder="First Name"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Last Name</label>
//                   <input
//                     id="last-name"
//                     type="text"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="last_name"
//                     placeholder="Last Name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between mt-8">
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Mobile Number</label>
//                   <input
//                     id="mobile-number"
//                     type="text"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="mobile_number"
//                     placeholder="Mobile Number"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Email Address</label>
//                   <input
//                     id="email"
//                     type="text"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="email"
//                     placeholder="Enter Your Address"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between mt-8">
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Password</label>
//                   <input
//                     id="password"
//                     type="password"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="password"
//                     placeholder="Enter Your Password"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Confirm Password</label>
//                   <input
//                     id="confirm-password"
//                     type="password"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="confirm_password"
//                     placeholder="Confirm Your Password"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between mt-8">
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Nationality</label>
//                   <input
//                     id="nationality"
//                     type="text"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="nationality"
//                     placeholder="Enter Your Nationality"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col w-[48%]">
//                   <label className="text-black font-bold text-base">Date of Birth</label>
//                   <input
//                     id="dob"
//                     type="date"
//                     className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                     name="dob"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="flex flex-col mt-8">
//                 <button
//                   type="submit"
//                   className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
//                 >
//                   Register
//                 </button>
//               </div>
//             </form>

//             <div className="flex items-center text-center my-4">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="mx-4 text-gray-600">OR</span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             <div className="flex justify-center items-center">
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Avatar
//                   alt="google"
//                   src={google}
//                   sx={{ width: 24, height: 24 }}
//                 />
//                 <Avatar
//                   alt="facebook"
//                   src={facebook}
//                   sx={{ width: 24, height: 24 }}
//                 />
//               </Stack>
//             </div>

//             <div className="flex justify-center items-center pt-4">
//               <p className="text-sm font-semibold">
//                 Already have an account?{' '}
//                 <span
//                   className="text-[#6CBD44] cursor-pointer"
//                   onClick={toggleForm}
//                 >
//                   Login Now
//                 </span>
//               </p>
//             </div>
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


import React from 'react';
import logo from '../images/image 1.png';
import closeup from '../images/close-up.png';
import google from '../images/google.png';
import facebook from '../images/facebook.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Signup = ({ toggleForm }) => {
  return (
      // <div className="flex h-full w-full items-center justify-center">
      //   <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-hidden">
      //     <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
      //       <img
      //         src={logo}
      //         alt="Logo"
      //         className="w-[200px] h-[58px] mb-4"
      //       />
      //       <div className="w-full mt-4">
      //         <form className="w-full mx-auto" method="POST" action="#">
      //           <div className="flex justify-between mt-4">
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">First Name</label>
      //               <input
      //                 id="first-name"
      //                 type="text"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="first_name"
      //                 placeholder="First Name"
      //                 required
      //               />
      //             </div>
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Last Name</label>
      //               <input
      //                 id="last-name"
      //                 type="text"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="last_name"
      //                 placeholder="Last Name"
      //                 required
      //               />
      //             </div>
      //           </div>

      //           <div className="flex justify-between mt-8">
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Mobile Number</label>
      //               <input
      //                 id="mobile-number"
      //                 type="text"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="mobile_number"
      //                 placeholder="Mobile Number"
      //                 required
      //               />
      //             </div>
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Email Address</label>
      //               <input
      //                 id="email"
      //                 type="text"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="email"
      //                 placeholder="Enter Your Address"
      //                 required
      //               />
      //             </div>
      //           </div>

      //           <div className="flex justify-between mt-8">
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Password</label>
      //               <input
      //                 id="password"
      //                 type="password"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="password"
      //                 placeholder="Enter Your Password"
      //                 required
      //               />
      //             </div>
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Confirm Password</label>
      //               <input
      //                 id="confirm-password"
      //                 type="password"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="confirm_password"
      //                 placeholder="Confirm Your Password"
      //                 required
      //               />
      //             </div>
      //           </div>

      //           <div className="flex justify-between mt-8">
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Nationality</label>
      //               <input
      //                 id="nationality"
      //                 type="text"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="nationality"
      //                 placeholder="Enter Your Nationality"
      //                 required
      //               />
      //             </div>
      //             <div className="flex flex-col w-[48%]">
      //               <label className="text-black font-bold text-base">Date of Birth</label>
      //               <input
      //                 id="dob"
      //                 type="date"
      //                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
      //                 name="dob"
      //                 required
      //               />
      //             </div>
      //           </div>

      //           <div className="flex flex-col mt-8">
      //             <button
      //               type="submit"
      //               className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
      //             >
      //               Register
      //             </button>
      //           </div>
      //         </form>

      //         <div className="flex items-center text-center my-4">
      //           <div className="flex-grow border-t border-gray-300"></div>
      //           <span className="mx-4 text-gray-600">OR</span>
      //           <div className="flex-grow border-t border-gray-300"></div>
      //         </div>

      //         <div className="flex justify-center items-center">
      //           <Stack direction="row" spacing={2} alignItems="center">
      //             <Avatar
      //               alt="google"
      //               src={google}
      //               sx={{ width: 24, height: 24 }}
      //             />
      //             <Avatar
      //               alt="facebook"
      //               src={facebook}
      //               sx={{ width: 24, height: 24 }}
      //             />
      //           </Stack>
      //         </div>

      //         <div className="flex justify-center items-center pt-4">
      //           <p className="text-sm font-semibold">
      //             Already have an account?{' '}
      //             <span
      //               className="text-[#6CBD44] cursor-pointer"
      //               onClick={toggleForm}
      //             >
      //               Login Now
      //             </span>
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //     <div
      //       className="hidden md:block w-1/2 h-full bg-cover bg-center"
      //       style={{ backgroundImage: `url(${closeup})` }}
      //     ></div>
      //   </div>
      // </div>

//       <div className="flex h-full w-full items-center justify-center p-4">
//   <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl bg-white border overflow-hidden">
//     <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 md:p-8">
//       <img
//         src={logo}
//         alt="Logo"
//         className="w-[200px] h-[58px] mb-4 mt-32"
//       />
//       <div className="w-full mt-4">
//         <form className="w-full mx-auto" method="POST" action="#">
//           <div className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 md:space-x-4">
//             <div className="flex flex-col w-full md:w-1/2">
//               <label className="text-black font-bold text-base">First Name</label>
//               <input
//                 id="first-name"
//                 type="text"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="first_name"
//                 placeholder="First Name"
//                 required
//               />
//             </div>
//             <div className="flex flex-col w-full md:w-1/2">
//               <label className="text-black font-bold text-base">Last Name</label>
//               <input
//                 id="last-name"
//                 type="text"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="last_name"
//                 placeholder="Last Name"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-4 space-y-4">
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Mobile Number</label>
//               <input
//                 id="mobile-number"
//                 type="text"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="mobile_number"
//                 placeholder="Mobile Number"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Email Address</label>
//               <input
//                 id="email"
//                 type="text"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="email"
//                 placeholder="Enter Your Address"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="password"
//                 placeholder="Enter Your Password"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Confirm Password</label>
//               <input
//                 id="confirm-password"
//                 type="password"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="confirm_password"
//                 placeholder="Confirm Your Password"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Nationality</label>
//               <input
//                 id="nationality"
//                 type="text"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="nationality"
//                 placeholder="Enter Your Nationality"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-black font-bold text-base">Date of Birth</label>
//               <input
//                 id="dob"
//                 type="date"
//                 className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
//                 name="dob"
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col mt-8">
//             <button
//               type="submit"
//               className="h-[42px] w-full bg-[#6CBD44] hover:bg-[#6CBD44] text-white text-sm font-semibold py-2 px-4 rounded"
//             >
//               Register
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center text-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-600">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <div className="flex justify-center items-center">
//           <Stack direction="row" spacing={2} alignItems="center">
//             <Avatar
//               alt="google"
//               src={google}
//               sx={{ width: 24, height: 24 }}
//             />
//             <Avatar
//               alt="facebook"
//               src={facebook}
//               sx={{ width: 24, height: 24 }}
//             />
//           </Stack>
//         </div>

//         <div className="flex justify-center items-center pt-4">
//           <p className="text-sm font-semibold">
//             Already have an account?{' '}
//             <span
//               className="text-[#6CBD44] cursor-pointer"
//               onClick={toggleForm}
//             >
//               Login Now
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//     <div
//       className="hidden md:block w-1/2 h-full bg-cover bg-center"
//       style={{ backgroundImage: `url(${closeup})` }}
//     ></div>
//   </div>
// </div>
<div className="flex h-full w-full items-center justify-center">
  <div className="flex flex-col md:flex-row w-full h-full rounded-2xl bg-white border overflow-hidden">
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
      <img
        src={logo}
        alt="Logo"
        className="w-[150px] h-[43px] md:w-[200px] md:h-[58px] mb-4"
      />
      <div className="w-full mt-4">
        <form className="w-full mx-auto" method="POST" action="#">
          <div className="flex flex-col md:flex-row justify-between mt-4">
            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
              <label className="text-black font-bold text-base">First Name</label>
              <input
                id="first-name"
                type="text"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="first_name"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-[48%]">
              <label className="text-black font-bold text-base">Last Name</label>
              <input
                id="last-name"
                type="text"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
              <label className="text-black font-bold text-base">Mobile Number</label>
              <input
                id="mobile-number"
                type="text"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="mobile_number"
                placeholder="Mobile Number"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-[48%]">
              <label className="text-black font-bold text-base">Email Address</label>
              <input
                id="email"
                type="text"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="email"
                placeholder="Enter Your Address"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
              <label className="text-black font-bold text-base">Password</label>
              <input
                id="password"
                type="password"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-[48%]">
              <label className="text-black font-bold text-base">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="confirm_password"
                placeholder="Confirm Your Password"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="flex flex-col w-full md:w-[48%] mb-4 md:mb-0">
              <label className="text-black font-bold text-base">Nationality</label>
              <input
                id="nationality"
                type="text"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="nationality"
                placeholder="Enter Your Nationality"
                required
              />
            </div>
            <div className="flex flex-col w-full md:w-[48%]">
              <label className="text-black font-bold text-base">Date of Birth</label>
              <input
                id="dob"
                type="date"
                className="h-[35px] w-full px-4 border rounded-lg border-[#E3E3E3]"
                name="dob"
                required
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
          </div>
        </form>

        <div className="flex items-center text-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-600">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex justify-center items-center">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar alt="google" src={google} sx={{ width: 24, height: 24 }} />
            <Avatar alt="facebook" src={facebook} sx={{ width: 24, height: 24 }} />
          </Stack>
        </div>

        <div className="flex justify-center items-center pt-4">
          <p className="text-sm font-semibold">
            Already have an account?{' '}
            <span className="text-[#6CBD44] cursor-pointer" onClick={toggleForm}>
              Login Now
            </span>
          </p>
        </div>
      </div>
    </div>
    <div
      className="hidden md:block w-full md:w-1/2 h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${closeup})` }}
    ></div>
  </div>
</div>

  );
};

export default Signup;