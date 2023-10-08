import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import "./NavbarLayer3.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import psImage1 from "../../assets/play-store-1.png"
import psImage2 from "../../assets/play-store-2.png"

const NavbarLayer3 = (props) => {
  const { toggleState, handlerNavbarToggle } = props;
  const [sideNavbarToggle, setSideNavbarToggle] = useState(0);
  const [bottomBorder, setBottomBorder] = useState(1);

  useEffect(() => {
    if (toggleState) {
      setSideNavbarToggle("0");
    } else {
      setSideNavbarToggle("-100vw");
    }
  }, [toggleState]);


  const handlerBorderBottom = (e) => {
    if (e.target.textContent === "Men") {
      setBottomBorder(1);
    } else {
      setBottomBorder(0);
    }
  };

  return (
    <>
      <div
          className={`fixed flex top-0 w-full ${toggleState ? 'translate-x-0' : '-translate-x-full'} h-full`} >
        <div className="bg-white w-[75vw] h-[100vh] duration-1000">
          <div className="w-full bg-yellow-300 p-2.5 font-black text-center text-3xl">
            BEYOUNG
          </div>
          <Tabs.Root className="TabsRoot" defaultValue="tab1">
            <Tabs.List className="TabsList" aria-label="Manage your account">
              <Tabs.Trigger
                onClick={handlerBorderBottom}
                className={`TabsTrigger ${bottomBorder === 1 ? "active" : ""} `}
                value="tab1"
              >
                Men
              </Tabs.Trigger>
              <Tabs.Trigger
                onClick={handlerBorderBottom}
                className={`TabsTrigger ${bottomBorder === 0 ? "active" : ""} `}
                value="tab2"
              >
                Women
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="TabsContent" value="tab1">
              <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                
                <Accordion.Item className="AccordionItem" value="item-1">
                  <AccordionTrigger>NEW ARRIVALS</AccordionTrigger>
                  <AccordionContent>Urban Shirts</AccordionContent>
                  <AccordionContent>Oversize T-Shirts</AccordionContent>
                  <AccordionContent>Beyoung Originals</AccordionContent>
                  <AccordionContent>Knitted Joggers</AccordionContent>
                  <AccordionContent>View All</AccordionContent>
                </Accordion.Item>
                
                
                <Accordion.Item className="AccordionItem" value="item-2">
                  <AccordionTrigger>TOPWEAR</AccordionTrigger>
                  <AccordionContent>
                    
                    <Accordion.Root type="single" defaultValue="item-3" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-3">
                        <AccordionTrigger>T-Shirts</AccordionTrigger>
                        <AccordionContent>Plain T-Shirts</AccordionContent>
                        <AccordionContent>Printed T-Shirts</AccordionContent>
                        <AccordionContent>Oversize T-Shirts</AccordionContent>
                        <AccordionContent>Polo T-Shirts</AccordionContent>
                        <AccordionContent>Full Sleeve T-Shirts</AccordionContent>
                        <AccordionContent>Athleisure T-Shirts</AccordionContent>
                        <AccordionContent>Plus Size T-Shirts</AccordionContent>
                        <AccordionContent>View All</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                    <Accordion.Root type="single" defaultValue="item-4" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-4">
                        <AccordionTrigger>Shirts</AccordionTrigger>
                        <AccordionContent>Plain Shirts</AccordionContent>
                        <AccordionContent>Urban Shirts</AccordionContent>
                        <AccordionContent>Casual Shirts</AccordionContent>
                        <AccordionContent>View All</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                    <AccordionContent>Polos</AccordionContent>

                    <Accordion.Root type="single" defaultValue="item-5" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-5">
                        <AccordionTrigger>Winter Wears</AccordionTrigger>
                        <AccordionContent>Jackets</AccordionContent>
                        <AccordionContent>Sweatshirts</AccordionContent>
                        <AccordionContent>Hoodies</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                  </AccordionContent>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-3">
                <AccordionTrigger>BOTTOMWEAR</AccordionTrigger>
                  <AccordionContent>Chino</AccordionContent>
                  <AccordionContent>Boxer</AccordionContent>
                  <AccordionContent>Pyjama</AccordionContent>
                  <AccordionContent>Shorts</AccordionContent>
                  <AccordionContent>Cargo Pants</AccordionContent>
                  <AccordionContent>Jeans</AccordionContent>              
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" value="item-4">
                <AccordionTrigger>BEYOUNG ORIGINALS</AccordionTrigger>
                  <AccordionContent>Combos</AccordionContent>
                  <AccordionContent>Travel</AccordionContent>
                  <AccordionContent>Couple T-Shirts</AccordionContent>
                  <AccordionContent>Customization</AccordionContent>
                  <AccordionContent>Plus Size Store</AccordionContent>
                </Accordion.Item>
                
                <div className="px-[20px] py-[8px] text-[15px]">
                  SHOP BY LOOK
                </div>

                <Accordion.Item className="AccordionItem" value="item-5">
                <AccordionTrigger>SHOP BY THEME</AccordionTrigger>
                  <AccordionContent>Gym</AccordionContent>
                  <AccordionContent>Travel</AccordionContent>
                  <AccordionContent>Sports</AccordionContent>
                  <AccordionContent>Music</AccordionContent>
                  <AccordionContent>Biker</AccordionContent>
                  <AccordionContent>Funky</AccordionContent>
                  <AccordionContent>God</AccordionContent>
                  <AccordionContent>Quotes</AccordionContent>
                </Accordion.Item>

                <div className="px-[20px] py-[8px] text-[15px]">
                  OFFERS & DEALS SALE
                </div>

                <Accordion.Item className="AccordionItem" value="item-6">
                <AccordionTrigger>MORE</AccordionTrigger>
                  <AccordionContent>TRACK ORDER</AccordionContent>
                  <AccordionContent>CONTACT US</AccordionContent>
                  <AccordionContent>SHIPPING POLICY</AccordionContent>
                  <AccordionContent>ABOUT US</AccordionContent>
                  <AccordionContent>BEYOUNG BLOG</AccordionContent>
                  <AccordionContent>RETURN POLICY</AccordionContent>
                </Accordion.Item>

                <div className="flex flex-col justify-center items-center">
                  <div>
                    DOWNLOAD THE APP
                  </div>
                  <div className="flex flex-row gap-2.5">
                    <img className="w-[180px]" src={psImage1} alt="" />
                    <img className="w-[180px]" src={psImage2} alt="" />
                  </div>
                </div>

              </Accordion.Root>





            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="tab2">
            <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                

                <Accordion.Item className="AccordionItem" value="item-2">
                  <AccordionTrigger>SHOP</AccordionTrigger>
                  <AccordionContent>
                    
                    <Accordion.Root type="single" defaultValue="item-3" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-3">
                        <AccordionTrigger>T-Shirts</AccordionTrigger>
                        <AccordionContent>Plain T-Shirts</AccordionContent>
                        <AccordionContent>Printed T-Shirts</AccordionContent>
                        <AccordionContent>Oversize T-Shirts</AccordionContent>
                        <AccordionContent>Polo T-Shirts</AccordionContent>
                        <AccordionContent>Full Sleeve T-Shirts</AccordionContent>
                        <AccordionContent>Athleisure T-Shirts</AccordionContent>
                        <AccordionContent>Plus Size T-Shirts</AccordionContent>
                        <AccordionContent>View All</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                    <Accordion.Root type="single" defaultValue="item-4" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-4">
                        <AccordionTrigger>Shirts</AccordionTrigger>
                        <AccordionContent>Plain Shirts</AccordionContent>
                        <AccordionContent>Urban Shirts</AccordionContent>
                        <AccordionContent>Casual Shirts</AccordionContent>
                        <AccordionContent>View All</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                    <AccordionContent>Polos</AccordionContent>

                    <Accordion.Root type="single" defaultValue="item-5" collapsible>
                      <Accordion.Item className="AccordionItem" value="item-5">
                        <AccordionTrigger>Winter Wears</AccordionTrigger>
                        <AccordionContent>Jackets</AccordionContent>
                        <AccordionContent>Sweatshirts</AccordionContent>
                        <AccordionContent>Hoodies</AccordionContent>
                      </Accordion.Item>
                    </Accordion.Root>

                  </AccordionContent>
                </Accordion.Item>


                <Accordion.Item className="AccordionItem" value="item-4">
                <AccordionTrigger>BEYOUNG ORIGINALS</AccordionTrigger>
                  <AccordionContent>Combos</AccordionContent>
                  <AccordionContent>Travel</AccordionContent>
                  <AccordionContent>Couple T-Shirts</AccordionContent>
                  <AccordionContent>Customization</AccordionContent>
                  <AccordionContent>Plus Size Store</AccordionContent>
                </Accordion.Item>
                
                <div className="px-[20px] py-[8px] text-[15px]">
                  SHOP BY LOOK
                </div>

                <Accordion.Item className="AccordionItem" value="item-5">
                <AccordionTrigger>SHOP BY THEME</AccordionTrigger>
                  <AccordionContent>Gym</AccordionContent>
                  <AccordionContent>Travel</AccordionContent>
                  <AccordionContent>Sports</AccordionContent>
                  <AccordionContent>Music</AccordionContent>
                  <AccordionContent>Biker</AccordionContent>
                  <AccordionContent>Funky</AccordionContent>
                  <AccordionContent>God</AccordionContent>
                  <AccordionContent>Quotes</AccordionContent>
                </Accordion.Item>

                <div className="px-[20px] py-[8px] text-[15px]">
                  OFFERS & DEALS SALE
                </div>

                <Accordion.Item className="AccordionItem" value="item-6">
                <AccordionTrigger>MORE</AccordionTrigger>
                  <AccordionContent>TRACK ORDER</AccordionContent>
                  <AccordionContent>CONTACT US</AccordionContent>
                  <AccordionContent>SHIPPING POLICY</AccordionContent>
                  <AccordionContent>ABOUT US</AccordionContent>
                  <AccordionContent>BEYOUNG BLOG</AccordionContent>
                  <AccordionContent>RETURN POLICY</AccordionContent>
                </Accordion.Item>

                <div className="flex flex-col justify-center items-center">
                  <div>
                    DOWNLOAD THE APP
                  </div>
                  <div className="flex flex-row gap-2.5">
                    <img className="w-[180px]" src={psImage1} alt="" />
                    <img className="w-[180px]" src={psImage2} alt="" />
                  </div>
                </div>

              </Accordion.Root>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div
          onClick={() => handlerNavbarToggle(false)}
          className="w-[25vw] backdrop-brightness-50 backdrop-opacity-100 backdrop-blur-sm"
        ></div>
      </div>
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={classNames("AccordionHeader", className)}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
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

export default NavbarLayer3;
