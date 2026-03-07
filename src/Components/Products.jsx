import React, { useState } from "react";
import productList from "./ProductList";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from "react-router";

const Products = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = productList.filter((item) => {
    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrivals" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const renderProducts = filteredItems.map((product) => {
    return (
      //card
      <div key={product.id} className=" bg-zinc-100 p-5 border border-zinc-300 rounded-lg">
        <div className=" flex justify-between items-center">
          <button className={`text-3xl cursor-pointer ${wishlist.some(item => item.id === product.id) ? 'text-red-600' : 'text-zinc-300'}`} onClick={()=> addToWishlist(product)}>    
            <GoHeartFill />
          </button>

          <div>
            {(product.onSale || product.newArrival) && (
              <span
                className={`px-3 py-1 text-white text-lg  ${product.onSale ? "bg-red-600 rounded-lg" : "bg-green-700 rounded-lg"}`}
              >
                {product.onSale ? "Sale" : "New"}
              </span>
            )}
          </div>
        </div>

        {/* product image */}
        <div  className="w-full h-[30vh] cursor-pointer">
          <Link  to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
          </Link>
          
        </div>

        {/* product detail */}
        <div className=" text-center mt-7 overflow-hidden">
          <h3 className=" text-[1.4rem] font-semibold">{product.name}</h3>
          <div className="mt-1 mb-5">
            {product.onSale && (
              <span className="text-zinc-600 font-semibold line-through mr-8">
                $ {product.oldprice.toFixed(2)}
              </span>
            )}
            <span className="text-rose-600 font-semibold">
              $ {product.price.toFixed(2)}
            </span>
          </div>
          <button className=" flex gap-2 items-center justify-center bg-amber-600 py-2 w-full px-5 rounded-lg text-lg active:bg-amber-700 text-white hover:text-lg cursor-pointer" onClick={()=> addToCart(product)}>
             <HiShoppingBag className=" text-[1.5rem]"/> Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section id="product-section" className=" max-w-7xl mx-auto px-15 py-10">
      {/* Tabs */}
      <div className="flex gap-4 justify-center items-center mt-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` px-8 py-2 rounded-full font-semibold text-lg cursor-pointer ${activeTab === category ? "bg-red-600 text-white" : "bg-zinc-100 "}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Products Listing */}
      <div className="grid grid-cols-4 gap-9 mt-12">
        {filteredItems.length === 0 ? (
          <p className=" text-center col-span-4 text-zinc-800 text-lg ">
            No product found
          </p>
        ) : (
          renderProducts
        )}
      </div>
    </section>
  );
};

export default Products;
