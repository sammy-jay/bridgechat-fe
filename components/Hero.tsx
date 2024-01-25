import React from "react";
import NavBar from "./navigation/NavBar";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full mx-auto bg-[#F1FFFF] lg:min-h-[100vh] py-4 pb-8 px-8 md:px-16 lg:px-24"
    >
      <div className="hidden lg:block absolute -left-40 -bottom-40">
        <img src="/images/3d-images/Spiral.png" alt="" className="h-[285px]" />
      </div>
      <NavBar />
      <div className="flex flex-col space-y-8 lg:space-y-0 mt-16 lg:flex-row md:space-x-4 md:mt-20">
        {/* <div className="rounded-full bg-[#FFEFD8]  w-[46px] h-[46px] absolute bottom-0 right-0 blur-sm" /> */}
        <div className="w-full lg:w-3/5 flex flex-col space-y-6 lg:space-y-6">
          <h1 className="text-[38px] leading-[50px] lg:text-[60px] lg:leading-[80px] text-[#2F2F2F]">
            Transforming Customer Support -{" "}
            <span className="text-[#FE7E37]">with Seamless AI Integration</span>
          </h1>
          <p className="text-[#525866] text-[20px] leading-9">
            Revolutionize your Customer Service by harnessing the power of AI
            assistance in your chosen local language to streamline complaint
            handling and supercharge efficiency, reducing costs effectively
          </p>
          <button className="text-white bg-[#00B4CC] px-[48px] py-[16px] max-w-fit	">
            <Link href="#footer">Get Started</Link>
          </button>
        </div>
        <div className="relative w-full lg:w-2/5">
          <div className="relative z-10">
            <img
              src="/images/Chat.png"
              alt="hero image"
              className="h-[284px] z-10 w-full object-contain  lg:h-[537px]"
            />
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#9DF3FF] to-[#FDF0FF] w-[289px] h-[289px] lg:block absolute right-1 top-2" />
          <div className="rounded-full  z-5 bg-gradient-to-r from-[#9AF2F2] to-[#FDF0FF] w-[142px] z-5  h-[142px] lg:block absolute left-1 bottom-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
