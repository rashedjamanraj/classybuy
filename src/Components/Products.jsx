import React, { useState, useEffect } from "react";
import productList from "./ProductList";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";

const Products = ({searchTerm, addToCart, addToWishlist,  wishlist, onProductClick, activeCategory
}) => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale"
  ];

  const [activeTab, setActiveTab] = useState("All");

  // Navbar activeCategory local state update
  useEffect(() => {
    if (activeCategory) {
      setActiveTab(activeCategory);
    }
  }, [activeCategory]);

  // Filter products by category + search
  const filteredItems = productList.filter((item) => {
    const matchesSearch = item.name
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrivals" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    // Search term all category work for search
    if (searchTerm.trim() !== "") {
      return matchesSearch;
    }

    return matchesCategory;
  });

  return (
    <section id="product-section" className="max-w-7xl mx-auto px-5 md:px-12 py-10">
      {/* Desktop Tabs */}
      <div className="hidden md:flex gap-4 justify-center items-center mt-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-8 py-2 rounded-full font-semibold text-lg cursor-pointer ${
              activeTab === category
                ? "bg-red-600 text-white"
                : "bg-zinc-100 hover:bg-red-600 hover:text-white"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Listing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-12">
        {filteredItems.length === 0 ? (
          <p className="text-center col-span-4 text-zinc-800 text-lg">
            No product found
          </p>
        ) : (
          filteredItems.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-100 p-5 border border-zinc-300 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex justify-between items-center">
                {/* Wishlist Button */}
                <button
                  className={`text-3xl cursor-pointer ${
                    wishlist.some((item) => item.id === product.id)
                      ? "text-red-600"
                      : "text-zinc-300"
                  }`}
                  onClick={() => addToWishlist(product)}
                >
                  <GoHeartFill />
                </button>

                {/* Sale / New Badge */}
                <div>
                  {(product.onSale || product.newArrival) && (
                    <span
                      className={`px-3 py-1 text-white text-lg ${
                        product.onSale
                          ? "bg-red-600 rounded-lg"
                          : "bg-green-700 rounded-lg"
                      }`}
                    >
                      {product.onSale ? "Sale" : "New"}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Image */}
              <div
                className="w-full h-[50vh] cursor-pointer  mt-5"
                onClick={() => onProductClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transform hover:scale-104 transition-transform duration-200 overflow-hidden"
                />
              </div>

              {/* Product Detail */}
              <div className="text-center mt-5 overflow-hidden flex flex-col grow">
                <h3 className="text-[1.3rem] font-semibold mt-4">
                  {product.name}
                </h3>
                <div className="mt-1 mb-5">
                  {product.onSale && (
                    <span className="text-zinc-600 font-semibold line-through mr-8">
                      $ {product.oldprice?.toFixed(2)}
                    </span>
                  )}
                  <span className="text-red-600 font-semibold">
                    $ {product.price?.toFixed(2)}
                  </span>
                </div>
                <button
                  className="flex gap-2 items-center justify-center bg-amber-600 py-2 w-full px-5 rounded-lg text-lg active:bg-amber-700 text-white mt-auto cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  <HiShoppingBag className="text-[1.4rem]" /> Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
