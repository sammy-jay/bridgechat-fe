import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-full ">
      <p className="text-[24px] font-bold">Bridgechat.ai</p>
      <ul className="flex flex-row space-x-5 items-center">
        <li className="nav-item">Home</li>
        <li className="nav-item">How It Works</li>
        <li className="nav-item">Why Us?</li>
        <button className='text-white bg-[#00B4CC] px-[48px] py-[16px]'>Get Started</button>
      </ul>
    </nav>
  );
}

export default NavBar