import React from "react";

const InnovationItem = ({
  imageUrl,
  title,
  descriptions,
  reverse = false
}: {
  imageUrl: string;
  title: string;
  reverse?: boolean;
  descriptions: string[];
}) => {
  return (
    <article className={`my-12 flex flex-row w-full py-4  bg-[#fff] items-start space-x-4 justify-between ${reverse && "flex-row-reverse"}`}>
      <div className="flex-[0.5]">
        <img
          src="/images/ai.png"
          alt="ai image"
          className="w-full object-contain h-[468px]"
        />
      </div>
      <div className="flex-[0.5] space-y-8 flex flex-col">
        <h1 className="text-[#2F2F2F] text-[40px] font-bold leading-[50px]">
          {title}
        </h1>
        <ul className="flex space-y-6 list-disc flex-col">
          {descriptions.map((desc) => (
            <li key={desc} className="text-[18px] text-[#7D8D96] leading-[35px]">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default InnovationItem;
