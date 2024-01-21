import React from "react";
import InnovationItem from "./micros/InnovationItem";
import { innovationItemsArr } from "@/data/static";

const Innovation = () => {
  return (
    <section
      id="innovation"
      className="relative w-full mx-auto bg-[#FFFFFF]  pb-6 lg:pb-12 px-8 md:px-16 lg:px-24"
    >
      <div className="hidden lg:block absolute right-0 -top-0">
        <img
          src="/images/3d-images/Torus.png"
          alt="3d asset"
          className="h-[265px]"
        />
      </div>
      <h1 className="text-[30px] leading-[45px] w-full lg:w-[70%] text-left  lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-2 lg:mb-4">
        Elevate your business and{" "}
        <span className="text-[#FE7E37]">redefine your customer support</span>
      </h1>
      <p className="text-[14px] leading-[24px] text-[#7D8D96] lg:text-[18px] lg:leading-[35px] text-left  mb-4 lg:mb-8">
        From Rapid Response Engines to Multilingual Prowess - Explore the
        Innovation Within!
      </p>

      <section className="flex space-y-6 flex-col">
        {innovationItemsArr.map((innovationItem) => (
          <InnovationItem {...innovationItem} key={innovationItem.id} />
        ))}
      </section>
    </section>
  );
};

export default Innovation;
