import React from "react";
import Player from 'lottie-react';
import animationData from '../../../assets/nebula-login-lottie.json';
import LockData from '../../../assets/login-lock-lottie.json';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center w-full bg-white p-5">
      {/* Left Section: Illustration */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="lottie-container w-full h-full">
          <Player
            autoplay
            loop
            animationData={animationData}
            className="h-60 w-60  md:w-full md:h-full"
          />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 bg-white p-5 rounded-lg flex flex-col items-center justify-center">
        <div className="lottie-container flex justify-center items-center mb-6">
          <Player
            autoplay
            loop
            animationData={LockData}
            className="h-48 w-48"
          />
        </div>

        <h1 className="text-4xl font-bold text-black mb-6 text-center -mt-5">Sign Up</h1>     

        {/* Form */}
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              required
              id="firstName"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your First Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              required
              id="lastName"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Last Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="mobile">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Mobile Number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4c5d34] text-white py-3 rounded-lg hover:bg-[#818763] focus:outline-none focus:ring-2 focus:ring-[#4c5d34]"
          >
            Sign Up
          </button>
          <br/>
          <br/>
          <div className="flex items-center justify-between mb-6">
              <Link to="/">
              <p className="text-sm text-blue-500 hover:underline">
                &larr; Back to Login
              </p>
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;