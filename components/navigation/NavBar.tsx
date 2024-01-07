"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="relative flex flex-row justify-between items-center w-full ">
      <p className="text-[24px] font-bold">Bridgechat.ai</p>
      <GiHamburgerMenu
        className="lg:hidden w-8 h-8 cursor-pointer"
        onClick={() => setShowMenu(true)}
      />
      <ul className="hidden lg:flex flex-row space-x-5 items-center">
        <li className="nav-item">Home</li>
        <li className="nav-item">How It Works</li>
        <li className="nav-item">Why Us?</li>
        <button className="text-white bg-[#00B4CC] px-[48px] py-[16px] ">
          Get Started
        </button>
      </ul>

      {/* Mobile Nav */}
      <ul
        className={`lg:hidden ${
          showMenu ? "block lg:hidden" : "hidden lg:hidden"
        } flex-col absolute bg-white w-[200px] right-0 top-2 rounded-md space-y-4 px-4 pt-4 pb-8 text-[14px] transition-all`}
      >
        <div className="flex justify-end w-full">
          <IoMdClose
            className="w-6 h-6 cursor-pointer text-red-500"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <li className="nav-item ">Home</li>
        <li className="nav-item">How It Works</li>
        <li className="nav-item">Why Us?</li>
        <li className="nav-item">Blog</li>
        <button className="text-white bg-[#00B4CC] px-[40px] py-[10px] rounded-md text-left">
          Get Started
        </button>
      </ul>
    </nav>
  );
}

export default NavBar