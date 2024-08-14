import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Signup from './Signup';
const LoginModal = ({ closeModal }) => {
  const [showSignup, setShowSignup] = useState(false);
  const toggleForm = () => setShowSignup(!showSignup);
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4 md:p-0">
  <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md md:max-w-[1174px] md:h-[693px] p-4 md:p-0 flex flex-col md:flex-row">
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
      aria-label="Close"
    >
      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    {showSignup ? <Signup toggleForm={toggleForm} /> : <Login toggleForm={toggleForm} />}
  </div>
</div>,

    // <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    //   <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-[1174px] h-[693px] p-0 flex">
    //     <button
    //       onClick={closeModal}
    //       className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
    //       aria-label="Close"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M6 18L18 6M6 6l12 12"
    //         />
    //       </svg>
    //     </button>
    //     {showSignup ? (
    //       <Signup toggleForm={toggleForm} />
    //     ) : (
    //       <Login toggleForm={toggleForm} />
    //     )}
    //   </div>
    // </div>,
    document.body
  );
};
export default LoginModal;