import { useEffect, useState } from "react";

import NavbarLayer1 from "./Components/NavbarLayer1/NavbarLayer1";
import NavbarLayer2 from "./Components/NavbarLayer2/NavbarLayer2";
import NavbarLayer3 from "./Components/NavbarLayer3/NavbarLayer3";

import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/HomePage/Homepage";
import ClothingPage from "./Components/ClothingPage/ClothingPage";
import { Route, Routes, useLocation } from "react-router-dom";
import ClothingFilter from "./Components/ClothingPage/ClothingFilter";
import { useScreenSize } from "./Components/CommonFunctions/CommonFunctions";
import ProductPage from "./Components/ProductPage/ProductPage";
import UserAuthentication from "./Components/UserAuthentication/UserAuthentication";
import Checkout from "./Components/Checkout";

function App() { 
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const location = useLocation();
  
  const [sideNavbar, setSideNavbar] = useState(false);
  const [filterScreenOpen, setFilterScreenOpen] = useState(false);

  const handlerNavbarToggle = (value) => {
    setSideNavbar(value);
  };
  
  const handlerOpenFilter = (value) => {
    setFilterScreenOpen(value);
  }


  return (
    <>
      {location.pathname !== "/checkout" &&
        <div className="z-50">
          <UserAuthentication className="z-50" />
        </div>
      }
      <div className="z-10">
      {location.pathname !== "/checkout" &&
      <>
        <NavbarLayer1 />
        <div className="sticky -top-0.5 left-0 z-20">
          <NavbarLayer2 handlerNavbarToggle={handlerNavbarToggle} />
        </div>
        <div className="absolute top-0 left-0 z-40">
          <NavbarLayer3
            toggleState={sideNavbar}
            handlerNavbarToggle={handlerNavbarToggle}
          />
        </div>
      </>
      }
        {location.pathname !== "/checkout" && filterScreenOpen && isMobile && 
          <>
            <div className="fixed top-0 z-50 flex flex-row w-[100%] h-full">
                <div className=" z-1 max-w-[270px] h-full bg-white">
                  {<ClothingFilter />}
                </div>
                <div
                  className=" z-1 w-full h-full backdrop-blur-sm bg-gray-rgba "
                  onClick={()=>handlerOpenFilter(false)}
                >
                </div>
              </div>            
          </>          
        }
        
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/clothing/:name" element={ <ClothingPage handlerOpenFilter={handlerOpenFilter} /> } />
          <Route path="/clothing/:name/:productName" element={ <ProductPage /> } />
          <Route path="/checkout" element={ <Checkout /> } />
        </Routes>
        
        {location.pathname !== "/checkout" &&
          <Footer />
        }
        
      </div>
    </>
  );
}

export default App;
