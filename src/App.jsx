import { useState } from "react";

import NavbarLayer1 from "./Components/NavbarLayer1/NavbarLayer1";
import NavbarLayer2 from "./Components/NavbarLayer2/NavbarLayer2";
import NavbarLayer3 from "./Components/NavbarLayer3/NavbarLayer3";

import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/HomePage/Homepage";
import ClothingPage from "./Components/ClothingPage/ClothingPage";

function App() {
  const [sideNavbar, setSideNavbar] = useState(false);
  const handlerNavbarToggle = (value) => {
    setSideNavbar(value);
  };

  return (
    <>
      <div>
        <NavbarLayer1 />
        <div className="sticky -top-0.5 left-0 z-20">
          <NavbarLayer2 handlerNavbarToggle={handlerNavbarToggle} />
        </div>
        <div className="absolute top-0 left-0 z-50">
          <NavbarLayer3
            toggleState={sideNavbar}
            handlerNavbarToggle={handlerNavbarToggle}
          />
        </div>
        {/* <Homepage /> */}
        <ClothingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
