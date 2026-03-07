import React from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import productList from "./ProductList";
import Products from "./Products";

const ProductDetails = ({ addToCart, addToWishlist, wishlist }) => {
  const { id } = useParams(); // URL থেকে product id নেবে
  const product = productList.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-xl text-red-600 mt-10">
        Product not found!
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-5 py-10">
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="w-full h-[60vh] border rounded-lg overflow-hidden">
          <img src={Product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

          {/* Price */}
          <div className="mb-5">
            {product.onSale && (
              <span className="text-zinc-600 font-semibold line-through mr-5">
                $ {product.oldprice?.toFixed(2)}
              </span>
            )}
            <span className="text-rose-600 font-bold text-2xl">
              $ {product.price.toFixed(2)}
            </span>
          </div>

          {/* Category */}
          <p className="text-lg text-zinc-700 mb-5">
            Category: <span className="font-semibold">{product.category}</span>
          </p>

          {/* Labels */}
          <div className="mb-5">
            {product.newArrival && (
              <span className="bg-green-700 text-white px-3 py-1 rounded-lg mr-3">
                New Arrival
              </span>
            )}
            {product.onSale && (
              <span className="bg-red-600 text-white px-3 py-1 rounded-lg">
                On Sale
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-5">
            <button
              className="flex gap-2 items-center bg-amber-600 py-2 px-5 rounded-lg text-lg text-white active:bg-amber-700"
              onClick={() => addToCart(product)}
            >
              <HiShoppingBag className="text-[1.5rem]" /> Add to Cart
            </button>

            <button
              className={`flex gap-2 items-center py-2 px-5 rounded-lg text-lg border ${
                wishlist.some((item) => item.id === product.id)
                  ? "bg-red-600 text-white"
                  : "bg-zinc-100 text-zinc-700"
              }`}
              onClick={() => addToWishlist(product)}
            >
              <GoHeartFill className="text-[1.5rem]" /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

