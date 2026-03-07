import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logoClassyBuy from "../assets/logo-classybuybest.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = ({handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, wishlist}) => {

  

  return (
    <header className={` bg-white fixed top-0 left-0 right-0 z-30 ${isScrolled ? ' shadow-lg' : '' } `} >
      {/* logo */}
      <nav className="max-w-7xl flex mx-auto px-15 h-[14vh] items-center gap-10 justify-between">
        <Link to="/">
          <img
            src={logoClassyBuy}
            alt="Logo"
            className="py-3 h-[13vh] w-[32vh]"
          />
        </Link>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          <div className=" flex p-1 rounded-full border-2 border-gray-500">
            <input
              type="text" name="search" id="search"
              placeholder="search..." autoComplete="off"
              className="bg-white h-[5vh] pl-4 flex-1 focus:outline-none rounded-lg" 
              onFocus={handleScroll} 
              onChange={(e) => setSearchTerm(e.target.value)}
              />
            <button className=" flex justify-center items-center w-7 h-7 rounded-full bg-rose-700 text-white cursor-pointer">
              <IoSearch  className="text-lg"/>
            </button>
          </div>

          {/* search bar */}
          <button className=" text-[1.7rem] text-zinc-800 relative cursor-pointer" onClick={()=> handlePanel('wishlist')}>
            <GoHeartFill />
            {
              wishlist.length > 0 &&
              <span className="flex justify-center bg-rose-700 text-white  w-5 h-5 rounded-full text-[14px] items-center absolute top-4 right-3 border-2 border-white">{wishlist.length}</span>
            }
          </button>

          {/* shopping cart */}
          <button className=" text-[1.7rem] text-zinc-800 relative cursor-pointer" onClick={()=> handlePanel('cartlist')} >
            <HiShoppingBag /> 
              {
                totalItems > 0 && 
                <span className="flex justify-center bg-rose-700 text-white  w-5 h-5 rounded-full text-[14px] items-center absolute top-4 right-4 border-2 border-white"> {totalItems} </span>
              }
              
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
