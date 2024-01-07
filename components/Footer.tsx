import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="w-full mx-auto bg-[#007888] py-16 px-24 text-white">
      <div className="flex flex-row items-start justify-between mb-12">
        <div className="flex flex-[0.5] space-y-2  flex-col">
          <h3 className="text-[24px] leading-[35px] text-[#FFFFFF]">
            BridgeChat AI
          </h3>
          <p className="w-[70%] text-[#F0F8FF] text-[18px] leading-[35px]">
            Revolutionizing customer support for small businesses.
          </p>
        </div>
        <div className="flex flex-[0.5] flex-row  justify-between space-x-4">
          <div>
            <p className="text-[18px] leading-[35px] text-[#F0F8FF]">
              Quick Links
            </p>
            <ul className="flex flex-col space-y-4 text-[#F0F8FF]">
                <Link href="/">Home</Link>
                <Link href="/">How It Works</Link>
                <Link href="/">Why Us</Link>
                <Link href="/">Blog</Link>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 items-start">
            <p className="text-[18px] leading-[35px] text-[#F0F8FF]">
              Schedule your demo and get setup in hours.
            </p>
            <input type="text" className="bg-white text-slate-900 p-2 w-full" />
            <button className="text-[#F0F8FF] text-[18px] font-semibold text-center leading-[35px] bg-[#00B4CC] px-8 py-2">
              Book Demo
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto border-t-2 border-[#7D8D96] py-3">
        <p className="text-[#F0F8FF] text-[18px] text-center leading-[35px]">
          &copy; All rights reserved, Bridgechat 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
