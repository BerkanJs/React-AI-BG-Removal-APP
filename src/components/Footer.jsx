import React from "react";
import { PiExcludeSquareFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
const Footer = () => {
  return (
<div className="w-full flex items-center justify-around p-5 bg-blue-100 flex-col sm:flex-row sm:space-x-10 sm:px-14">
  {/* Logo Section */}
  <div  className="flex text-2xl space-x-2 ">
    <PiExcludeSquareFill />
    <h3 className="font-semibold">BerkanAI</h3>
  </div>

  {/* Copy right text Section */}
  <p className="tracking-wider font-extralight text-center  sm:flex-1">
  All rights reserved. Copyright © Berkan Özçelik.
  </p>

  {/* Buttons */}
  <div className="flex items-center justify-center space-x-5 text-3xl mt-4 sm:mt-0">
    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <Link
        to="https://www.linkedin.com/in/berkan-%C3%B6z%C3%A7elik-2bb733313/"
        target="_blank"
      >
        <FaLinkedin className="h-7 rounded-full cursor-pointer" />
      </Link>
    </div>

    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <Link to="https://github.com/BerkanJs" target="_blank">
        <FaGithub className="h-7 rounded-full cursor-pointer" />
      </Link>
    </div>

    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
      <Link to="https://next-js-portfolio-one-xi.vercel.app/" target="_blank">
        <CgWebsite className="h-7 rounded-full cursor-pointer" />
      </Link>
    </div>
  </div>
</div>

  );
};

export default Footer;
