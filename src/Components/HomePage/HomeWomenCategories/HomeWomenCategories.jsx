import { useScreenSize } from "../../CommonFunctions/CommonFunctions"

import image1 from "../../../assets/categories-for-women/1.jpg"
import image2 from "../../../assets/categories-for-women/2.jpg"
import image3 from "../../../assets/categories-for-women/3.jpg"
import image4 from "../../../assets/categories-for-women/4.jpg"
import image5 from "../../../assets/categories-for-women/5.jpg"
import image6 from "../../../assets/categories-for-women/6.jpg"

import image1b from "../../../assets/categories-for-women/1b.jpg"
import image2b from "../../../assets/categories-for-women/2b.jpg"
import image3b from "../../../assets/categories-for-women/3b.jpg"
import image4b from "../../../assets/categories-for-women/4b.jpg"
import image5b from "../../../assets/categories-for-women/5b.jpg"
import image6b from "../../../assets/categories-for-women/6b.jpg"
import image7b from "../../../assets/categories-for-women/7b.jpg"
import image8b from "../../../assets/categories-for-women/8b.jpg"
import image9b from "../../../assets/categories-for-women/9b.jpg"


const HomeWomenCategories = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;

    return (
        <>
            {!isMobile && 
                <div className="flex justify-center">
                    <div className="flex flex-col justify-center w-[78%]">
                        <h1 className="text-[20px] font-bold">FOR WOMEN</h1>
                        <div className="flex flex-row flex-wrap gap-2">
                            <img className="w-[190px]" src={image1} alt="img1" />
                            <img className="w-[190px]" src={image2} alt="img2" />
                            <img className="w-[190px]" src={image3} alt="img3" />
                            <img className="w-[190px]" src={image4} alt="img4" />
                            <img className="w-[190px]" src={image5} alt="img5" />
                            <img className="w-[190px]" src={image6} alt="img6" />
                        </div>
                    </div>
                </div>
            }
            {isMobile && 
                 <div className="flex justify-center"> 

                 <div className="flex flex-col w-[77%]">
     
                     <div className="flex flex-col">
                    <h2 className="font-bold py-3.5">FOR WOMEN</h2>
                    <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image1b} alt="" />
                        </div>
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image2b} alt="" />
                        </div>
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image3b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image4b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image5b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image6b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image7b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image8b} alt="" />    
                        </div>                        
                        <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                            <img className=" w-[200px]" src={image9b} alt="" />    
                        </div>                        
                    </div>
                </div>
                </div>
                </div>
                
            }

        </>
    )
}

export default HomeWomenCategories;