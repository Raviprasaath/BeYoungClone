import image1 from "../../assets/homepage-section3/image1.jpg"
import image2 from "../../assets/homepage-section3/image2.jpg"

import './HomeCarouselSection3.css'

const HomeCarouselSection3 = () => {


    return (
        <>
            <div className="flex justify-center">
                <div className='w-[90%] flex flex-row gap-2.5 overflow-x-scroll overflow-y-hidden p-2.5  touch-scroll sm4:[ w-full flex flex-row  ]'>
                    <img className='w-full sm4:w-[48%]' src={image1} alt="img" />
                    <img className='w-full sm4:w-[48%]' src={image2} alt="img" />
                </div>
            </div>
        </>
    )
}

export default HomeCarouselSection3;