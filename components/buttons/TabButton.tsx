import React from 'react'

const TabButton = ({
  id,
  text,
  selectedId,
  onClick,
  selectionColor,
}: {
  id: number;
  text: string;
  selectedId: number;
  onClick: any;
  selectionColor: string
}) => {
  return (
    <button
      className={`min-w-max px-12 lg:px-4 py-1 mx-4 flex-1 text-[16px] lg:text-[20px] leading-[30px] capitalize ${
        selectedId === id
           ? `text-white ${selectionColor}`
           : "border-2 border-dashed border-[#868C98] text-[#868C98]"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TabButton