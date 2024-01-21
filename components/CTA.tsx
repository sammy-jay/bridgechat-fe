import React from "react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full mx-auto bg-[#FFFFFF] py-12 lg:py-24 px-8 md:px-16 lg:px-24"
    >
      <section className="lg:bg-[#F1FFFF] px-0 md:px-16 lg:px-24 flex flex-row lg:flex-row justify-between items-center space-x-0 lg:space-x-12">
        <img
          src="/images/Group (2).png"
          alt="ai image"
          className="hidden lg:block w-[280px] h-[393px] object-contain "
        />
        <div className="flex-1 flex-col space-y-4">
          <h1 className="text-[32px] w-full  lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-4">
            Get Started Today
          </h1>
          <p className="text-[#7D8D96] w-full text-[18px] leading-[35px]">
            Sign up for BridgeChat AI now and empower your small business with a
            customer engagement solution designed just for you!
          </p>
          <button className="text-[#F0F8FF] text-[18px] font-semibold text-center leading-[35px] bg-[#00B4CC] px-12 py-2">
            Get Started
          </button>
        </div>
      </section>
    </section>
  );
};

export default CTA;
//  lg:min-w-min w-full
