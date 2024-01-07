import React from "react";

type SingleUseCaseProp = {
  id: number;
  Icon: any;
  title: string;
  description: string;
};

const SingleUseCase = ({ id, Icon, title, description }: SingleUseCaseProp) => {
  return (
    <div className="flex flex-col space-y-3 p-[32px] pb-0 border-t-[1px] border-l-[0.5px] border-r-[0.5px] border-b-0 border-[#BCBCBC]">
      <Icon className="text-[#203F50] w-6 h-6 font-light" />
      <h2 className="text-[#203F50] text-[20px] leading-[30px] lg:text-[24px] lg:leading-[35px] font-bold">
        {title}
      </h2>
      <p className="text-[#7D8D96] text-[14px] leading-[24px] lg:text-[18px] lg:leading-[35px]">
        {description}
      </p>
    </div>
  );
};

export default SingleUseCase;
