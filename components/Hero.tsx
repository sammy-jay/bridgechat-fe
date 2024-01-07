import React from "react";
import NavBar from "./navigation/NavBar";

const Hero = () => {
  return (
    <section className="w-full mx-auto bg-[#F1FFFF] min-h-[100vh] py-4 px-24">
      <NavBar />
      <div className="flex flex-col space-y-4 mt-4 md:flex-row md:space-x-4 md:mt-20">
        <div className="w-3/5 flex flex-col space-y-3">
          <h1 className="text-[32px] lg:text-[60px] lg:leading-[80px] text-[#2F2F2F]">
            Transforming Customer Support -{" "}
            <span className="text-[#FE7E37]">with Seamless AI Integration</span>
          </h1>
          <p className="text-[#525866] text-[20px] leading-9">
            Revolutionize your Customer Service by harnessing the power of AI
            assistance in your chosen local language to streamline complaint
            handling and supercharge efficiency, reducing costs effectively
          </p>
          <button className="text-white bg-[#00B4CC] px-[48px] py-[16px] max-w-fit	">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
