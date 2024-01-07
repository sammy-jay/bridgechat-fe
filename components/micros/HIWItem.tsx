import React from "react";

type HIWProp = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
};
const HIWItem = ({ id, imageUrl, title, description }: HIWProp) => {
  return (
    <div className="relative flex flex-col space-y-3 p-[32px] pb-0 border-t-[1px] border-l-[0.5px] border-r-[0.5px] border-b-0 border-[#BCBCBC] justify-center">
      <h2 className="text-[#203F50] text-[20px] leading-[30px] lg:text-[24px] lg:leading-[35px] font-bold">
        {title}
      </h2>
      <p className="text-[#7D8D96] text-[14px] leading-[24px] lg:text-[18px] lg:leading-[35px]">
        {description}
      </p>

      <div className="absolute -top-6 bg-white -left-4 border-[1px] border-[#BCBCBC] p-2 flex justify-center items-center w-8 h-8">
        <p className="text-[#000000] font-bold text-[18px] leading-[35px]">
          {id}
        </p>
      </div>
    </div>
  );
};

export default HIWItem;
