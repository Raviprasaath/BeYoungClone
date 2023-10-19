import { RiSecurePaymentLine } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { MdPayment } from 'react-icons/md'

const Checkout = () => {
    const productsContainer = (
        <>  


            <div className='w-full md1:w-[700px] bg-gray-200 md1:m-auto border'>
                <div className="flex shadow-lg h-[50px]">
                    <div className="font-bold w-1/2 bg-white flex items-center justify-center">
                        BEYOUNG
                    </div>
                    <div className="font-bold w-1/2 flex gap-2 items-center justify-center bg-gray-100">
                        <div>
                            <RiSecurePaymentLine />
                        </div>
                        <div>
                            100% SECURE PAYMENT
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <div className='my-4 flex w-[90%] m-auto bg-yellow-300 justify-around'>
                        <div className='flex flex-col justify-center items-center'>
                            <div>
                                <AiOutlineShoppingCart className='border-2 bg-white z-2 text-[2rem] rounded-full p-1'/>
                            </div>
                            <div className='text-[0.9rem]'>
                                My Cart
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center'>                    
                            <div>
                                <CiLocationOn  className='border-2 bg-white z-2 text-[2rem] rounded-full p-1'/>
                            </div>
                            <div className='text-[0.9rem]'>
                                Address
                            </div>
                        </div>
                        <div className='flex flex-col  justify-center items-center'>                                            
                                <div>
                                    <MdPayment className='border-2 bg-white  z-2 text-[2rem] rounded-full p-1' />
                                </div>
                                <div className='text-[0.9rem]'>
                                    Payment
                                </div>
                        </div>                
                    </div>
                </div>        
                <div className='absolute m-auto z-[1] left-[24%] right-[55%] top-[85px] border border-red-300 md1:w-[400px] md1:m-auto'></div>
            </div>

        </>
    )
    return (
        <>
            <div>
                {productsContainer}
            </div>
        </>
    )
}

export default Checkout;