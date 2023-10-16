import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/categories-for-women/1.jpg"
import img2 from "../../assets/categories-for-women/2.jpg"
import img3 from "../../assets/categories-for-women/3.jpg"
import img4 from "../../assets/categories-for-women/4.jpg"
import img5 from "../../assets/categories-for-women/5.jpg"
import img6 from "../../assets/categories-for-women/6.jpg"

import { AiFillStar } from "react-icons/ai"
import { GiPriceTag } from "react-icons/gi"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Label } from "@radix-ui/react-menubar";

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

    const productPriceDescription = (
        <div className="px-2">
            <p className="text-[0.9rem] font-bold px-2">Product name</p>
            <p className="text-[0.8rem] opacity-70 px-2">Category</p>
            <p className="px-2">
                <span className="text-[1rem] font-bold">                    
                    ₹ 799 
                </span>
                <span className="line-through text-[0.8rem] px-1 opacity-70">
                    ₹ 1598 
                </span>
                <span className="px-1 text-[0.9rem] text-green-500 font-bold">
                    (50% Off)
                </span>
            </p>
            <p className="text-[0.8rem] opacity-50 px-2">Inclusive of Taxes + Free Shipping</p>
            <div className="flex ">
                <GiPriceTag className="text-rose-500 mx-1 text-[1.1rem]"/> 
                <p className="text-[0.7rem] font-bold">
                    Extra 100 OFF on ₹999 (Code: BEYOUNG100)
                </p>
            </div>
        </div>
    )

    const sizeSelection = (
        <div className="flex items-center gap-2.5 justify-center" >
                <div className="text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center">
                    S
                </div>
                <div className="text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center">
                    M
                </div>
                <div className="text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center">
                    L
                </div>
                <div className="text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center">
                    XL
                </div>
                <div className="text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center">
                    XXL
                </div>
            </div>
    )
    const quantity = (
        <div className="flex px-2">
            <Label htmlFor="qty">QTY: </Label>
            <select className="mx-2 px-1 w-[70px] border-2" name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>                
        </div>
    )
    

  return (
    <>
        {imageContainer}
        <div>
            {productPriceDescription}

            <div className="my-2 border-2"></div>
            {sizeSelection}
            <div className="my-2 border-2"></div>
            {quantity}
            <div className="my-2 border-2"></div>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate aut possimus, ea optio asperiores, fugit numquam beatae suscipit eos, impedit sint laboriosam ipsam? Consectetur eum veniam qui debitis quaerat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate aut possimus, ea optio asperiores, fugit numquam beatae suscipit eos, impedit sint laboriosam ipsam? Consectetur eum veniam qui debitis quaerat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate aut possimus, ea optio asperiores, fugit numquam beatae suscipit eos, impedit sint laboriosam ipsam? Consectetur eum veniam qui debitis quaerat!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cupiditate aut possimus, ea optio asperiores, fugit numquam beatae suscipit eos, impedit sint laboriosam ipsam? Consectetur eum veniam qui debitis quaerat!
            </div>

        </div>
    </>
  );
};

export default ProductPage;
