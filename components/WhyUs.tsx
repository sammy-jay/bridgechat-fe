import React from "react";
import SingleReason from "./micros/SingleReason";
import { whyUsArray } from "@/data/static";

const WhyUs = () => {
  return (
    <section className="w-full mx-auto bg-[#FFFFFF] py-12 lg:py-24  px-8 md:px-16 lg:px-24">
      <h1 className="text-[32px] w-full lg:w-[70%] lg:text-center lg:mx-auto lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-4">
        <span className="text-[#FE7E37]">Choose Excellence</span>: Why
        BridgeChat AI Stands Out
      </h1>
      <p className="text-[#7D8D96] text-[14px] leading-[24px] lg:text-[18px] lg:leading-[35px] mb-8 lg:text-center text-left">
        Discover Unique Advantages for Instant Support, AI Precision, and
        Tailored Solutions
      </p>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-4 bg-[#FFEFD8] py-8 opacity-30">
        {whyUsArray.map((reason) => (
          <SingleReason {...reason} key={reason.id} />
        ))}
      </article>
    </section>
  );
};

export default WhyUs;
