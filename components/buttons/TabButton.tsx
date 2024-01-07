import React from 'react'

const TabButton = ({text, selected = false}: {text: string, selected?: boolean}) => {
  return (
    <button
      className={`px-4 py-1 mx-4 flex-1 text-[20px] leading-9 ${
        selected
          ? "text-white bg-[#00B4CC]"
          : "border-2 border-dashed border-[#868C98] text-[#868C98]"
      }`}
    >
      {text}
    </button>
  );
}

export default TabButton