import React from "react";

const CTA = () => {
  return (
    <section className="w-full mx-auto bg-[#FFFFFF]  py-24 px-24 flex flex-row justify-between items-center">
      <div className="flex-1">
        <h1 className="text-[32px] w-full  lg:text-[50px] lg:leading-[65px] text-[#2F2F2F] font-bold mb-4">
          Get Started Today
        </h1>
        <p className="text-[#7D8D96] w-[70%] text-[18px] leading-[35px]">
          Sign up for BridgeChat AI now and empower your small business with a
          customer engagement solution designed just for you!
        </p>
      </div>
      <button className="text-[#203F50] text-[18px] font-semibold text-center leading-[35px] bg-[#D4E4F1] px-8 py-2">
        Get Started
      </button>
    </section>
  );
};

export default CTA;
