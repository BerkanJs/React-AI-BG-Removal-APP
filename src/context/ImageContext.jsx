import React, { createContext, useState, useContext } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState(null); 
  const [processedImage, setProcessedImage] = useState(null); 
   const [showLinks, setShowLinks] = useState(false);
  const handleImageChange = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); 
    }
  };

  return (
    <ImageContext.Provider
      value={{
        image,
        processedImage,
        handleImageChange,
        setProcessedImage,
        showLinks,
        setShowLinks

      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => useContext(ImageContext);
