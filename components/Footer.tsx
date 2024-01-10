import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full mx-auto bg-[#E5F3F4] lg:bg-[#007888] py-16 px-8 md:px-16 lg:px-24 text-white">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-12 lg:space-x-4 space-y-8 lg:space-y-0">
        <div className="flex flex-[0.5] space-y-2  flex-col">
          <h3 className="text-[24px] leading-[35px] text-[#40405E] lg:text-[#FFFFFF]">
            BridgeChat AI
          </h3>
          <p className="w-full lg:w-[70%] lg:text-[#F0F8FF] text-[#7D8D96] text-[18px] leading-[35px]">
            Revolutionizing customer support for small businesses.
          </p>
          <p className="w-full lg:w-[70%] lg:text-[#F0F8FF] text-[#7D8D96] text-[18px] leading-[35px]">
            hello@bridgechat.com
          </p>
        </div>
        <div className="flex w-full lg:flex-[0.5] lg:flex-row flex-col justify-between lg:space-x-4 space-y-8 lg:space-y-0">
          <div>
            <p className="text-[18px] leading-[35px] text-[#203F50] lg:text-[#F0F8FF]">
              Quick Links
            </p>
            <ul className="flex flex-col space-y-4 lg:text-[#F0F8FF] text-[#7D8D96]">
              <Link href="/">Home</Link>
              <Link href="/">How It Works</Link>
              <Link href="/">Why Us</Link>
              <Link href="/">Blog</Link>
            </ul>
          </div>
          <div className="flex flex-col space-y-4 items-start">
            <p className="text-[18px] leading-[35px] text-[#203F50] lg:text-[#F0F8FF]">
              Schedule your demo and get setup in hours.
            </p>
            <input type="text" className="bg-white text-slate-900 p-2 w-full" />
            <button className="text-[#203F50] lg:text-[#F0F8FF] text-[18px] font-semibold text-center leading-[35px] lg:bg-[#00B4CC] px-8 py-2 bg-[#D4E4F1] lg:min-w-max w-full">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto border-t-[1px] border-[#7D8D96] py-3">
        <p className="text-[#203F50] lg:text-[#F0F8FF] text-[18px] text-center leading-[35px]">
          &copy; All rights reserved, Bridgechat 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
