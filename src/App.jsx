import { useState } from 'react'
import HomeCarouselSection1 from './Components/HomePage/HomeCarouselSection1/HomeCarouselSection1'
import HomeCarouselSection2 from './Components/HomePage/HomeCarouselSection2/HomeCarouselSection2'
import HomeCarouselSection3 from './Components/HomePage/HomeCarouselSection3/HomeCarouselSection3'
import HomeCarouselSection4 from './Components/HomePage/HomeCarouselSection4/HomeCarouselSection4'
import NavbarLayer1 from './Components/NavbarLayer1/NavbarLayer1'
import NavbarLayer2 from './Components/NavbarLayer2/NavbarLayer2'
import NavbarLayer3 from './Components/NavbarLayer3/NavbarLayer3'

import homePageSection5 from './assets/home-page-5.png'
import homePageSection7 from './assets/homepage-4.jpg'
import homePageSection8 from './assets/homepage-5.jpg'
import homePageSection9 from './assets/homepage-6.jpg'

import HomeCarouselSection5 from './Components/HomePage/HomeCarouselSection5/HomeCarouselSection5'
import HomeCarouselSection6 from './Components/HomePage/HomeCarouselSection6/HomeCarouselSection6'

import HomeMenCategories from './Components/HomePage/HomeMenCategories/HomeMenCategories'
import HomeWomenCategories from './Components/HomePage/HomeWomenCategories/HomeWomenCategories'
import Footer from './Components/Footer/Footer'



function App() {

  const [sideNavbar, setSideNavbar] = useState(false);

  const handlerNavbarToggle = (value) => {
    setSideNavbar(value);
  }

  return (
    <>
    <div >
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
        <img className='w-[79.5%]' src={homePageSection5} alt="home-page-5" />
      </div>
      <HomeMenCategories />
      <HomeWomenCategories />
      <div className='mt-5 w-full grid place-items-center'>
        <img className='w-[78.2%]' src={homePageSection7} alt="home-page-5" />
      </div>
      <HomeCarouselSection5 />
      <HomeCarouselSection6 />
      <div className='mt-5 w-full grid place-items-center'>
        <img className='w-[78.2%]' src={homePageSection8} alt="home-page-5" />
      </div>
      <div className='mt-5 w-full grid place-items-center'>
        <img className='w-[78.2%]' src={homePageSection9} alt="home-page-5" />
      </div>

      <Footer />

      
    </div>
    </>
  )
}

export default App
