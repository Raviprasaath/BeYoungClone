import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";



import './ProductPage.css'

import img1a from "../../assets/product-discription/1.jpg"
import img2a from "../../assets/product-discription/2.jpg"
import img3a from "../../assets/product-discription/3.jpg"
import img4a from "../../assets/product-discription/4.jpg"

import { GiPriceTag, GiCash } from "react-icons/gi"
import { FaShippingFast } from "react-icons/fa"
import { AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai"
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
let mySet1 = new Set();
let arr = [];

const ProductPage = () => {
    const [singleProduct, setSingleProduct] = useState();
    const [productSizeSelection, setProductSizerSelection] = useState("");
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [favoriteProduct, setFavoriteProduct] = useState(false);
    const [similarProduct, setSimilarProduct] = useState();
    const [activateHeartId, setActivateHeartId] = useState([]);

    const handlerFavorite = () => {
        setFavoriteProduct(!favoriteProduct);
    }

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


        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

    }, [reversedStrFinal]);

    useEffect(() => {
        const dataFromHP3 = location?.state?.similarProducts || location?.state?.data;
        setSimilarProduct(dataFromHP3);
    }, [location.pathname]);
    

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
    
    const handlerSwiperData = (e) => {
        singleProductFetch();
        setThumbsSwiper(e);
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
                        thumbs={{ swiper: thumbsSwiper?thumbsSwiper:  ""  }}
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
                    onSwiper={handlerSwiperData}
                    // onSwiper={setThumbsSwiper}
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
                        <SwiperSlide className="w-[100px] h-[100%]" key={index} >                            
                            <img className="w-[200px] h-[auto]" src={item} alt="" />                            
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
            <p className={`${isMobile?'text-[1rem]':'text-[1.4rem]'} w-[90%] font-bold px-2`}>{singleProduct?.name}</p>
            <p className={`${isMobile?'text-[0.9rem]':'text-[1.2rem]'} opacity-70 px-2`}>{singleProduct?.subCategory}</p>
            <p className="px-2">
                <span className={`${isMobile?'text-[1rem]':'text-[1.2rem]'} font-bold`}>                    
                    ₹ {singleProduct?.price}
                </span>
                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-1 opacity-70`}>
                    ₹ {singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )}
                </span>
                <span className={`px-1 ${isMobile?'text-[0.9rem]':'text-[1.2rem]'} text-green-500 font-bold`}>
                    (50% Off)
                </span>
            </p>
            <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'} opacity-50 px-2 py-2`}>Inclusive of Taxes + Free Shipping</p>
            <div className="flex ">
                <GiPriceTag className={`text-rose-500 mx-1 ${isMobile?'text-[1.1rem]':'text-[1.8rem]'}`}/> 
                <p className={`${isMobile?'text-[0.7rem]':'text-[1rem]'} font-bold`}>
                    Extra 100 OFF on ₹999 (Code: BEYOUNG100)
                </p>
            </div>
        </div>
    )
    const sizeSelection = (
        <div id="sizeChart" className="px-2">
        <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.2rem]'} font-medium px-2`}>SIZE</h4>
        {productSizeSelection ==="" &&
            <p className={`${isMobile?'text-[0.7rem]':'text-[1rem] px-2'} text-red-500 px-2`}>Please select a size</p>
        }
        
        <div className={`py-2 flex items-center gap-2.5 ${isMobile?'justify-center':""}`} >
            <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "S" ? 'border-teal-400' : ''}`}>
                S
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "M" ? 'border-teal-400':""}`}>
                M
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "L" ? 'border-teal-400' : ''}`}>
                L
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "XL" ? 'border-teal-400' : ''}`}>
                XL
            </div>
            <div onClick={(event)=>handlerSizeSelector(event)} className={`cursor-pointer ${isMobile?'text-[0.75rem]':'text-[1rem]'} rounded-full border-2 w-[50px] pt-[10.5px] h-[50px] text-center ${productSizeSelection === "XXL" ? 'border-teal-400' : ''}`}>
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
                <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`} >DELIVERY OPTIONS</h4>
                <div className="flex">
                    <input className="my-2 px-2 border-solid border-2 border-stone-300 w-[70%]" type="text" placeholder="Enter Pincode"/>
                    <Label className="cursor-pointer my-2 w-[20%] text-white font-bold text-center bg-teal-400">CHECK</Label>
                </div>
                <div className="px-2">
                    <div className="flex items-center gap-2 py-2">
                        <GiCash className={`bg-teal-100 text-[1.5rem]`} /> 
                        <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                            Cash On Delivery
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShippingFast className={`bg-teal-100 text-[1.5rem]`} />
                        <p className={`${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                            Express Shipping
                        </p>
                    </div>
                </div>
        </div>
    )

    function removeHtmlTags(input) {
        const regex = /<[^>]+>/g;
        return input.replace(regex, '');
    }
      
    const productDescription = (
        <div className="px-2">
            <h4 className={`${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`}>PRODUCT DETAILS</h4>
            <div className={`my-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'}`}>
                {singleProduct && removeHtmlTags(singleProduct.description)}
            </div>
        </div>
    )
    const ratingReview = (
        <div className="px-2">
        <div className="my-3">
            <h4 className={`my-2 ${isMobile?'text-[0.9rem]':'text-[1.3rem]'} font-medium`}>RATINGS & REVIEW</h4>
            <div className="flex">
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiFillStar className="text-yellow-400" />
                <AiOutlineStar className="text-yellow-400" />
            </div>
            <div className="flex flex-col">
                <div className="flex">
                    <p className={`text-gray-400 text-[0.9rem] ${!isMobile?'w-[30%]':'w-[100%]'}`}>User Name</p>
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
                    <p className={`text-gray-400 text-[0.9rem] ${!isMobile?'w-[30%]':'w-[100%]'}`}>User Name</p>
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
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img1a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        1.5M+ Happy Customers
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img2a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        15 Days Easy Returns
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img3a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        Homegrown Brand
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-2 2-fit">
                    <img className={`${isMobile?'w-[80px]' : 'w-[40%]'}`} src={img4a} alt="" />
                    <p className={`text-center px-2 ${isMobile?'text-[0.7rem]':'text-[1rem]'}`}>
                        Packed with Safety
                    </p>
                </div>
            </div>
    )
    const checkout = (
        <>
            <div className="flex">
                <div onClick={()=>handlerCheckout()} className="cursor-pointer flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 text-white py-2 rounded m-1 w-full bg-teal-400">
                    <MdShoppingCartCheckout /> 
                    <p >
                        ADD TO CART
                    </p>
                </div>
                <div onClick={()=>handlerCheckout()} className="cursor-pointer flex font-bold justify-center items-center gap-2 ${isMobile?'text-[0.8rem]':'text-[1rem]'} px-2 py-2 rounded m-1 w-full bg-yellow-300">
                <GrFormNextLink />
                    <p >
                        BUY NOW
                    </p>
                    
                </div>
            </div>
        </>
    )

    const oldLocation = location.pathname;
    let newLocation = oldLocation.replace(reversedStrFinal, '');

    const sameProduct = (
        <>
            {similarProduct ? (
            similarProduct.map((item) => (                                
                <Link key={item._id} 
                    to={`${newLocation}${item._id}`}
                    state={{data : similarProduct}}
                >
                <div className="relative max-w-[200px] flex flex-col justify-center items-center">
                  <div>
                    <img className="max-w-[200px] rounded-md" src={item.displayImage} alt="" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                      {item.name}
                    </p>
                    <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                      {item.subCategory}
                    </p>
                    <p className="flex flex-row justify-center items-center">
                      <span className="px-1.5 font-bold text-[0.9rem]">
                        ₹{item.price}
                      </span>
                      <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                        ₹{item.price + (item.price * ( 50 / 100 ) )}
                      </span>
                      <span className="px-1 font-bold text-[0.8rem] text-green-500">
                        (50% Off)
                      </span>
                    </p>
                  </div>
                  <div
                    className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
                    onClick={() => handlerFavAdding(item._id)}
                  >
                    {
                    activateHeartId?.includes(item._id)  ? (
                      <AiFillHeart className="text-red-500" />
                      ) : (
                      <AiOutlineHeart />
                    )}
                  </div>
                </div>
              </Link>
                
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    )

    const handlerFavAdding = (idVal) => {
        const idCheck = mySet1.has(idVal);
        if (idCheck) {
          mySet1.delete(idVal);
        } else {
          mySet1.add(idVal);     
        }
        arr = Array.from(mySet1);
        localStorage.setItem("favDress", JSON.stringify(arr));
        setActivateHeartId( ()=>arr )
      };


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
                    <div className="w-[40%] bg-yellow--300 relative">
                        {favoriteProduct ? (
                            <AiFillHeart onClick={()=>handlerFavorite()} className="absolute right-0 text-red-500 text-[2rem] border-2 rounded-full p-1"/>
                        ) : (
                        <AiOutlineHeart onClick={()=>handlerFavorite()} className="absolute right-0 text-red-500 text-[2rem] border-2 rounded-full p-1"/>
                        )}
                        
                        {productPriceDescription}
                        <div className="py-2"></div>                         
                        {sizeSelection}
                        <div className="py-1"></div>                         
                        {quantity}
                        <div className="py-1"></div>                         
                        {checkout}
                        <div className="py-1"></div>                         
                        {delivery}
                    </div>
                </div>
                <div className="my-4 w-[82%] bg-gray-100 flex justify-center m-auto">
                    {productDescription}
                </div>
                <div className="my-4 w-[82%] m-auto bg-gray-100">
                    {ratingReview}
                </div>
                <div className="w-[82%] m-auto">
                    {branding}
                </div>
                    
            </>
        }
        <div className="w-[82%] m-auto py-4">
            <div>Similar Product</div>
            <div className="flex gap-2 flex-wrap justify-center items-center">
                {sameProduct}
            </div>
        </div>
        </>
    );
};

export default ProductPage;