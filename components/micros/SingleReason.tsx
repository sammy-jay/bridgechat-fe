import React from 'react'

type SingleReasonProp = {
  id: number;
  Icon: any;
  title: string;
  description: string;
};

const SingleReason = ({ id, Icon, title, description }: SingleReasonProp) => {
  return (
    <div className="flex flex-row space-x-4 justify-between px-[16px] lg:p-[32px] pb-0">
      <Icon className="text-[#203F50] w-6 h-6 lg:w-10 lg:h-10 font-light mt-[30px]" />
      <div className="flex-1">
        <h2 className="text-[#203F50] text-[24px] leading-[35px]  font-bold">
          {title}
        </h2>
        <p className="text-[#7D8D96] text-[14px] leading-[24px] lg:text-[18px] lg:leading-[35px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleReason