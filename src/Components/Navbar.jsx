import React, { useState } from "react";
import { Link } from "react-router";
import logoClassyBuy from "../assets/logo-classybuybest.png";
import { IoSearch } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import { HiShoppingBag } from "react-icons/hi2";



  const Navbar = ({ handleScroll, setSearchTerm, isScrolled, handlePanel, totalItems, wishlist, setActiveCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [activeCategoryState, setActiveCategoryState] = useState("All");

  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale"
  ];

  return (
    <header className={`bg-white fixed  top-0 left-0 right-0 z-30 ${isScrolled ? "shadow-lg" : ""}`}>
      <nav className="max-w-7xl flex mx-auto px-6 md:px-12 h-[14vh] items-center justify-between">
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(true)} className="text-4xl text-red-600">
            <HiMenu />
          </button>
        </div>

        {/* Logo ( only Desktop) */}
        <Link to="/" className="hidden md:block">
          <img
            src={logoClassyBuy}
            alt="Logo"
            className="py-3 h-[13vh] w-[32vh]"
          />
        </Link>

        {/* Mobile Search Icon (Middle) */}
<div className="md:hidden flex justify-center flex-1">
  {!mobileSearchOpen ? (
    <button
      className="flex justify-center items-center w-8 h-8 rounded-full bg-rose-700 text-white cursor-pointer"
      onClick={() => setMobileSearchOpen(true)}
    >
      <IoSearch className="text-2xl" />
    </button>
  ) : (
    <div className="flex items-center justify-center p-1 rounded-full border-2 border-gray-500 max-w-48 w-full">
      <input
        type="text"
        placeholder="search..."
        autoComplete="off"
        className="bg-transparent h-[5vh] p-2 focus:outline-none rounded-full text-sm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="flex justify-center items-center  w-7 h-7 rounded-full bg-rose-700 text-white cursor-pointer -ml-8 "
        onClick={() => setMobileSearchOpen(false)}
      >
        <HiX className="text-lg" />
      </button>
    </div>
  )}
</div>


        {/* Wishlist, Search, Cart (Desktop)*/}
        <div className="flex items-center gap-x-5 ml-auto">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex p-1 rounded-full border-2 border-gray-500 w-55">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search..."
              autoComplete="off"
              className="bg-white h-[5vh] pl-3 flex-1 focus:outline-none rounded-full text-sm"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="flex justify-center items-center w-7 h-7 rounded-full bg-rose-700 text-white cursor-pointer mt-0  md:mt-2.5 lg:mt-0">
              <IoSearch className="text-lg" />
            </button>
          </div>

          {/* Wishlist */}
          <button
            className="text-[1.8rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("wishlist")}
          >
            <GoHeartFill />
            {wishlist.length > 0 && (
              <span className="flex justify-center bg-rose-700 text-white w-5 h-5 rounded-full text-[13px] items-center absolute top-4 right-4 border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            className="text-[1.8rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("cartlist")}
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <span className="flex justify-center bg-rose-700 text-white w-5 h-5 rounded-full text-[13px] items-center absolute top-4 right-5 border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu (Categories) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
        >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Categories</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-red-600">
            <HiX />
          </button>
        </div>

        {/* Categories with active/hover */}
        <div className="flex flex-col gap-4 p-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg font-semibold text-lg cursor-pointer 
                ${activeCategoryState === category ? "bg-red-600 text-white" : "bg-zinc-100 hover:bg-red-600 hover:text-white"}`}
                onClick={() => {
                setActiveCategory(category);
                setActiveCategoryState(category);
                setMenuOpen(false);
              }}
              >
              {category}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
