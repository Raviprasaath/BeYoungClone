import React from "react";
import psImg1 from "../../assets/play-store-3.png";
import psImg2 from "../../assets/play-store-4.png";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Footer.css";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";

import img1 from "../../assets/footer-1.jpg";
import img2 from "../../assets/footer-2.jpg";
import img3 from "../../assets/footer-3.jpg";
import img4 from "../../assets/footer-4.jpg";
import img5 from "../../assets/footer-5.jpg";
import img6 from "../../assets/footer-6.jpg";
import img7 from "../../assets/footer-7.jpg";

import { useScreenSize } from "../CommonFunctions/CommonFunctions";

const Footer = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const content = (
    <div className="flex flex-col gap-4 bg-black text-white justify-center items-center">
    <div className="flex flex-row flex-wrap gap-4 bg-black text-white justify-around p-4 w-[70%]">
      <div>
        <h2 className="text-yellow-200 font-bold">NEED HELP</h2>
        <div>Contact Us</div>
        <div>Track Order</div>
        <div>Returns & Refunds</div>
        <div>FAQ's</div>
        <div>Career</div>
      </div>
      <div>
        <h2 className="text-yellow-200 font-bold">COMPANY</h2>
        <div>About Us</div>
        <div>Beyoung Blog</div>
        <div>Beyoungistan</div>
        <div>Collaboration</div>
        <div>Media</div>
      </div>
      <div>
        <h2 className="text-yellow-200 font-bold">MORE INFO</h2>
        <div>Terms and Conditions</div>
        <div>Privacy Policy</div>
        <div>Shipping Policy</div>
        <div>Sitemap</div>
      </div>
      <div>
        <h2 className="text-yellow-200 font-bold">Location</h2>
        <div>support@beyoung.in</div>
        <div className="max-w-[130px]">
          Eklingpura Chouraha, Ahmedabad Main Road (NH 8- Near Mahadev
          Hotel) Udaipur, India- 313002
        </div>

        <h2>DOWNLOAD THE APP</h2>
        <div className="flex flex-col p-2 gap-3">
          <img className="max-w-[130px]" src={psImg1} alt="img" />
          <img className="max-w-[130px]" src={psImg2} alt="img" />
        </div>
      </div>
    </div>
    <div className="flex justify-center w-[70%]">
      <Accordion.Root
        className="AccordionRoot"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <div className="border m-4"></div>
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger>WHY CHOOSE US?</AccordionTrigger>
          <AccordionContent>
            <div>Online Shopping Site</div>
            <div>
              India's Best Online Shopping Site for Fashion and Lifestyle
            </div>
            <div>
              Started in 2018, Beyoung is the Best Site for online shopping
              in India when it comes to a vast collection of men's and
              women's fashion. The latest trends and styles are showcased
              here, yes at your favorite online fashion store. Well, if
              fashion is medicine, then Be Young is the chemist shop where
              you can do your online shopping for fashion with ease. Nothing
              to brag about, but we are the classic blend of 'Creativity'
              and 'Style'. Get The Young Out with Beyoung, our slogan says a
              lot about us.
            </div>
          </AccordionContent>
        </Accordion.Item>
        <div className="border m-4"></div>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>POPULAR CATEGORIES</AccordionTrigger>
          <AccordionContent>
            <div className="text-yellow-200 font-bold pt-4 ">Men' Clothing</div>
            <div>
              Topwear: Half Sleeve T-Shirts | Full Sleeve T-Shirts | Men's
              Shirts | Printed T-Shirts | Plain T-Shirts | Polo T-Shirts |
              Plus Size T-Shirts | Combos
            </div>
            <div className="h-[20px]"></div>
            <div>
              Theme Based T Shirts: Ipl T Shirts | Men's Travel T-shirts |
              Gym T Shirts | Quotes T Shirt | Cartoon T Shirt | Entrepreneur
              T-Shirts | Student T Shirts | Funky T Shirts
            </div>
            <div className="h-[20px]"></div>
            <div>
              Winter Collection: Hoodies for Men | Sweatshirts for Men |
              Jackets for Men
            </div>
            <div className="text-yellow-200 font-bold pt-4 ">WOMEN' Clothing</div>
            <div>
              Topwear: Women Shirts | Half Sleeve T-Shirts | Full Sleeve
              T-Shirts | Printed T-Shirts | Plain T-Shirts | Crop Tops |
              Plus Size T-Shirts | kurti
            </div>
            <div className="h-[20px]"></div>
            <div>
              Theme Based T Shirts: Women's Travel T-shirts | Feminist
              T-shirts
            </div>
            <div className="h-[20px]"></div>
            <div>
              Winter Collection: Hoodies for Women | Sweatshirts for Women |
              Long Coats for Women
            </div>
            <div className="h-[20px]"></div>
            <div>CUSTOMIZATION</div>
            <div>Custom T Shirt</div>
            <div className="h-[20px]"></div>
            <div>COUPLE WEAR</div>
            <div>Couple Boxer | Couple T shirts</div>
            <div className="h-[20px]"></div>
            <div>BOTTOMWEAR:</div>
            <div>
              Mens Boxer | Womens Boxer | Jeggings | Men Sweatpants | Mens
              Joggers | Chino Pants | Mens Jeans | Mens Pyjamas
            </div>
          </AccordionContent>
        </Accordion.Item>
        <div className="border m-4"></div>
      </Accordion.Root>
    </div>
    {!isMobile &&
      <div className="flex flex-row  gap-4 justify-center w-[70%] justify-center">
      <div className="w-1/2 flex flex-col justify-center ">
        <p className="p-4 text-[1.2rem] font-bold">
          100% SECURE PAYMENT
        </p>
        <img className="w-[99%]" src={img1} alt="img" />
      </div>
      <div className="border"></div>
      <div className="w-1/2 px-4">
        <p className="p-4 text-[1.2rem] font-bold">
          LET'S BE FRIENDS
        </p>
        <div className="flex  flex-row gap-[20px] justify-between w-[50%]">
          <img className="w-[30px]" src={img2} alt="img" />
          <img className="w-[30px]" src={img3} alt="img" />
          <img className="w-[30px]" src={img4} alt="img" />
          <img className="w-[30px]" src={img5} alt="img" />
          <img className="w-[30px]" src={img6} alt="img" />
          <img className="w-[30px]" src={img7} alt="img" />
        </div>
      </div>
      </div>
    }
    {isMobile && 
      <div className="flex flex-col  gap-2 justify-center w-[70%] justify-center">
        <div className="px-2 flex flex-row justify-center items-center">
          <p className="p-2 text-[0.8em] font-[700]">
            LET'S BE FRIENDS
          </p>              
          <div className="flex flex-row gap-[10px] justify-around  w-[50%]">
            <img className="w-[15px]" src={img2} alt="img" />
            <img className="w-[15px]" src={img3} alt="img" />
            <img className="w-[15px]" src={img4} alt="img" />
            <img className="w-[15px]" src={img5} alt="img" />
            <img className="w-[15px]" src={img6} alt="img" />
            <img className="w-[15px]" src={img7} alt="img" />
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <img className="w-[99%]" src={img1} alt="img" />
        </div>            
      </div>
    }

    <div className="py-[2rem] font-bold text-center">
      Copyright © 2023 Raviprasaath. All rights reserved.
    </div>
    </div>
  )
  
  return (
    <>
      {isMobile && (
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger className="bg-black justify-center gap-4" >
              ABOUT BEYOUNG
            </AccordionTrigger>
              <AccordionContent> 
                {content}          
              </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      )}
      {!isMobile && 
        <div>
          {content}
        </div>
      } 
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={classNames("AccordionHeader", className)}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger text-[1.2rem] font-[700] text-yellow-400", className)}
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
      <div className="AccordionContentText bg-black">{children}</div>
    </Accordion.Content>
  )
);

export default Footer;




