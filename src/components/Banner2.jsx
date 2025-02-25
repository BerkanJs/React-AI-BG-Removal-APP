import React from "react";
import { MdFileUpload } from "react-icons/md";
import { useImage } from "../context/ImageContext"
import { Link } from "react-router-dom";
const Banner2 = () => {


  const { showLinks,
      setShowLinks } = useImage(); 
  
    const handleNavigate = () => {
      setShowLinks(!showLinks);
    };
  

 
  
    
     
   
    
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-16 p-12">
        <h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-200 p-4">
          Need a try? Give it a shot now!
        </h1>

        
         <Link to={'/result'}><button onClick={handleNavigate} className="w-[250px] flex items-center justify-center px-4 py-3 rounded-4xl hover:cursor-pointer text-white bg-slate-700 text-xl transition-transform duration-700 ease-in-out hover:scale-105"> <MdFileUpload className="mr-3" />
         Click to Upload</button></Link>
          
         
      
      </div>
    </div>
  );
};

export default Banner2;
