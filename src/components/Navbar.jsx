import React, { useState } from "react";
import { PiExcludeSquareFill } from "react-icons/pi";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useImage } from "../context/ImageContext";

const Navbar = () => {
   const { showLinks,
    setShowLinks } = useImage(); 

  const handleNavigate = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="flex items-center justify-between w-full px-4 py-5 sm:px-8 lg:px-40">
  {/* Logo Section */}
  <div className="flex text-2xl space-x-2 ">
    <PiExcludeSquareFill />
    <h3 className="font-semibold">BerkanAI</h3>
  </div>

  <div>
    {showLinks ? (
      <Link to={"/"}>
        <button
          onClick={handleNavigate}
          className="flex items-center justify-between px-6 py-2 rounded-2xl hover:cursor-pointer text-white bg-slate-700 "
        >
          <FaArrowLeft className="text-sm mr-2 " /> Return to home
        </button>
      </Link>
    ) : (
      <Link to={"/result"}>
        <button
          onClick={handleNavigate}
          className="flex items-center justify-center px-6 py-2 rounded-2xl hover:cursor-pointer text-white bg-slate-700 "
        >
          Get Started <FaArrowRight className="text-sm ml-2 " />
        </button>
      </Link>
    )}
  </div>
</div>

  );
};

export default Navbar;
