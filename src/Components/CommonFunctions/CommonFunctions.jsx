import { useEffect, useState } from "react";


export const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth > 960);

    useEffect(() => {
      const handlerScreenSize = () => {
        setScreenSize(window.innerWidth > 960);
      };
      window.addEventListener("resize", handlerScreenSize);
  
      return () => {
        window.removeEventListener("resize", handlerScreenSize);
      };
    }, []);

    return screenSize;
}