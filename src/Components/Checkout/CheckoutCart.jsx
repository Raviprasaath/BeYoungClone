import { RiSecurePaymentLine } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { MdPayment } from 'react-icons/md'
import { BsCash } from 'react-icons/bs'
import { PiTruckBold } from 'react-icons/pi'

import img from "../../assets/Clothing/sample-image.jpg"
import { Label } from '@radix-ui/react-menubar'

import { useScreenSize } from '../CommonFunctions/CommonFunctions'
import { Link } from 'react-router-dom'

const CheckoutCart = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;

    const checkoutHeader1 = (
        <div className='w-full md2:w-[80%] md2:m-auto border'>
            <div className="flex shadow-lg h-[50px]">
                    <div className={`font-bold w-1/2 bg-white flex items-center justify-center ${isMobile?"text-[0.8rem]":"text-[1rem]"}`}>
                <Link to="/">
                        BEYOUNG
                </Link>
                    </div>
                <div className="font-bold w-1/2 flex gap-2 items-center justify-center bg-gray-100">
                    <div>
                        <RiSecurePaymentLine />
                    </div>
                    <div className={`${isMobile?"text-[0.8rem]":"text-[1rem]"}`}>
                        100% SECURE PAYMENT
                    </div>
                </div>
            </div>                
        </div>
    )
    const checkoutHeader2 = (
        <>
            <div className='py-4 my-4 relative z-[1] bg-gray-100 lg:w-[80%] m-auto'>
                <div className='absolute z-[2] left-[15%] lg:left-[17%] lg:right[14%] right-[18%] top-[48px] lg:top-[30px] border border-gray-400 lg:w-[600px] m-auto'></div>            
                <div className='relative z-[3] my-4 flex justify-around w-full lg:w-[900px] lg:m-auto'>
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <AiOutlineShoppingCart className='border-2 bg-white text-[2rem] rounded-full p-1'/>
                        </div>
                        <div className='text-[0.9rem]'>
                            My Cart
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>                    
                        <div>
                            <CiLocationOn  className='border-2 bg-white text-[2rem] rounded-full p-1'/>
                        </div>
                        <div className='text-[0.9rem]'>
                            Address
                        </div>
                    </div>
                    <div className='flex flex-col  justify-center items-center'>                                            
                        <div>
                            <MdPayment className='border-2 bg-white text-[2rem] rounded-full p-1' />
                        </div>
                        <div className='text-[0.9rem]'>
                            Payment
                        </div>
                    </div>        
                </div>            
            </div>
        </>
    )
    const productsContainer = (
        <div className='flex justify-center'>
            <div className='bg-gray-100 flex flex-col md2:w-[80%]  md2:flex-row'>
                <div className='bg-gray-100 flex flex-col items-center  md2:w-[60%]'>
                    <div className='my-2 bg-white shadow-lg w-[90%] flex flex-col'>
                        <div className='flex gap-2'>
                            <div className='px-2'>
                                <div>
                                    <img className='h-[200px]' src={img} alt="" />
                                </div>

                                <div className="flex p-2">
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
                                
                            </div>
                            <div>
                            <p className={`${isMobile?'text-[1rem]':'text-[1.1rem]'} w-[90%] font-bold px-2`}>Product Name</p>
                            <p className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} opacity-70 px-2`}>singleProduct?.subCategory</p>
                            <p className="px-2">
                                <span className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} font-bold`}>                    
                                    ₹ singleProduct?.price
                                </span>
                                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} px-1 opacity-70`}>
                                    ₹ singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )
                                </span>
                                <span className={`px-1 ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} text-green-500 font-bold`}>
                                    (50% Off)
                                </span>
                            </p>
                                <div className='border '></div>
                                <div className='flex justify-around'>
                                    <div>
                                        Color: Cream
                                    </div>
                                    <div>
                                        Size: 34
                                    </div>
                                </div>
                                <div className='border '></div>
                            </div>                        
                        </div>
                        <div className='border'></div>                
                        <div className='flex py-2 '>
                            <div className='w-[30%] text-center'>
                                Remove
                            </div>
                            <div className='border'></div>
                            <div className='w-[70%] text-center'>
                                Add to Wishlist
                            </div>
                        </div>
                    </div>
                    <div className='my-2 bg-white shadow-lg w-[90%] flex flex-col'>
                        <div className='flex gap-2'>
                            <div className='px-2'>
                                <div>
                                    <img className='h-[200px]' src={img} alt="" />
                                </div>

                                <div className="flex p-2">
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
                                
                            </div>
                            <div>
                            <p className={`${isMobile?'text-[1rem]':'text-[1.1rem]'} w-[90%] font-bold px-2`}>Product Name</p>
                            <p className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} opacity-70 px-2`}>singleProduct?.subCategory</p>
                            <p className="px-2">
                                <span className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} font-bold`}>                    
                                    ₹ singleProduct?.price
                                </span>
                                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} px-1 opacity-70`}>
                                    ₹ singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )
                                </span>
                                <span className={`px-1 ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} text-green-500 font-bold`}>
                                    (50% Off)
                                </span>
                            </p>
                                <div className='border '></div>
                                <div className='flex justify-around'>
                                    <div>
                                        Color: Cream
                                    </div>
                                    <div>
                                        Size: 34
                                    </div>
                                </div>
                                <div className='border '></div>
                            </div>                        
                        </div>
                        <div className='border'></div>                
                        <div className='flex py-2 '>
                            <div className='w-[30%] text-center'>
                                Remove
                            </div>
                            <div className='border'></div>
                            <div className='w-[70%] text-center'>
                                Add to Wishlist
                            </div>
                        </div>
                    </div>
                    <div className='my-2 bg-white shadow-lg w-[90%] flex flex-col'>
                        <div className='flex gap-2'>
                            <div className='px-2'>
                                <div>
                                    <img className='h-[200px]' src={img} alt="" />
                                </div>

                                <div className="flex p-2">
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
                                
                            </div>
                            <div>
                            <p className={`${isMobile?'text-[1rem]':'text-[1.1rem]'} w-[90%] font-bold px-2`}>Product Name</p>
                            <p className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} opacity-70 px-2`}>singleProduct?.subCategory</p>
                            <p className="px-2">
                                <span className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} font-bold`}>                    
                                    ₹ singleProduct?.price
                                </span>
                                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} px-1 opacity-70`}>
                                    ₹ singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )
                                </span>
                                <span className={`px-1 ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} text-green-500 font-bold`}>
                                    (50% Off)
                                </span>
                            </p>
                                <div className='border '></div>
                                <div className='flex justify-around'>
                                    <div>
                                        Color: Cream
                                    </div>
                                    <div>
                                        Size: 34
                                    </div>
                                </div>
                                <div className='border '></div>
                            </div>                        
                        </div>
                        <div className='border'></div>                
                        <div className='flex py-2 '>
                            <div className='w-[30%] text-center'>
                                Remove
                            </div>
                            <div className='border'></div>
                            <div className='w-[70%] text-center'>
                                Add to Wishlist
                            </div>
                        </div>
                    </div>
                    <div className='my-2 bg-white shadow-lg w-[90%] flex flex-col'>
                        <div className='flex gap-2'>
                            <div className='px-2'>
                                <div>
                                    <img className='h-[200px]' src={img} alt="" />
                                </div>

                                <div className="flex p-2">
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
                                
                            </div>
                            <div>
                            <p className={`${isMobile?'text-[1rem]':'text-[1.1rem]'} w-[90%] font-bold px-2`}>Product Name</p>
                            <p className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} opacity-70 px-2`}>singleProduct?.subCategory</p>
                            <p className="px-2">
                                <span className={`${isMobile?'text-[0.9rem]':'text-[1rem]'} font-bold`}>                    
                                    ₹ singleProduct?.price
                                </span>
                                <span className={`line-through ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} px-1 opacity-70`}>
                                    ₹ singleProduct?.price + (singleProduct?.price * ( 50 / 100 ) )
                                </span>
                                <span className={`px-1 ${isMobile?'text-[0.8rem]':'text-[0.9rem]'} text-green-500 font-bold`}>
                                    (50% Off)
                                </span>
                            </p>
                                <div className='border '></div>
                                <div className='flex justify-around'>
                                    <div>
                                        Color: Cream
                                    </div>
                                    <div>
                                        Size: 34
                                    </div>
                                </div>
                                <div className='border '></div>
                            </div>                        
                        </div>
                        <div className='border'></div>                
                        <div className='flex py-2 '>
                            <div className='w-[30%] text-center'>
                                Remove
                            </div>
                            <div className='border'></div>
                            <div className='w-[70%] text-center'>
                                Add to Wishlist
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className=' w-[100%] md2:w-[35%]'>
                    <div className='my-[30px] md2:my-[10px] p-2 bg-white'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <BsCash />
                            </div>
                            <div className='font-semibold'>
                                Offers & Benefits
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <input className="my-2 px-2 border-solid border-2 border-stone-300 w-[80%]" type="text" placeholder="Enter code"/>
                                <Label className="cursor-pointer my-2 w-[20%] text-white font-bold text-center bg-teal-400">Apply</Label>
                            </div>
                            <div className='border-2'></div>
                            <div className='p-2 flex justify-around text-[0.8rem]'>
                                <div>
                                    Flat ₹100 Off OnOrders Above ₹999
                                </div>
                                <div className='h-fit bg-yellow-100 font-bold'>
                                    BEYOUNG100
                                </div>

                            </div>
                            <div className='border-2'></div>
                            
                        </div>


                    </div>

                    <div className='my-[2px] p-2 bg-white'>
                        <div className='font-semibold'>Price Details (4 items)</div>
                        <div className='border'></div>
                        
                        <div className='flex flex-col gap-1'>
                            <div className='flex text-[0.9rem] justify-between'>
                                <div>Total MRP (Inc.of Taxes)</div>
                                <div>₹10397</div>
                            </div>
                            <div className='flex justify-between text-[0.9rem]'>
                                <div>Beyoung Discount</div>
                                <div>-₹6702</div>
                            </div>
                            <div className='flex justify-between text-[0.9rem]'>
                                <div>Shipping</div>
                                <div className='text-green-500'>Free</div>
                            </div>
                            <div className='py-2 flex justify-between text-[0.9rem]'>
                                <div>Cart Total</div>
                                <div className='font-bold'>₹3695</div>
                            </div>
                        </div>
                    </div>

                    <div className='my-[5px] flex flex-col justify-between p-2 bg-white'>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>
                                Total  Amount
                            </div>
                            <div className='font-bold text-[0.9rem]'>
                                ₹3695
                            </div>
                        </div>

                        <div className='my-3 bg-lime-600 font-semibold text-white text-center p-1 text-[0.8rem]'>
                            You Saved ₹6702 On This Order
                        </div>
                        {!isMobile &&                 
                            <Link to="/checkout/shipping">
                                <div className='bg-teal-300 text-white font-semibold text-center p-2'>
                                    CHECKOUT SECURELY
                                </div>
                            </Link>
                        }
                    </div>

                    <div className='text-[0.8rem] flex justify-center items-center gap-2 text-gray-500'>
                        <div>
                            <PiTruckBold className='text-[1rem]'/>
                        </div>
                        <div>
                            Free Delivery & Inclusive Of All Taxes
                        </div>
                    </div>

                    <div className='h-[80px]'>

                    </div>
                </div>

            </div>
            
            {isMobile &&
                <div className='fixed bottom-0 bg-white w-full flex flex-row justify-between p-2'>
                    <div>
                        <div>
                            ₹3695            
                        </div>
                        <div className='text-teal-400 text-[0.7rem] font-semibold'>
                            View Details
                        </div>
                    </div>
                    <div>
                    <Link to="/checkout/shipping">
                        <button className='bg-teal-400 text-white font-semibold p-2 rounded text-[0.8rem]'>
                            CHECKOUT SECURELY
                        </button>
                        </Link>
                    </div>

                </div>
            }
        </div>
    )
    return (
        <>
            <div>
                {checkoutHeader1}
                {checkoutHeader2}
                {productsContainer}
            </div>
        </>
    )

}

export default CheckoutCart;