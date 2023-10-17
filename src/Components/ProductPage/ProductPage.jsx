import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";



import './ProductPage.css'

import img1a from "../../assets/product-discription/1.jpg"
import img2a from "../../assets/product-discription/2.jpg"
import img3a from "../../assets/product-discription/3.jpg"
import img4a from "../../assets/product-discription/4.jpg"

import { GiPriceTag, GiCash } from "react-icons/gi"
import { FaShippingFast } from "react-icons/fa"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { MdShoppingCartCheckout } from "react-icons/md"
import { GrFormNextLink } from "react-icons/gr"

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { Label } from "@radix-ui/react-menubar";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";

import "react-image-gallery/styles/css/image-gallery.css";

const ProductPage = () => {
    const [singleProduct, setSingleProduct] = useState();
    const [productSizeSelection, setProductSizerSelection] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    

    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;


    const location = useLocation();
    const str = location.pathname;

    const handlerSizeSelector = (e) => {
        if (productSizeSelection === e.target.innerText) {
            setProductSizerSelection("");
        } else {
            setProductSizerSelection(e.target.innerText);
        }
    }

    let strFinal = "";
    for (let i=str.length-1; i>=0; i--) {
        if (str.charAt(i) !== '/') {
            strFinal += (str.charAt(i));
        } else {
            break;
        }
    }

    const reversedStrFinal = strFinal.split('').reverse().join('');
    
    async function singleProductFetch() {
        const productId = reversedStrFinal;
      
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`, {
            method: 'GET',
            headers: {
              'projectID': 'vflsmb93q9oc',
              'Content-Type': 'application/json', 
            },
            mode: 'cors',
          });
      
          const result = await response.json();
          console.log("result", result.data);
          setSingleProduct(result.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      useEffect(() => {
        singleProductFetch();
      }, []);
      

    useEffect(()=> {
        setTimeout(()=> {
            singleProductFetch();
        }, 100)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 960) {
                window.location.reload();
            } else {
                window.location.reload();
            }
        };      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      

    console.log("thumbsSwiper", thumbsSwiper);

    const handlerCheckout = () => {
        if(productSizeSelection === "") {
            handlerScrollToSizeChart();
        } else {
            console.log("success");
        }
    }

    const handlerScrollToSizeChart = () => {
        const element = document.getElementById('sizeChart');
        if (element) {            
            const offset = element.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };
    
    const handlerSwiperData = () => {
        setThumbsSwiper
    }

    const imageContainer = (
        <>
        {isMobile &&         
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {singleProduct?.images.map((item, index)=> (
                    <SwiperSlide key={index} >
                        <div className="grid place-items-center">
                            <img className="w-[80%]" src={item} alt="" />
                        </div>
                    </SwiperSlide>
                ))}         
            </Swiper>
        }

        {!isMobile && singleProduct &&
            <>
            <div className="flex flex-row-reverse">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 w-[600px] h-[500px]"
                >
                    {singleProduct?.images.map((item, index)=> (
                        <SwiperSlide className="flex justify-center items-center" key={index} >                            
                            <img className="h-[500px]" src={item} alt="" />                            
                        </SwiperSlide>
                    ))} 
                </Swiper>
                <Swiper
                    // onSwiper={handlerSwiperData}
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    direction="vertical"
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {singleProduct?.images.map((item, index)=> (
                        <SwiperSlide className="w-[100px] h-[250px]" key={index} >                            
                            <img className="w-[200px] h-[100px]" src={item} alt="" />                            
                        </SwiperSlide>
                    ))} 
                    
                </Swiper>
            </div>
            </>
        }
        </>
    );
    const productPriceDescription = (
        <div className="px-2">
            <p className="text-[1rem] font-bold px-2">{singleProduct?.name}</p>
            <p className="text-[0.9rem] opacity-70 px-2">{singleProduct?.subCategory}</p>
            <p className="px-2">
                <span className="text-[1rem] font-bold">                    
                    ₹ {singleProduct?.price}
                </span>
                <span className="line-through text-[0.8rem] px-1 opacity-70">
                    ₹ {singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )}
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
        <div id="sizeChart" className="px-2">
        <h4 className="text-[0.9rem] font-medium">SIZE</h4>
        {productSizeSelection ==="" &&
            <p className="text-[0.7rem] text-red-500">Please select a size</p>
        }
        
        <div className="flex items-center gap-2.5 justify-center" >
            <div onClick={(event)=>handlerSizeSelector(event)} className={`text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center ${productSizeSelection === "S" ? 'border-teal-400' : ''}`}>
                S
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center ${productSizeSelection === "M" ? 'border-teal-400':""}`}>
                M
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center ${productSizeSelection === "L" ? 'border-teal-400' : ''}`}>
                L
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center ${productSizeSelection === "XL" ? 'border-teal-400' : ''}`}>
                XL
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`text-[0.75rem] rounded-full border-2 w-[30px] pt-[3.2px] h-[30px] text-center ${productSizeSelection === "XXL" ? 'border-teal-400' : ''}`}>
                XXL
            </div>
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
    const delivery = (
        <div className="px-2">
                <h4 className="text-[0.9rem] font-medium">DELIVERY OPTIONS</h4>
                <div className="flex">
                    <input className="my-2 px-2 border-solid border-2 border-stone-300 w-[70%]" type="text" placeholder="Enter Pincode"/>
                    <Label className="my-2 w-[20%] text-white font-bold text-center bg-teal-400">CHECK</Label>
                </div>
                <div className="px-2">
                    <div className="flex items-center gap-2 py-2">
                        <GiCash className="bg-teal-100 text-[1.5rem]" /> 
                        <p className="text-[0.8rem]">
                            Cash On Delivery
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShippingFast className="bg-teal-100 text-[1.5rem]" />
                        <p className="text-[0.8rem]">
                            Express Shipping
                        </p>
                    </div>
                </div>
        </div>
    )
    const productDescription = (
        <div className="px-2">
            <h4 className="text-[0.9rem] font-medium">PRODUCT DETAILS</h4>
            <div className="my-2 text-[0.8rem]">
                {singleProduct?.description}
            </div>
        </div>
    )
    const ratingReview = (
        <div className="px-2">
        <div className="my-3">
            <h4 className="text-[0.9rem] font-medium">RATINGS & REVIEW</h4>
            <div className="flex">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiOutlineStar className="text-yellow-400" />
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-gray-400 text-[0.9rem]">User Name</p>
                    <p className="px-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio libero fugit delectus cumque deleniti distinctio enim ratione temporibus perspiciatis ea. Esse nobis quasi quaerat libero incidunt voluptate consectetur beatae nulla!</p>
                </div>
            </div>
        </div>
        <div className="my-3">            
            <div className="flex">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiOutlineStar className="text-yellow-400" />
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-gray-400 text-[0.9rem]">User Name</p>
                    <p className="px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum illum corporis libero pariatur illo! Corrupti aperiam, a expedita corporis rem molestiae ipsa accusantium temporibus itaque consectetur laudantium. Ea, aliquam voluptate?</p>
                </div>
                <button className="w-[50px] text-center bg-teal-300 text-white px-2">Delete</button>
                 
            </div>
        </div>
        <div className="my-3">
            
            <div className="flex">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiOutlineStar className="text-yellow-400" />
            </div>
            <div className="flex flex-col">
                <textarea className="border-2 border-solid border-gray-300" type="text" placeholder="Add a review" />
                <button className="w-[50px] my-2 text-center bg-teal-300 text-white px-2">Add</button>
            </div>
        </div>
        
    </div>
    )
    const branding = (
        <div className="flex gap-2 justify-center">
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className="w-[80px]" src={img1a} alt="" />
                    <p className="text-center px-2 text-[0.7rem] ">
                        1.5M+ Happy Customers
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className="w-[80px]" src={img2a} alt="" />
                    <p className="text-center px-2 text-[0.7rem] ">
                        15 Days Easy Returns
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className="w-[80px]" src={img3a} alt="" />
                    <p className="text-center px-2 text-[0.7rem] ">
                        Homegrown Brand
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className="w-[80px]" src={img4a} alt="" />
                    <p className="text-center px-2 text-[0.7rem] ">
                        Packed with Safety
                    </p>
                </div>
            </div>
    )
    const checkout = (
        <>
            <div className="flex">
                <div className="flex font-bold justify-center items-center gap-2 text-[0.8rem] px-2 text-white py-2 rounded m-1 w-full bg-teal-400">
                    <MdShoppingCartCheckout /> 
                    <p onClick={()=>handlerCheckout()}>
                        ADD TO CART
                    </p>
                </div>
                <div className="flex font-bold justify-center items-center gap-2 text-[0.8rem] px-2 py-2 rounded m-1 w-full bg-yellow-300">
                <GrFormNextLink />
                    <p onClick={()=>handlerCheckout()}>
                        BUY NOW
                    </p>
                    
                </div>
            </div>
        </>
    )

    return (
        <>
        {!singleProduct && <>Loading</>}
        {isMobile && 
            <>
                {singleProduct && 
                    <>
                        {imageContainer}
                        <div>
                            {productPriceDescription}
                            <div className="my-2 border-2"></div>
                            {sizeSelection}
                            <div className="my-2 border-2"></div>
                            {quantity}
                            <div className="my-2 border-2"></div>
                            {delivery}
                            <div className="my-2 border-2"></div>
                            {productDescription}
                            <div className="my-2 border-2"></div>
                            {ratingReview}
                            <div className="my-2 border-2"></div>
                            {branding}
                            <div className="my-2 border-2"></div>        
                        </div>
                        <div className="sticky z-20 bg-white bottom-0">
                            {checkout}
                        </div>
                    </>
                }
            </>
        }
        {!isMobile &&
            <>
                <div className="flex w-[100%] justify-center gap-[20px] ">
                    <div className="w-[40%]">
                        {imageContainer}
                    </div>
                    <div className="w-[40%] bg-yellow--300">
                        {productPriceDescription}                            
                        {sizeSelection}
                        {quantity}
                        {delivery}
                    </div>
                </div>
                    {productDescription}
            </>

        }
        </>
    );
};

export default ProductPage;
