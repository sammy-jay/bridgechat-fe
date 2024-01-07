import { howItWorksArray } from "@/data/static";
import React from "react";
import HIWItem from "./micros/HIWItem";

const HowItWorks = () => {
  return (
    <section className="w-full mx-auto bg-[#FFFFFF] min-h-[100vh] py-12 lg:py-24 px-8 md:px-16 lg:px-24">
      <h1 className="text-[32px] w-full lg:mx-auto lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-4">
        How BridgeChat AI Works
      </h1>
      <p className="text-[#7D8D96] lg:text-center mb-8 text-[14px] leading-[24px] lg:text-[18px] lg:leading-[35px]">
        Explore Effortless User Inquiry to Swift Resolutions
      </p>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-8">
        {howItWorksArray.map((hiw) => (
          <HIWItem {...hiw} key={hiw.id} />
        ))}
      </article>
      <div className="flex justify-center w-full mt-12">
        <button className="text-white bg-[#00B4CC] px-[48px] py-[16px] max-w-fit	">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
