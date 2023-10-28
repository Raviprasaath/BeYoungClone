
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";
import wishListEmpty from "../../assets/EMPTY-WISHLIST.jpg"
import noCoupon from "../../assets/no-coupon.jpg"
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./MyAccount.css"

import { GrPrevious } from 'react-icons/gr'
let productsIdArray = [];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const MyAccount = () => {
    const screenSize = useScreenSize();
    const isMobile = screenSize < 960;
    const location = useLocation();
    const navigate = useNavigate();

    const [currentLocation, setCurrentLocation] = useState("profile");
    const [loginCheck, setLoginCheck] = useState(false);
    let dataFromLocal = JSON.parse(localStorage.getItem("userDetails")) || [];
    const { refreshNavbar, refresher } = useDataContext();
    const [tokenVal, setTokenVal] = useState();

    const [mail, setMail] = useState("");
    const [wishList,setWishList] = useState();

    const [isProfilePicFetched, setIsProfilePicFetched] = useState(false);
    const [profilePic, setProfilePic] = useState();


    const [profileName, setProductName] = useState("");
    const [profileFirstLetter, setProfileFirstLetter] = useState("");
    const [profilePicFetch, setProfilePicFetch] = useState();

    const [mobileViewToggler, setMobileViewToggler] = useState(false);

    const [profileNameFromType, setProfileNameFromType] = useState();
    const [mobileNumber, setMobileNumber] = useState("");

    const [phoneError, setPhoneError] = useState(false);
    const [userNameError, setUserNameError] = useState(false);
    
    let booleanCondition = phoneError && userNameError

    useEffect(() => {
        const token = dataFromLocal?.token;
        productFirstInFetch("", "GET", token);
        if (dataFromLocal.username) {
          setLoginCheck(true);
          setTokenVal(dataFromLocal?.token);

          setMail(dataFromLocal.emailId)
          setProfileFirstLetter(dataFromLocal.username.charAt(0).toUpperCase());
        } else {
            setLoginCheck(false);
            navigate('/');
        }
        if (location.pathname === '/myaccount/order') {
            setCurrentLocation('order');
        } else if (location.pathname === '/myaccount/address') {
            setCurrentLocation('address');
        } else if (location.pathname === '/myaccount/profile') {
            setCurrentLocation('profile');
        } else if (location.pathname === '/myaccount/wishlist') {
            setCurrentLocation('wishlist');
        } else if (location.pathname === '/myaccount/coupons') {
            setCurrentLocation('coupons');
        }
        addressFetch();
        handlerWishListGetting(token);
        gettingDetailsOutFromProfile(token, "", "");
        setProductsFavHeartId([]);
        productsIdArray = [];

    }, [location.pathname, refreshNavbar, refresher]);
    const handlerLogout = () => {
        setLoginCheck(false);
        refreshNavbar();
        localStorage.removeItem('userDetails');
        setTimeout(()=> {
            navigate('/')
        }, 500)
    }
    const handlerMobileNumber = (e) => {
        if (e.target.value.length === 10) {
            setMobileNumber(e.target.value)
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    }
    const userNameCheck = (e) => {
        if (e.target.value.length > 4) {
            setProfileNameFromType(e.target.value)
            setUserNameError(true);
        } else {
            setUserNameError(false);
        }
    }
    
    const handlerMobileViewToggler = () => {
        setMobileViewToggler(true);
    }
    const productFirstInFetch = async (idVal, method, token) => {
        try {
          let myHeaders = new Headers();
          myHeaders.append("projectID", "vflsmb93q9oc");
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Authorization", `Bearer ${token}`);
    
          let raw = JSON.stringify({
            productId: `${idVal}`,
          });
    
          let requestOptions = {
            method: `${method}`,
            headers: myHeaders,
            redirect: "follow",
          };
    
          if (method === "PATCH") {
            requestOptions.body = raw;
          }
    
          const response = await fetch(
            "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
            requestOptions
          );
          if (response.ok) {
            const result = await response.json();
    
            let productsIdSet = new Set(productsIdArray); 
    
            const favProductsIdExtract = result.data.items.map((item) => {
              return item.products._id;
            });
    
            favProductsIdExtract.forEach((id) => {
              productsIdSet.add(id);
            });
    
            productsIdArray = Array.from(productsIdSet);
            setProductsFavHeartId(favProductsIdExtract);        
          }
        } catch (error) {
          console.log("error", error);
        }
    };
    const productAddingInFetch = async (idVal, method, token) => {
    try {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let raw = JSON.stringify({
        productId: `${idVal}`,
        });

        let requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        redirect: "follow",
        };

        if (method === "PATCH") {
        requestOptions.body = raw;
        }

        const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/wishlist",
        requestOptions
        );
        if (response.ok) {
        productFirstInFetch("", "GET", token)
        }
    } catch (error) {
        console.log("error", error);
    }
    };
    const productRemovingInFetch = async (idVal, method, token) => {
    try {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let raw = JSON.stringify({
        productId: `${idVal}`,
        });

        let requestOptions = {
        method: `${method}`,
        headers: myHeaders,
        redirect: "follow",
        };

        if (method === "PATCH") {
        requestOptions.body = raw;
        }

        const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${idVal}`,
        requestOptions
        );
        if (response.ok) {
        const updateLocalArray = productsIdArray.filter((item) => item !== idVal);
        productsIdArray = updateLocalArray;
        refreshNavbar();
        productFirstInFetch("", "GET", token)
        }
    } catch (error) {
        console.log("error", error);
    }
    };

    const handlerProfileNameMobUpdate = () => {
        gettingDetailsOutFromProfile(tokenVal, profileNameFromType,mobileNumber);
        handleClick();
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };


    const handleClose = (reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };

    const gettingDetailsOutFromProfile = async (tokenVal, name, mobile) => {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        let raw = JSON.stringify({
            "name": {name},
            "address": "",
            "phone": {mobile}
        });

        let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateme", requestOptions)
        if (response.ok) {
            const result = await response.json();
            
            if (result.data.user.profileImage) {
                setIsProfilePicFetched(true);
            }
            setProfilePicFetch(result.data.user.profileImage);
            setProductName(result.data.user.name);
        }
    }

    const handlerProfilePicUpload = async () => {

        const myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);

        const formdata = new FormData();
        formdata.append("profileImage", profilePic);

        const requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };
    
        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateProfileImage", requestOptions);
            if (response.ok) {
                const result = await response.json();
                console.log("Image update result", result);
                if (result.data.user.profileImage) {
                    setIsProfilePicFetched(true);
                }
                setProfilePicFetch(result.data.user.profileImage);
                setProductName(result.data.user.name);
            }
        } catch (error) {
        console.error("Image update error", error);
        }
        
    };

    const handlerWishListGetting = async (tokenVal) => {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Authorization", `Bearer ${tokenVal}`);
    
        let requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        const response = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", requestOptions)
        if (response.ok) {
          const result = await response.json();
          setWishList(result.data.items);
        }
    }

  const [productsFavHeartId, setProductsFavHeartId] = useState([]);


    const handlerFavAdding = (event, item, idVal) => {
        event.preventDefault();
        if (loginCheck) {
          const newIdArray = productsFavHeartId.includes(idVal) || productsIdArray.includes(idVal);
          if (newIdArray) {
            productRemovingInFetch(idVal, "DELETE", tokenVal);
          } else {
            productAddingInFetch(idVal, "PATCH", tokenVal);
          }
          refreshNavbar();
        }
    };

    const wishListUi = (
        wishList && wishList.length === 0 ? (
            <>
                <img src={wishListEmpty} alt="" />
            </>
        ) :
        (wishList ?
        wishList?.map((item)=> (
            <Link
                key={item.products._id}
                to={`/clothing/${item.products.name}/${item.products._id}`}
                state={{ data: wishList ? wishList : null }}
            >
                <div className="relative max-w-[200px] flex flex-col justify-center items-center">
                <div>
                    <img
                    className="max-w-[200px] rounded-md"
                    src={item.products.displayImage}
                    alt=""
                    />
                </div>
                <div>
                    <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
                    {item.products.name}
                    </p>
                    
                    <p className="flex flex-row justify-center items-center">
                    <span className="px-1.5 font-bold text-[0.9rem]">
                        ₹{item.products.price}
                    </span>
                    <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                        ₹{item.products.price + item.products.price * (50 / 100)}
                    </span>
                    <span className="px-1 font-bold text-[0.8rem] text-green-500">
                        (50% Off)
                    </span>
                    </p>
                </div>

                <div
                    className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
                    onClick={(event) => handlerFavAdding(event, item, item.products._id)}
                >
                    {productsFavHeartId.includes(item.products._id) || productsIdArray.includes(item.products._id) ? (
                    <AiFillHeart className="text-red-500" />
                    ) : (
                    <AiOutlineHeart />
                    )}
                </div>
                </div>
            </Link>
        )) : ("Loading"))
    )

    const addressFetch = () => {
        let myHeaders = new Headers();
        myHeaders.append("projectID", "vflsmb93q9oc");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2I2YTljY2JiNmQ1ZTcxNjZiMDhmNyIsImlhdCI6MTY5ODM5MjczMiwiZXhwIjoxNzI5OTI4NzMyfQ.d6E94J5VknhRQXpPaQzxfzaqXO9_89sYkr41VWSDiRU");

        var raw = JSON.stringify({
        "name": "raviprasaath",
        "address": "asd",
        "phone": "1234567890"
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://academics.newtonschool.co/api/v1/user/updateme", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
        setProfilePic(selectedFile);
        }
    }

    const accountDetailSelector = (
        <div className={` ${isMobile ? 'w-[95%]':'w-[20%]' } p-3 m-2 border`}>
            <aside className="bg-zinc-300 flex flex-col justify-center items-center gap-3 py-2">
                <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                    {isProfilePicFetched ? 
                        (<div className="h-24 w-24 rounded-full overflow-hidden bg-red-400">
                            <img className="h-full w-full object-cover rounded-full" accept="image/*" src={profilePicFetch} alt="" />
                        </div>) : 
                        (
                        <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                            {profileFirstLetter}
                        </div>
                        )
                    }
                </div>
                <div className="whitespace-no-wrap w-[150px] text-center overflow-hidden overflow-ellipsis">
                    {profileName}
                </div>
                <div className="text-gray-500 text-[0.8rem]">
                    #BeYoungster
                </div>
            </aside>
            <div className="flex flex-col gap-1">
                <Link to='/myaccount/order'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'order'?'font-bold':''}`}>
                        Order
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/address'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'address'?'font-bold':''}`}>
                        Address
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/profile'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'profile'?'font-bold':''}`}>
                        Profile
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/wishlist'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'wishlist'?'font-bold':''}`}>
                        Wishlist
                    </div>
                </Link>
                <div className="border m-2"></div>
                <Link to='/myaccount/coupons'>
                    <div onClick={isMobile ? ()=>handlerMobileViewToggler() : null } className={`p-2 ${!isMobile && currentLocation === 'coupons'?'font-bold':''}`}>
                        Coupons
                    </div>
                </Link>
                <div className="border m-2"></div>
                <div className="flex py-4 justify-center">
                    <button onClick={()=>handlerLogout()} className="bg-yellow-300 w-[95%] text-center py-2 rounded-lg">
                        LOGOUT
                    </button>
                </div>
            </div>
        </div>
    )

    const accountContent = (
        <div className="w-[80%]">
            {currentLocation === 'order'&&
                <div>
                    Order
                </div>
            }
            {currentLocation === 'address'&&
                <div>
                    Address
                </div>
            }
            {currentLocation === 'profile'&&
                <div className="flex flex-col justify-center items-center">
                    <div className="w-[50%] h-[250px]">
                        <aside className="flex flex-col justify-center items-center gap-3 py-2">
                            {isProfilePicFetched ? 
                                (<div className="h-24 w-24 rounded-full overflow-hidden bg-red-400">
                                    <img className="h-full w-full object-cover rounded-full" accept="image/*" src={profilePicFetch} alt="" />
                                </div>) : 
                                (
                                <div className="font-semibold text-white text-[3rem] bg-black w-[100px] h-[100px] flex justify-center items-center rounded-full">
                                    {profileFirstLetter}
                                </div>
                                )
                            }
                             
    
                            <input type="file" onChange={handleFileChange}  accept="image/*" className="text-[0.8rem]" placeholder="Choose a Photo" />
                            <button onClick={()=>handlerProfilePicUpload()} className="cursor-pointer bg-black text-white px-2 py-1 rounded-lg text-[0.8rem]">Submit</button>
                        </aside>
                    </div>
                    <div className="w-[50%]">
                        <div className="text-[0.8rem]">Full Name</div>
                        <input onChange={(e)=>userNameCheck(e)} className="input-border" type="text" placeholder={profileName === "" ? "Full Name" : profileName}  name="" id="" />
                        {!userNameError && 
                            <p className="text-[0.85rem] my-2 text-red-500">Please Enter Valid Name</p>
                        }
                        <div className="text-[0.8rem]">Email ID</div>
                        <input className="input-border cursor-not-allowed	" type="text" disabled placeholder={mail} name="" id="" />
                        <p className="text-[0.85rem] my-2 text-green-500">Changing Email is prohibited</p>
                        {/* <div className="text-[0.8rem]">Birth Date</div>
                        <input className="input-border" type="date" placeholder="mm/dd/yyyy" name="" id="" /> */}
                        <div className="text-[0.8rem]">Phone Number</div>
                        <input onChange={(e)=>handlerMobileNumber(e)} className="input-border" type="number" placeholder={mobileNumber === "" ? "Phone Number" : mobileNumber}  maxLength="10" name="" id="" />
                        {!phoneError && 
                            <p className="text-[0.85rem] my-2 text-red-500">Please Enter Valid Phone Number</p>
                        }
                        {booleanCondition &&
                            <button onClick={()=>handlerProfileNameMobUpdate()} className="w-full text-center bg-yellow-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
                        }
                        {!booleanCondition &&
                            <button className="w-full text-center bg-gray-300 my-4 py-2 rounded-lg uppercase">Save Changes</button>
                        }

                    </div>
                </div>
            }
            {currentLocation === 'wishlist'&&
                <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
                    {wishListUi}
                </div>
            }
            {currentLocation === 'coupons'&&
                <div>
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-[40%]" src={noCoupon} alt="" />
                        <p className="top-[60%] text-[1.5rem] font-mono uppercase">No Coupons Found</p>
                    </div>

                </div>
            }
        </div>
    )




    return (
        <>
        {!isMobile ? (
            <>
            <div className="flex">
                <>{accountDetailSelector}</>        
                <>{accountContent}</>
            </div>
            </>
        ) : (
            <>
                {!mobileViewToggler && 
                    <>{accountDetailSelector}</> 
                }
                {mobileViewToggler && 
                    <>
                        <Link to='/myaccount/profile'>
                            <button onClick={()=>setMobileViewToggler(false)}>
                                <div className="flex gap-2 bg-gray-300 m-1 px-2 py-1 rounded-lg cursor-pointer items-center">
                                    <GrPrevious />
                                    <p>Back</p>
                                </div>
                            </button>
                        </Link>
                        
                        <>{accountContent}</>
                    </>
                }

            </>
        )}
        <Stack  sx={{ width: "100%" }}>
            <button
            className="text-black">
                Add to Wishlist
            </button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Updated Successfully!
                </Alert>
            </Snackbar>
        </Stack>
        </>
    )
}

export default MyAccount;