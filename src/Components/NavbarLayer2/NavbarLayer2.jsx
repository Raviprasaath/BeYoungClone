import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { useScreenSize } from "../CommonFunctions/CommonFunctions";
import React, { useEffect, useState } from "react";

import "./NavbarLayer2.css";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import navbarImage1 from "../../assets/navbar-1.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDataContext } from "../Fetching/DataContext";

const NavbarLayer2 = ({ handlerNavbarToggle }) => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const { data, loading } = useDataContext();


  //#region ------------------------Men-----------------

  const [travelData, setTravelData] = useState([]);
  const [plainTShirt, setPlainTShirt] = useState([]);
  const [poloTShirt, setPoloTShirt] = useState([]);
  const [printedTShirt, setPrintedTShirt] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [pyjamas, setPyjamas] = useState([]);
  const [overSizedTShirt, setOverSizedTShirt] = useState([]);
  const [fullSleeveTShirt, setFullSleeveTShirt] = useState([]);
  const [activeWear, setActiveWear] = useState([]);
  const [plusSizeTShirt, setPlusSizeTShirt] = useState([]);
  const [joggers, setJoggers] = useState([]);
  const [jeans, setJeans] = useState([]);
  const [chinos, setChinos] = useState([]);
  const [boxer, setBoxer] = useState([]);
  const [urban, setUrban] = useState([]);
  const [casual, setCasual] = useState([]);
  const [cargoJogger, setCargoJogger] = useState([]);
  const [knitted, setKnitted] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [athleisure, setAthleisure] = useState([]);
  const [halfSleeve, setHalfSleeve] = useState([]);
  const [combo, setCombo] = useState([]);
  const [chino, setChino] = useState([]);
  const [gym, setGym] = useState([]);
  const [cartoon, setCartoon] = useState([]);
  const [sports, setSports] = useState([]);
  const [music, setMusic] = useState([]);
  const [jackets, setJackets] = useState([]);
  const [sweatShirts, setSweatShirts] = useState([]);
  const [hoodies, setHoodies] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);

  function fetchDataAndFilter(
    title, searchTerm, filterFunction, setDataFunction) {
    const filteredData = data.data.filter((item) => {
      return item[title].includes(searchTerm) && filterFunction(item);
    });
    setDataFunction(filteredData);
  }

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const filters = [
          ["description", "shirts", (item) => item.gender === "Men" && item.subCategory === "shirt", setShirts],
          ["description", "printed", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPrintedTShirt],
          ["description", "plain", (item) => item.gender === "Men" && item.subCategory === "tshirt", setPlainTShirt],
          ["description", "polo", (item) => item.subCategory === "tshirt", setPoloTShirt],
          ["name", "full", (item) => item.gender === "Men", setFullSleeveTShirt],
          ["description", "active%20wear", (item) => item.gender === "Men", setActiveWear],
          ["name", "plus%20size%20t-shirt", (item) => item.gender === "Men", setPlusSizeTShirt],
          ["subCategory", "jogger", (item) => item.gender === "Men", setJoggers],
          ["subCategory", "pyjamas", (item) => item.gender === "Men", setPyjamas],
          ["description", "jeans", (item) => item.gender === "Men", setJeans],
          ["description", "chinos", (item) => item.gender === "Men", setChinos],
          ["description", "boxer", (item) => item.gender === "Men", setBoxer],
          ["description", "oversized", (item) => item.gender === "Men" && item.subCategory === "tshirt", setOverSizedTShirt],
          ["description", "travel", (item) => item.gender === "Men", setTravelData],
          ["description", "urban", (item) => item.gender === "Men" && item.subCategory === "shirt", setUrban],
          ["description", "casual", (item) => item.gender === "Men" && item.subCategory === "shirt", setCasual],
          ["description", "cargo%20jogger", (item) => item.gender === "Men", setCargoJogger],
          ["description", "knitted", (item) => item.gender === "Men", setKnitted],
          ["name", "shorts", (item) => item.gender === "Men", setShorts],
          ["description", "Athleisure", (item) => item.gender === "Men", setAthleisure],
          ["description", "half%20sleeve", (item) => item.gender === "Men", setHalfSleeve],
          ["description", "combo", (item) => item.gender === "Men", setCombo],
          ["description", "chino", (item) => item.gender === "Men", setChino],
          ["description", "gym", (item) => item.gender === "Men", setGym],
          ["description", "cartoon", (item) => item.gender === "Men", setCartoon],
          ["description", "sports", (item) => item.gender === "Men", setSports],
          ["description", "music", (item) => item.gender === "Men", setMusic],
          ["description", "Jackets", (item) => item.gender === "Men", setJackets],
          ["description", "sweat", (item) => item.gender === "Men", setSweatShirts],
          ["description", "hoodies", (item) => item.gender === "Men", setHoodies],
          ["gender", "Men", (item) => item.gender === "Men", setMen],
          ["gender", "Women", (item) => item.gender === "Women", setWomen],
        ];
  
        filters.forEach(([title, searchTerm, filterFunction, setDataFunction]) => fetchDataAndFilter(title, searchTerm, filterFunction, setDataFunction));
      }, 0);
    }
  }, [data]);
  

  //#region ---------------------------------
  const [printedTShirtWomen, setPrintedTShirtWomen] = useState([]);
  const [overSizedTShirtWomen, setOverSizedTShirtWomen] = useState([]);
  const [kurtiWomen, setKurtiWomen] = useState([]);
  const [shirtsWomen, setShirtsWomen] = useState([]);
  const [halfSleeveWomen, setHalfSleeveWomen] = useState([]);
  const [plainTShirtWomen, setPlainTShirtWomen] = useState([]);
  const [fullSleeveTShirtWomen, setFullSleeveTShirtWomen] = useState([]);
  const [kurtaWomen, setKurtaWomen] = useState([]);
  const [cropTopsWomen, setCropTopsWomen] = useState([]);
  const [plusSizeTShirtsWomen, setPlusSizeTShirtWomen] = useState([]);
  const [comboWomen, setComboWomen] = useState([]);
  const [boxerWomen, setBoxerWomen] = useState([]);
  const [jeggingsWomen, setJeggingsWomen] = useState([]);
  const [pantsWomen, setPantsWomen] = useState([]);
  const [copleBoxerWomen, setCoupleBoxerWomen] = useState([]);
  const [travelWomen, setTravelWomen] = useState([]);
  const [gymWomen, setGymWomen] = useState([]);
  const [cartoonWomen, setCartoonWomen] = useState([]);
  const [sportsWomen, setSportsWomen] = useState([]);
  const [musicWomen, setMusicWomen] = useState([]);
  const [bikerWomen, setBikerWomen] = useState([]);
  const [funkyWomen, setFunkyWomen] = useState([]);
  const [godWomen, setGodWomen] = useState([]);
  const [quotesWomen, setQuotesWomen] = useState([]);

  const [coupleTShirtsWomen, setCoupleTShirtsWomen] = useState([]);
  const [bestSellerWomen, setBestSellerWomen] = useState([]);
  const [dealsWomen, setDealsWomen] = useState([]);

  const [jacketsWomen, setJacketsWomen] = useState([]);
  const [sweatShirtsWomen, setSweatShirtsWomen] = useState([]);
  const [hoodiesWomen, setHoodiesWomen] = useState([]);
  const [topsWomen, setTopsWomen] = useState([]);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        const filters = [
          ["description", "oversized", (item) => item.gender === "Women" && item.subCategory === "tshirt", setOverSizedTShirtWomen],
          ["subCategory", "kurti", (item) => item.gender === "Women", setKurtiWomen],
          ["subCategory", "kurta", (item) => item.gender === "Women", setKurtaWomen],
          ["subCategory", "crop%20top", (item) => item.gender === "Women", setCropTopsWomen],
          ["name", "printed", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPrintedTShirtWomen],
          ["description", "plain", (item) => item.gender === "Women" && item.subCategory === "tshirt", setPlainTShirtWomen],
          ["name", "full", (item) => item.gender === "Women", setFullSleeveTShirtWomen],
          ["description", "boxer", (item) => item.gender === "Women", setBoxerWomen],
          ["description", "shirts", (item) => item.gender === "Women" && item.subCategory === "shirt", setShirtsWomen],
          ["description", "tops", (item) => item.gender === "Women" && item.subCategory === "shirt", setTopsWomen],
          ["name", "plus%20size%20t-shirt", (item) => item.gender === "Men", setPlusSizeTShirtWomen],
          ["description", "half%20sleeve", (item) => item.gender === "Women", setHalfSleeveWomen],
          ["description", "combo", (item) => item.gender === "Women", setComboWomen],
          ["description", "gym", (item) => item.gender === "Women", setGymWomen],
          ["description", "cartoon", (item) => item.gender === "Women", setCartoonWomen],
          ["description", "sports", (item) => item.gender === "Women", setSportsWomen],
          ["description", "music", (item) => item.gender === "Women", setMusicWomen],
          ["description", "Jackets", (item) => item.gender === "Women", setJacketsWomen],
          ["description", "sweat", (item) => item.gender === "Women", setSweatShirtsWomen],
          ["description", "hoodies", (item) => item.gender === "Women", setHoodiesWomen],
          ["description", "travel", (item) => item.gender === "Women", setTravelWomen],
        ];
  
        filters.forEach(([title, searchTerm, filterFunction, setDataFunction]) => fetchDataAndFilter(title, searchTerm, filterFunction, setDataFunction));
      }, 0);
    }
  }, [data]);
  


  //#endregion ------------------------------------

  return (
    <>
      {!isMobile && (
        <>
          <div className="flex justify-center bg-white ">
            <div className=" relative flex justify-between w-[960px] xl:w-[1200px] ">
              <div>
                <NavigationMenu.Root className="relative flex z-1 py-2.5">
                  <div className="font-sans cursor-pointer font-black tracking-widest text-[1.5rem]">
                    <Link to="/">BEYOUNG</Link>
                  </div>
                  <NavigationMenu.List className="flex justify-center w-full bg-white p-[4px] m-0 ">
                    <NavigationMenu.Item className="hover:bg-yellow-300">
                      <NavigationMenu.Trigger className="hover:bg-yellow-300 MenubarTrigger cursor-pointer text-[0.85rem] font-bold">
                        <Link to="/clothing/men" state={{ data: men }}>
                          MEN
                        </Link>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[140px] bg-white shadow-2xl flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>
                              <Link
                                to="/clothing/printed-t-shirt"
                                state={{ data: printedTShirt }}
                              >
                                Printed T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/oversized-t-shirt"
                                state={{ data: overSizedTShirt }}
                              >
                                Oversize T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/plain-t-shirt"
                                state={{ data: plainTShirt }}
                              >
                                Plain T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/full-sleeve-t-shirt"
                                state={{ data: fullSleeveTShirt }}
                              >
                                Full Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/shirts"
                                state={{ data: shirts }}
                              >
                                Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/polo-t-shirt"
                                state={{ data: poloTShirt }}
                              >
                                Polo T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/athleisure"
                                state={{ data: athleisure }}
                              >
                                Athleisure T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/halfSleeve"
                                state={{ data: halfSleeve }}
                              >
                                Half Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/plus-size-t-shirt"
                                state={{ data: plusSizeTShirt }}
                              >
                                Plus Size T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/combo" state={{ data: combo }}>
                                Combos
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold text-[1.1rem]">
                              Bottom Wear
                            </div>
                            <div>
                              <Link
                                to="clothing/cargo-jogger"
                                state={{ data: cargoJogger }}
                              >
                                Joggers
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/chino" state={{ data: chino }}>
                                Chino Pants
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/boxer" state={{ data: boxer }}>
                                Boxers
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/shorts"
                                state={{ data: shorts }}
                              >
                                Shorts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/cargo-jogger"
                                state={{ data: cargoJogger }}
                              >
                                Cargo Pants
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/jeans" state={{ data: jeans }}>
                                Jeans
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/boxer" state={{ data: boxer }}>
                                Couple Boxers
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">Theme</div>
                            <div>
                              <Link
                                to="clothing/travel"
                                state={{ data: travelData }}
                              >
                                Travel
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/gym" state={{ data: gym }}>
                                Gym
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/cartoon"
                                state={{ data: cartoon }}
                              >
                                Cartoon
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/sports"
                                state={{ data: sports }}
                              >
                                Sports
                              </Link>
                            </div>
                            <div>
                              <Link to="clothing/music" state={{ data: music }}>
                                Music
                              </Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Shirts</div>
                            <div>
                              <Link
                                to="clothing/plain-t-shirt"
                                state={{ data: plainTShirt }}
                              >
                                Plain Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/urban-shirt"
                                state={{ data: urban }}
                              >
                                Urban Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/casual"
                                state={{ data: casual }}
                              >
                                Casual Shirts
                              </Link>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Special
                            </div>
                            <div>
                              <Link to="/coming-soon">Couple T-Shirts</Link>
                            </div>
                            <div>
                              <Link to="/coming-soon">Bestseller T Shirts</Link>
                            </div>
                            <div className="MenubarSeparator"></div>
                            <div className="font-bold">Winter Wears</div>
                            <div>
                              <Link
                                to="/clothing/jackets"
                                state={{ data: jackets }}
                              >
                                Jackets
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/sweat-shirt"
                                state={{ data: sweatShirts }}
                              >
                                Sweatshirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/hoodies"
                                state={{ data: hoodies }}
                              >
                                Hoodies
                              </Link>
                            </div>
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
                        <Link to="/clothing/women" state={{ data: women }}>
                          WOMEN
                        </Link>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="relative">
                        <div className="absolute top-0 -left-[195px] bg-white flex flex-row w-[960px] xl:w-[1200px] h-[580px] justify-between font-sans px-5 py-5">
                          <div className="flex flex-col gap-1">
                            <div className="font-bold text-[1.1rem]">
                              Top Wear
                            </div>
                            <div>
                              <Link
                                to="/clothing/printed-t-shirt-women"
                                state={{ data: printedTShirtWomen }}
                              >
                                Printed T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/oversized-t-shirt-women"
                                state={{ data: overSizedTShirtWomen }}
                              >
                                Oversize T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/kurti-women"
                                state={{ data: kurtiWomen }}
                              >
                                Kurti
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/shirt-women"
                                state={{ data: shirtsWomen }}
                              >
                                Women Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/half-sleeve-t-shirt-women"
                                state={{ data: halfSleeveWomen }}
                              >
                              Half Sleeve T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="/clothing/plain-t-shirt-women"
                                state={{ data: plainTShirtWomen }}
                              >
                                Plain T-Shirts
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="clothing/full-sleeve-t-shirt-women"
                                state={{ data: fullSleeveTShirtWomen }}
                              >
                                Full Sleeve T-Shirts
                              </Link>                            
                            </div>
                            <div>
                              <Link
                                to="clothing/kurta-women"
                                state={{ data: kurtaWomen }}
                              >
                                Kurta Sets
                              </Link>
                            
                            </div>
                            <div>
                              <Link
                                to="clothing/crop-tops-women"
                                state={{ data: cropTopsWomen }}
                              >
                                Crop Tops
                              </Link>
                            
                            </div>
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
      {isMobile && (
        <div className="flex bg-white items-center w-full ">
          <div className="flex justify-between items-center gap-2.5 w-full px-2.5 py-2">
            <div className="flex items-center gap-2.5">
              <GiHamburgerMenu
                onClick={() => handlerNavbarToggle(true)}
                className="hover:opacity-50"
              />
              <div className="font-extrabold tracking-widest">
                <Link to="/">BEYOUNG</Link>
              </div>
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
