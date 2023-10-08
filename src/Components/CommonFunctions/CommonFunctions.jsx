import { useEffect, useState } from "react";


export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth > 960);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return screenSize;
}
