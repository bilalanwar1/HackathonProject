"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[90px] bg-black shadow flex justify-center items-center">
      <nav className="w-full max-w-[1320px] flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-1">
          <span className="text-white text-2xl font-bold">Food</span>
          <span className="text-custom-color text-2xl font-bold">tuck</span>
        </div>

        {/* Navigation Menu */}
        <ul
          className={`fixed inset-0 bg-black bg-opacity-90 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:space-x-6 lg:bg-transparent lg:w-auto lg:h-auto lg:translate-x-0 text-white text-lg`}
        >
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/">Home</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/pages">Pages</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/about">About</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="mt-8 lg:mt-0 hover:text-custom-color">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4 text-white">
          <CiSearch size={24} />
          <MdAccountCircle size={24} />
          <IoBagCheck size={24} />
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
