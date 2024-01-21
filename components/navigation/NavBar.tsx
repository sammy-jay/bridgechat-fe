"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY > 300;

        scrolled && setShowMenu(false);
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []); 

  return (
    <nav className="relative flex flex-row justify-between items-center w-full ">
      <p className="text-[24px] text-[#005A66] font-bold">BridgeChat AI</p>
      <GiHamburgerMenu
        className="lg:hidden w-8 h-8 cursor-pointer"
        onClick={() => setShowMenu(true)}
      />
      <ul className="hidden lg:flex flex-row space-x-5 items-center text-[#525866]">
        <Link href="#hero">
          <li className="nav-item">Home</li>
        </Link>
        <Link href="#hiw">
          <li className="nav-item">How It Works</li>
        </Link>
        <Link href="#why-us">
          <li className="nav-item">Why Us?</li>
        </Link>

        <button className="text-white bg-[#00B4CC] px-[48px] py-[16px] ">
          Get Started
        </button>
      </ul>

      {/* Mobile Nav */}
      <div
        className={`${
          showMenu ? "block lg:hidden" : "hidden lg:hidden"
        } w-[100vw] h-[100vh] bg-gray-800 opacity-50 fixed top-0 left-0 right-0 bottom-0 z-5`}
      />
      <ul
        className={`lg:hidden ${
          showMenu ? "block lg:hidden" : "hidden lg:hidden"
        } flex-col absolute bg-white w-full right-0 top-2 rounded-md space-y-4 px-4 pt-4 pb-8 text-[14px] transition-all`}
      >
        <div className="flex justify-end w-full z-10">
          <IoMdClose
            className="w-6 h-6 cursor-pointer text-red-500"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <Link href="#hero">
          <li className="nav-item">Home</li>
        </Link>
        <Link href="#hiw">
          <li className="nav-item">How It Works</li>
        </Link>
        <Link href="#why-us">
          <li className="nav-item">Why Us?</li>
        </Link>
        <button className="text-white bg-[#00B4CC] px-[40px] py-[10px] rounded-md text-left">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
