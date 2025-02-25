import React from "react";
import { MdFileUpload } from "react-icons/md";
import Header2 from "../assets/Header2.png";
import { Link } from 'react-router-dom'
import { useImage } from "../context/ImageContext";

const Header = () => {

  const { showLinks,
        setShowLinks } = useImage(); 
    
      const handleNavigate = () => {
        setShowLinks(!showLinks);
      };

 

  return (
    <div className="flex flex-col sm:flex-row items-center justify-around w-full p-5">
  {/* Left Side */}
  <div className="w-full sm:w-1/3 flex flex-col space-y-7">
    <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center sm:text-left">
      Remove the{" "}
      <span className="text-slate-400 font-bold">background</span> from
      image for any purpose.
    </h1>
    <p className="text-lg sm:text-xl tracking-wider font-extralight text-center sm:text-left">
    Effortlessly remove backgrounds from your images with the help of our advanced AI-powered web application. It's the perfect solution for enhancing your visuals, creating personalized designs, and giving your projects a professional touch with just a few simple steps.
    </p>
   

   

      
     <Link to={'/result'}> <button onClick={handleNavigate} className="w-[250px] flex items-center justify-center px-4 py-3 rounded-4xl hover:cursor-pointer text-white bg-slate-700 text-xl transition-transform duration-700 ease-in-out hover:scale-105 mx-auto sm:mx-0"><MdFileUpload className="mr-3" />
     Start Uploading</button>
      </Link>
     
   
  </div>

  {/* Right Side */}
  <div className="w-full sm:w-2/5 mt-6 sm:mt-0">
    <img src={Header2} alt="Header" className="w-full" />
  </div>
</div>

  );
};

export default Header;
