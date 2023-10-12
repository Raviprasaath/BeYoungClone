import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/categories-for-women/1.jpg"
import img2 from "../../assets/categories-for-women/2.jpg"
import img3 from "../../assets/categories-for-women/3.jpg"
import img4 from "../../assets/categories-for-women/4.jpg"
import img5 from "../../assets/categories-for-women/5.jpg"
import img6 from "../../assets/categories-for-women/6.jpg"

import { AiFillStar } from "react-icons/ai"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductPage = () => {
  const imageContainer = (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img3} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img4} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img5} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="grid place-items-center">
                <img className="w-[80%]" src={img6} alt="" />
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );

  return (
    <>
        {imageContainer}
        <div>
            <p>Product name</p>
            <p>Category</p>
            <p>
                <span className="px-2 text-[1.2rem] font-bold">                    
                    ₹ 799 
                </span>
                <span className="line-through px-2">
                    ₹ 1598 
                </span>
                <span className="px-2 font-bold">
                    (50% Off)
                </span>
            </p>
            <p>Inclusive of Taxes + Free Shipping</p>
            <div className="flex">                
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                
            </div>
        </div>
    </>
  );
};

export default ProductPage;
