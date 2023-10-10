import React, { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io";


import { useScreenSize } from "../CommonFunctions/CommonFunctions";

import sample1 from "../../assets/Clothing/sample-image.jpg";
import sample2 from "../../assets/Clothing/sample-image2.jpg";

import "./ClothingPage.css";

const ClothingPage = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const [addingFavProduct, setAddingFavProduct] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [price, setPrice] = useState("low");

  const handlerFavAdding = () => {
    setAddingFavProduct(!addingFavProduct);
  };
  const handleHoverIn = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const defaultImage = sample1;
  const hoverImage = sample2;

  const imageToShow = isHovered ? hoverImage : defaultImage;

  const contentBody = (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-4 p-4">
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>
          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
        <div className="relative max-w-[200px] flex flex-col justify-center items-center">
          <div onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
            <img className="max-w-[200px] rounded-md" src={imageToShow} alt="" />
          </div>

          <div>
            <p className="text-[0.9rem] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Descriptionadasdasdasdasdassdsda
            </p>
            <p className="text-[0.85rem] text-[gray] whitespace-nowrap max-w-[200px] text-ellipsis overflow-hidden">
              Titleasdasdasdsadsdasdsdasdasdasdasdasdasdasdsadasdasa
            </p>
            <p className="flex flex-row justify-center items-center">
              <span className="px-1.5 font-bold text-[0.9rem]">₹1099</span>
              <span className="px-1 line-through text-[gray] font-bold text-[0.9rem] ">
                ₹2198
              </span>
              <span className="px-1 font-bold text-[0.8rem] text-green-500">
                (50% Off)
              </span>
            </p>
          </div>
          <div
            className="absolute top-[5px] right-[5px] border rounded-full bg-white p-1 text-[1.3rem] "
            onClick={() => handlerFavAdding()}
          >
            {addingFavProduct ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-500" />
            )}
          </div>
        </div>
      </div>
    </>
  );

  const contentFilter = (
    <>
      <div className="max-w-[250px] sticky top-4">
        <h2 className="px-[20px] border-b border-dotted">FILTER</h2>
        <Accordion.Root
          className="AccordionRoot w-[250px]"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>COLOR</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap">
                <div className="bg-black rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-green-500 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-amber-700 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-blue-500 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-white border-2 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-blue-800 border-2 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-red-500 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-yellow-500 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-purple-600 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-pink-600 rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-gray-500	rounded-full w-[25px] h-[25px] m-1"></div>
                <div className="bg-orange-500 rounded-full w-[25px] h-[25px] m-1"></div>
              </div>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>SIZE</AccordionTrigger>
            <AccordionContent>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>DESIGN</AccordionTrigger>
            <AccordionContent>
              <div>Checks Shirts</div>
              <div>Plain Shirts</div>
              <div>Printed Shirts</div>
              <div>Corduroy Shirts</div>
              <div>Sulphur Twill Shirts</div>
              <div>Dark Blue</div>
              <div>Black</div>
              <div>Grey</div>
              <div>Light Blue</div>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-4">
            <AccordionTrigger>PRICE</AccordionTrigger>
            <AccordionContent>
              <div>
                <input
                  type="checkbox"
                  id="low"
                  onChange={() => setPrice(price === "low" ? "" : "low")}
                  checked={price === "low"}
                  name="low"
                />
                <label htmlFor="low" className="text-[1rem] px-3">
                  Price: Low to High
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="high"
                  onChange={() => setPrice(price === "high" ? "" : "high")}
                  checked={price === "high"}
                  name="high"
                />
                <label htmlFor="high" className="text-[1rem] px-3">
                  Price: High to Low
                </label>
              </div>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </>
  );

  return (
    <>
      <div className="flex">
        {!isMobile && 
        <div className="sticky">
            {contentFilter }
        </div>}

        <>{contentBody}</>
        <>
            <div className="fixed flex flex-row bottom-0 w-full justify-around bg-white py-2">
                <div>
                    <IoOptionsOutline /> FILTER
                </div>
                <div className="border-1">
                    
                </div>
                <div>
                    SORT BY
                </div>
            </div>
        </>
      </div>
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={classNames("AccordionHeader", className)}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger text-[0.85rem]", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
export default ClothingPage;
