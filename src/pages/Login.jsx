import React from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import { FaGoogle, FaFacebookF, FaSearch } from "react-icons/fa";
import Button from "../components/Button";
import logo from "../assets/logo.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EBF3FE]">
      {/* Main Content */}
      <main className="flex-grow flex justify-center items-start py-10">
        <div className="w-full max-w-6xl flex flex-col gap-6 px-4">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6">
              <img src={logo} alt="Logo" className="w-40 h-40" />
              {/* Search */}
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                />
                <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Right Section: Form */}
            <div className="w-full md:w-1/3 p-8 bg-white rounded-2xl border border-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 pl-10 rounded-lg border border-white shadow-inner focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                  />
                  <MdEmail className="absolute left-3 top-3 text-gray-400 text-lg" />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 pl-10 rounded-lg border border-white shadow-inner focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all"
                  />
                  <MdLock className="absolute left-3 top-3 text-gray-400 text-lg" />
                </div>

                <div className="text-right">
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
                </div>

                <Button label="Login" type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white" />
              </form>

              <div className="flex items-center gap-3 my-4">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="text-sm text-gray-500">or continue with</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>

              {/* Social Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-2 bg-white border border-white rounded px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200">
                  <FaGoogle className="text-red-500" />
                  <span className="text-sm font-medium text-gray-700">Google</span>
                </button>
                <button className="flex items-center gap-2 bg-white border border-white rounded px-4 py-2 shadow-md hover:shadow-lg transition-all duration-200">
                  <FaFacebookF className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Facebook</span>
                </button>
              </div>

              <div className="mt-4 flex justify-center">
                <Button label="Create New Account" className="px-6 py-2 text-sm rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white" />
              </div>
            </div>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap gap-4 justify-start">
            {[
              "About Us",
              "LzyCrazy Services",
              "LzyCrazy Marketplace",
              "We Are Hiring",
              "LzyCrazy News",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-white border border-white text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-4 bg-[#EBF3FE] text-sm text-gray-500 border-t border-white flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          India | LzyCrazy offered in:{" "}
          <a className="text-blue-600 hover:underline" href="#">हिन्दी</a>,{" "}
          <a className="text-blue-600 hover:underline" href="#">English</a>,{" "}
          <a className="text-blue-600 hover:underline" href="#">বাংলা</a>,{" "}
          <a className="text-blue-600 hover:underline" href="#">العربية</a>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
