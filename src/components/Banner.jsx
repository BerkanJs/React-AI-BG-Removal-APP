import React from "react";
import { MdFileUpload } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 mt-12">
    {/*Banner Header*/}
    <h1 className="w-4/5 sm:w-3/4 md:w-1/3 text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-600 text-center">
      Step to step remove your background image in a second
    </h1>
  
    {/*Banner Boxes*/}
    <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around px-6 sm:px-12 md:px-24 py-6 my-6 space-y-6 sm:space-y-0 sm:space-x-6">
  {/* Box 1 */}
  <div className="w-full sm:w-[280px] md:w-[400px] p-4 bg-white flex items-center justify-center space-x-6 drop-shadow-sm rounded-lg transform transition-all hover:scale-110">
    <MdFileUpload className="text-6xl text-slate-800" />
    <div className="flex flex-col">
      <h3 className="text-xl sm:text-2xl">Upload image</h3>
      <p className="font-extralight text-sm sm:text-base">
        Its not a real website app but a demo for learning purpose.
      </p>
    </div>
  </div>

  {/* Box 2 */}
  <div className="w-full sm:w-[280px] md:w-[400px] p-4 bg-white flex items-center justify-center space-x-6 drop-shadow-sm rounded-lg transform transition-all hover:scale-110">
    <IoMdRemoveCircle className="text-6xl text-slate-800" />
    <div className="flex flex-col">
      <h3 className="text-xl sm:text-2xl">Remove background</h3>
      <p className="font-extralight text-sm sm:text-base">
        Its not a real website app but a demo for learning purpose.
      </p>
    </div>
  </div>

  {/* Box 3 */}
  <div className="w-full sm:w-[280px] md:w-[400px] p-4 bg-white flex items-center justify-center space-x-6 drop-shadow-sm rounded-lg transform transition-all hover:scale-110">
    <MdDownloadForOffline className="text-6xl text-slate-800" />
    <div className="flex flex-col">
      <h3 className="text-xl sm:text-2xl">Download image</h3>
      <p className="font-extralight text-sm sm:text-base">
        Its not a real website app but a demo for learning purpose.
      </p>
    </div>
  </div>
</div>

  </div>
  
  );
};

export default Banner;
