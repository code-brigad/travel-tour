import { useEffect } from "react";
import { useState } from "react";

const getWindowSize = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: typeof window !== 'undefined' ? window.innerWidth : null,
      height: typeof window !== 'undefined' ? window.innerHeight : null,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  
  return { screenSize };
};

export default getWindowSize;
