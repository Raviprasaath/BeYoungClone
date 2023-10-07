import { useState } from 'react'
import HomeCarouselSection1 from './Components/HomeCarouselSection1/HomeCarouselSection1'
import HomeCarouselSection2 from './Components/HomeCarouselSection2/HomeCarouselSection2'
import HomeCarouselSection3 from './Components/HomeCarouselSection3/HomeCarouselSection3'
import HomeCarouselSection4 from './Components/HomeCarouselsection4/HomeCarouselsection4'
import NavbarLayer1 from './Components/NavbarLayer1/NavbarLayer1'
import NavbarLayer2 from './Components/NavbarLayer2/NavbarLayer2'
import NavbarLayer3 from './Components/NavbarLayer3/NavbarLayer3'

import homePageSection5 from './assets/home-page-5.png'

function App() {

  const [sideNavbar, setSideNavbar] = useState(false);

  const handlerNavbarToggle = (value) => {
    setSideNavbar(value);
  }

  return (
    <>
      <NavbarLayer1 />
      <div className='sticky -top-0.5 left-0 z-20'>
        <NavbarLayer2 handlerNavbarToggle={handlerNavbarToggle} />
      </div>

      <div className='absolute top-0 left-0 z-50'>
        <NavbarLayer3 toggleState={sideNavbar} handlerNavbarToggle={handlerNavbarToggle} />
      </div>
      <div className='relative z-0'>

        <HomeCarouselSection1 />
        <HomeCarouselSection2 />
        <HomeCarouselSection3 />
        <HomeCarouselSection4 />
      </div>
      <div className='mt-5 w-full grid place-items-center'>
        <img className='w-[90%]' src={homePageSection5} alt="home-page-5" />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus, doloribus maiores quae, voluptatibus dolore porro voluptate, aliquam pariatur illo rem sequi debitis! Magnam, sunt modi possimus eaque dolore molestiae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus, doloribus maiores quae, voluptatibus dolore porro voluptate, aliquam pariatur illo rem sequi debitis! Magnam, sunt modi possimus eaque dolore molestiae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus, doloribus maiores quae, voluptatibus dolore porro voluptate, aliquam pariatur illo rem sequi debitis! Magnam, sunt modi possimus eaque dolore molestiae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur necessitatibus, doloribus maiores quae, voluptatibus dolore porro voluptate, aliquam pariatur illo rem sequi debitis! Magnam, sunt modi possimus eaque dolore molestiae.
    </>
  )
}

export default App
