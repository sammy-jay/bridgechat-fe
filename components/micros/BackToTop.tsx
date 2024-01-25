"use client"

import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener to check visibility on scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisibility);
  }

  return (
    <button
      className={`fixed bottom-4 right-4 lg:bottom-8 lg:right-8 p-2 lg:p-4 bg-[#00B4CC] text-white rounded-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white w-5 h-5 lg:w-8 lg:h-8" />
    </button>
  );
};

export default BackToTopButton;
