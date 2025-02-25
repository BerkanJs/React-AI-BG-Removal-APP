import axios from "axios";
import Header2 from "../assets/Header2.png"; // Default image
import "../index.css";
import { useState } from "react";
import { useImage } from "../context/ImageContext"; // useImage hook'unu import ettik

const Result = () => {
  const { image, processedImage, handleImageChange, setProcessedImage } = useImage(); 
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageChange(file); 
      processImage(file); 
    }
  };

  const processImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
      setLoading(true);
      const response = await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        formData,
        {
          headers: {
            "X-Api-Key": "ZNu6e9rw4GmA8iQXvrsX9kRN",
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob", 
        }
      );

      const imageUrl = URL.createObjectURL(response.data);
      setProcessedImage(imageUrl); 
    } catch (error) {
      console.error("Error removing background:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img
              className="rounded-md border border-gray-300 max-w-full"
              src={image || Header2} 
              alt="Original"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">PNG Format</p>
            <div className="bg-layer rounded-md border border-gray-300 relative overflow-hidden">
              {loading ? (
                <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className="border-4 border-slate-800 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              ) : (
                processedImage && (
                  <img
                    className="max-w-full h-auto"
                    src={processedImage} 
                    alt="Processed"
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-end flex-wrap items-center gap-4 mt-6">
          <input onChange={handleFileChange} type="file" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="px-8 py-2.5 text-slate-600 text-sm border border-slate-600 rounded-full hover:scale-105 transition-all duration-700 hover:cursor-pointer"
          >
            Try Another Image
          </label>

          <a
            className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-slate-600 to-slate-400 rounded-full hover:scale-105 transition-all duration-700 hover:cursor-pointer"
            href={processedImage || "#"}
            download
          >
            Download Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
