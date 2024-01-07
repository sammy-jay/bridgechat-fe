import React from "react";
import TabButton from "./buttons/TabButton";
import Image from "next/image";

const About = () => {
  const tabButtonContent = ["Our Vision", "Our Mission", "Our Values"];

  return (
    <section className="w-full mx-auto bg-[#FFFFFF] min-h-[100vh] py-24 px-8 md:px-16 lg:px-24">
      <h1 className="text-[30px] leading-[50px] w-full lg:w-[70%] lg:mx-auto text-left lg:text-center lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold">
        Swift customer service that transforms your business
      </h1>

      <div className="my-12 lg:my-16 flex w-full mx-auto overflow-x-auto tabSection">
        <TabButton text="Our Solution" selected={true} />
        {tabButtonContent.map((item) => (
          <TabButton text={item} key={item} />
        ))}
      </div>

      <div className="my-12 flex flex-col lg:flex-row w-full p-4 px-8 lg:px-16 bg-[#a8e7f0] items-center space-y-4 lg:space-x-4 justify-between">
        <div className="flex-[0.5]">
          <img
            src="/images/ai.png"
            alt="ai image"
            className="w-full object-contain h-[457px]"
          />
        </div>
        <div className="flex-[0.5] space-y-4">
          <h1 className="text-[#007888] text-[14px] font-bold uppercase leading-[20px]">
            Solving the Support Struggle
          </h1>
          <h2 className="text-[20px] lg:text-[24px] text-[#2F2F2F] font-bold leading-[35px]">
            Unraveling Customer Service Challenges with BridgeChat AI
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[#525866] leading-[35px]">
            Small businesses struggle with slow responses, language barriers, or
            high support costs, while handling customers enquiries. BridgeChat
            uses LLMs trained on your business data with knowledge bases
            tailored specifically for your business. It helps reduce
            hallucination to very large extent. Experience seamless,
            multilingual assistance that is efficient and budget-friendly with
            BridgeChat AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
