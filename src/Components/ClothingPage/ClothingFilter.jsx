
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import React, { useState } from "react";


const ClothingFilter = (clothingData) => {
    const [price, setPrice] = useState("low");
    
    const colors = [
      {title:"BLACK" , className:"bg-black rounded-full w-[25px] h-[25px] m-1"},
      {title:"BROWN" , className:"bg-amber-700 rounded-full w-[25px] h-[25px] m-1" },
      {title:"WHITE" , className:"bg-white border-2 rounded-full w-[25px] h-[25px] m-1" },
      {title:"GREY" , className:"bg-gray-500	rounded-full w-[25px] h-[25px] m-1" },
      {title:"CREAM" , className:"bg-amber-100 rounded-full w-[25px] h-[25px] m-1" },
      {title:"ORANGE" , className:"bg-orange-500 rounded-full w-[25px] h-[25px] m-1" },
      {title:"BLUE" , className:"bg-blue-500 rounded-full w-[25px] h-[25px] m-1" },
      {title:"GREEN" , className:"bg-green-500 rounded-full w-[25px] h-[25px] m-1" },
      {title:"RED" , className:"bg-red-500 rounded-full w-[25px] h-[25px] m-1" },
      {title:"LAVENDER" , className:"bg-indigo-200 rounded-full w-[25px] h-[25px] m-1" },
      {title:"PINK" , className:"bg-pink-600 rounded-full w-[25px] h-[25px] m-1" },
      {title:"KHAKI" , className:"bg-yellow-700 rounded-full w-[25px] h-[25px] m-1" },
      {title:"PURPLE" , className:"bg-purple-600 rounded-full w-[25px] h-[25px] m-1" },
      {title:"YELLOW " , className:"bg-yellow-500 rounded-full w-[25px] h-[25px] m-1"},
      {title:"MAROON " , className:"bg-amber-900 rounded-full w-[25px] h-[25px] m-1"},
      {title:"BEIGE" , className:"bg-rose-100 rounded-full w-[25px] h-[25px] m-1" },
      {title:"OLIVE" , className:"bg-lime-600 rounded-full w-[25px] h-[25px] m-1" },
      {title:"CHARCOAL" , className:"bg-zinc-500 rounded-full w-[25px] h-[25px] m-1" },
      {title:"SILVER" , className:"bg-zinc-300 rounded-full w-[25px] h-[25px] m-1" },
    ]
    
    const receivedColors = clothingData.clothingData;
    
    const colorElements = [];
    const addedColors = new Set();
    
    receivedColors?.forEach((data, index) => {
      const matchingColor = colors?.find((color) => color.title === data.color);
      if (matchingColor && !addedColors.has(matchingColor.title)) {
        colorElements.push(
          <div key={index} title={matchingColor.title} className={matchingColor.className}></div>
        );
        addedColors.add(matchingColor.title);
      }
    });

    return (
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
                        
                        {colorElements}
                        
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
    )
}
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
export default ClothingFilter;