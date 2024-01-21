import React from "react";

const InnovationItem = ({
  imageUrl,
  title,
  descriptions,
  reverse = false,
}: {
  imageUrl: string;
  title: string;
  reverse?: boolean;
  descriptions: any[];
}) => {
  return (
    <article
      className={`my-12 flex flex-col lg:flex-row w-full py-4  bg-[#fff] items-start space-y-4 lg:space-y-0 justify-between ${
        reverse && "lg:flex-row-reverse"
      }`}
    >
      <div
        className={`lg:flex-[0.5] mb-4 lg:mb-0 w-full lg:mr-12 ${
          reverse && "lg:flex-row-reverse lg:mr-0 lg:ml-12"
        }`}
      >
        <img
          src={imageUrl}
          alt="ai image"
          className=" w-full object-contain "
        />
      </div>
      <div className="flex-[0.5] space-y-4 lg:space-y-8 flex flex-col">
        <h1 className="text-[#2F2F2F]  text-[24px] leading-[35px] lg:text-[40px] font-bold lg:leading-[50px]">
          {title}
        </h1>
        <ul className="flex space-y-3 lg:space-y-6 list-none flex-col">
          {descriptions.map((desc) => (
            <div key={desc.text} className="flex flex-row space-x-2 items-start">
              <img
                src={desc.liImage}
                alt="ai image"
                className=" w-[48px] object-contain "
              />
              <li
                
                className="text-[14px] lg:text-[18px] text-[#7D8D96] leading-[24px] lg:leading-[35px]"
              >
                {desc.text}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default InnovationItem;
