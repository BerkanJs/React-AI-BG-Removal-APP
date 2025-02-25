import React, { useState } from "react";

import KemalSunal from "../assets/KemalSunal.jpg";
import KemalSunalArkaplanyok from '../assets/KemalSunalArkaplanyok.png';  // Import image

import '../index.css'
const BGSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-12 mb-12">
      {/*  Title    */}

      <h1 className="text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-100">
        Get rid of your banner with high <br /> Quality and Accurancy.
      </h1>

    

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
          {/*  BG Image    */}
        <img
          src={KemalSunal}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
          alt=""
        />

        {/*  Foreground Image    */}

        <img
        className="absolute top-0 left-0 w-full h-full"
          src={KemalSunalArkaplanyok}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          alt=""
        />

        {/*  Slider    */}

        <input
    
        className="slider absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 "
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
         
        />
      </div>
    </div>
  );
};

export default BGSlider;
