import React from "react";
import InnovationItem from "./micros/InnovationItem";
import { innovationItemsArr } from "@/data/static";

const Innovation = () => {
  
  return (
    <section className="w-full mx-auto bg-[#FFFFFF]  pb-12 lg:pb-24 px-8 md:px-16 lg:px-24">
      <h1 className="text-[30px] leading-[45px] w-full lg:w-[70%] lg:mx-auto text-left lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-2 lg:mb-4">
        Elevate your business and{" "}
        <span className="text-[#FE7E37]">redefine your customer support</span>
      </h1>
      <p className="text-[14px] leading-[24px] text-[#7D8D96] lg:text-[18px] lg:leading-[35px] text-left lg:text-center mb-4 lg:mb-8">
        From Rapid Response Engines to Multilingual Prowess - Explore the
        Innovation Within!
      </p>

      <section className="flex space-y-12 flex-col">
        {innovationItemsArr.map((innovationItem) => (
          <InnovationItem {...innovationItem} key={innovationItem.id} />
        ))}
      </section>
    </section>
  );
};

export default Innovation;
