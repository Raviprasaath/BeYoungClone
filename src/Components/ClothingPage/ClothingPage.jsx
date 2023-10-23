import React, { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoIosOptions } from "react-icons/io";
import { BiSortAlt2 } from "react-icons/bi";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import ClothingFilter from "./ClothingFilter";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";


import "./ClothingPage.css";
import { Link, useLocation } from "react-router-dom";


let mySet1 = new Set();
let arr = [];


const ClothingPage = ({ handlerOpenFilter, handlerFilterData }) => {
  const location = useLocation();
  const [dataRender, setDataRender] = useState();

  const [activateHeartId, setActivateHeartId] = useState([]);

  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  console.log("dataRender", dataRender);

  useEffect(() => {
    const dataFromHP3 = location?.state?.data;
    setDataRender(dataFromHP3);
  }, [location.pathname]);

  useEffect(()=> {
    const localStore = JSON.parse(localStorage.getItem("favDress")) || [];
    if (localStore.length !== 0) {
      arr.push(localStore);
    }
    setActivateHeartId( ()=>arr[0] );
  }, [])

  const handlerFavAdding = (event, idVal) => {
    event.preventDefault();
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
  
  const contentBody = (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
        {!dataRender ? (
          "Loading"
        ) : dataRender.length === 0 ? (
          <p>No Data Found</p>
        ) : (
          dataRender.map((item) => (          
            <Link 
              key={item._id}
              to={`${location.pathname}/${item._id}`}                    
              state={{similarProducts : dataRender}}              
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
                  onClick={(event) => handlerFavAdding(event, item._id)}
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
        )
        }
      </div>
    </>
  );

  return (
    <>
      <div className="flex relative">
        {!isMobile && (
          <div className="sticky">
            <>
              <div className="flex">
                <div>{<ClothingFilter clothingData={dataRender}/>}</div>
                <div className="z-1">{contentBody}</div>
              </div>
            </>
          </div>
        )}

        {isMobile && <div className="z-1">{contentBody}</div>}


        {isMobile && (
          <>
            <div className="fixed flex flex-row bottom-0 w-full justify-around bg-white py-2">
              <div
                onClick={() => {
                  handlerOpenFilter(true);
                  handlerFilterData(dataRender);
                }}
                className="flex justify-center items-center gap-2 w-1/2 cursor-pointer"
              >
                <IoIosOptions />
                <p>FILTER</p>
              </div>
              <div className="border-1"></div>
              <div className="flex justify-center items-center gap-2 w-1/2 cursor-pointer">
                <BiSortAlt2 />

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <p>SORT BY</p>
                  </Dialog.Trigger>
                  <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay" />
                    <Dialog.Content className="DialogContent">
                      <Dialog.Description className="DialogDescription">
                        <div className="text-center">
                          <p className="font-bold">SORT BY </p>
                          <p className="cursor-pointer">PRICE LOW TO HIGH</p>
                          <p className="cursor-pointer">PRICE HIGH TO LOW</p>
                        </div>
                      </Dialog.Description>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};


export default ClothingPage
