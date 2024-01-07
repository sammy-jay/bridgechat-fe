"use client";
import React, { useState } from "react";
import TabButton from "./buttons/TabButton";
import Image from "next/image";
import { aboutData } from "@/data/static";

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="w-full mx-auto bg-[#FFFFFF] min-h-[100vh] py-12 lg:py-24 px-8 md:px-16 lg:px-24">
      <h1 className="text-[30px] leading-[50px] w-full lg:w-[70%] lg:mx-auto text-left lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold">
        Swift customer service that transforms your business
      </h1>

      <div className="my-12 lg:my-16 flex w-full mx-auto overflow-x-auto tabSection">
        {aboutData.map((item, index) => (
          <TabButton
            text={item.tabLabel}
            key={item.id}
            {...item}
            onClick={() => {
              setTabIndex(index);
            }}
            selectedId={tabIndex + 1}
          />
        ))}
      </div>

      <div
        className={`my-12 flex flex-col lg:flex-row w-full p-4 px-8 lg:px-16 ${aboutData[tabIndex].selectionColor} items-center space-y-4 lg:space-x-4 justify-between`}
      >
        <div className="flex-[0.5]">
          <img
            src={aboutData[tabIndex].imageUrl}
            alt="ai image"
            className="w-full object-contain h-[457px] "
          />
        </div>
        <div className="flex-[0.5] space-y-4">
          <h1 className="text-[#007888] text-[14px] font-bold uppercase leading-[20px]">
            {aboutData[tabIndex].title}
          </h1>
          <h2 className="text-[20px] lg:text-[24px] text-[#2F2F2F] font-bold leading-[35px]">
            {aboutData[tabIndex].subTitle}
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[#525866] leading-[35px]">
            {aboutData[tabIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
