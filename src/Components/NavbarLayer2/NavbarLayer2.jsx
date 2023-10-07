import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import React from "react";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";

import "./NavbarLayer2.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import navbarImage1 from "../../assets/navbar-1.jpg";
const NavbarLayer2 = ( {handlerNavbarToggle} ) => {
const screenSize = useScreenSize();

  return (
    <>
      {screenSize && (
        <>
          <div className="flex justify-center bg-white">
            <div className=" relative flex justify-between w-[960px] xl:w-[1200px] ">
              <div>
                <NavigationMenu.Root className="relative flex z-1 py-2.5">
                  <div className="font-sans cursor-pointer font-black tracking-widest text-[1.5rem]">
                    BEYOUNG
                  </div>
                  <NavigationMenu.List className="flex justify-center w-full bg-white p-[4px] m-0 ">
                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        MEN
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[140px] bg-white flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>Printed T-Shirts</div>
                            <div>Oversize T-Shirts</div>
                            <div>Plain T-Shirts</div>
                            <div>Full Sleeve T-Shirts</div>
                            <div>Shirts</div>
                            <div>Polo T-Shirts</div>
                            <div>Athleisure T-Shirts</div>
                            <div>Half Sleeve T-Shirts</div>
                            <div>Plus Size T-Shirts</div>
                            <div>Combos</div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold text-[1.1rem]">
                              Bottom Wear
                            </div>
                            <div>Joggers</div>
                            <div>Chino Pants</div>
                            <div>Boxers</div>
                            <div>Shorts</div>
                            <div>Cargo Pants</div>
                            <div>Jeans</div>
                            <div>Couple Boxers</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">Theme</div>
                            <div>Travel</div>
                            <div>Gym</div>
                            <div>Cartoon</div>
                            <div>Sports</div>
                            <div>Music</div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Shirts</div>
                            <div>Plain Shirts</div>
                            <div>Urban Shirts</div>
                            <div>Casual Shirts</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Special
                            </div>
                            <div>Couple T-Shirts</div>
                            <div>Bestseller T Shirts</div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Winter Wears</div>
                            <div>Jackets</div>
                            <div>Sweatshirts</div>
                            <div>Hoodies</div>
                          </div>
                          <div>
                            <img
                              src={navbarImage1}
                              className="w-[250px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        WOMEN
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[195px] bg-white flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>Printed T-Shirts</div>
                            <div>Oversize T-Shirts</div>
                            <div>Kurti</div>
                            <div>Women Shirts</div>
                            <div>Half Sleeve T-Shirts</div>
                            <div>Plain T-Shirts</div>
                            <div>Full Sleeve T-Shirts</div>
                            <div>Kurta Sets</div>
                            <div>Crop Tops</div>
                            <div>Plus Size T-Shirts</div>
                            <div>Combos</div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold text-[1.1rem]">
                              Bottom Wear
                            </div>
                            <div>Boxer for Women</div>
                            <div>Jeggings</div>
                            <div>Women Pants</div>
                            <div>Couple Boxers</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">Theme</div>
                            <div>Travel</div>
                            <div>Gym</div>
                            <div>Cartoon</div>
                            <div>Sports</div>
                            <div>Music</div>
                            <div>Biker</div>
                            <div>Funky</div>
                            <div>God</div>
                            <div>Quotes</div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Special
                            </div>
                            <div>Couple T-Shirts</div>
                            <div>Bestseller T Shirts</div>
                            <div>Deals and Offers</div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Winter Wears</div>
                            <div>Jackets</div>
                            <div>Sweatshirts</div>
                            <div>Hoodies</div>
                          </div>
                          <div>
                            <img
                              src={navbarImage1}
                              className="w-[250px]"
                              alt=""
                            />
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        COMBOS
                      </NavigationMenu.Trigger>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        JOGGERS
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 left-0 bg-white flex flex-row w-[200px] h-[100px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-2">
                            <div>Cargo Joggers</div>
                            <div>Knitted Joggers</div>
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        SHOP THE LOOK
                      </NavigationMenu.Trigger>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        SHOP BY COLLECTION
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 left-0 bg-white flex flex-row w-[200px] h-[250px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-2">
                            <div>Travel</div>
                            <div>Urban Shirts</div>
                            <div>T-Shirts</div>
                            <div>Hawaiian Shirts</div>
                            <div>Savage Denim</div>
                            <div>Beyoung Originals</div>
                          </div>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </div>
              <div className="flex absolute right-0 top-[20px] gap-4 text-[1.3rem]">
                <AiOutlineSearch />
                <AiFillHeart />
                <BsFillCartFill />
              </div>
            </div>
          </div>
        </>
      )}
      {!screenSize && (
        <div className="flex bg-white items-center w-full ">
          <div className="flex justify-between items-center gap-2.5 w-full px-2.5 py-2">
            <div className="flex items-center gap-2.5">
              <GiHamburgerMenu onClick={()=>handlerNavbarToggle(true)} className="hover:opacity-50" />
              <div className="font-extrabold tracking-widest">BEYOUNG</div>
            </div>

            <div className="flex items-center gap-2.5 text-[1.2rem]">
              <AiOutlineSearch />
              <AiFillHeart />
              <BsFillCartFill />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarLayer2;
