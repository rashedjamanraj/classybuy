import React from "react";
import { HiShoppingBag } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";

const ProductDetails = ({ product, addToCart, addToWishlist, handleBack }) => {
  if (!product) return null;

  return (
    <section className="flex justify-center items-center bg-black/80 fixed inset-0 z-40">
      <div className="bg-white max-w-5xl w-full md:flex rounded-lg shadow-lg overflow-hidden">
        
        {/* Left side - Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-88 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right side - Info */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h2>
            <p className="text-2xl text-amber-600 font-bold mb-2">
              $ {product.price.toFixed(2)}
            </p>
            {product.onSale && (
              <p className="text-gray-500 line-through mb-2">
                Old Price: $ {product.oldprice?.toFixed(2)}
              </p>
            )}
            <p className="text-gray-600 mb-4">
              {product.description || "No description available."}
            </p>
            <p className="text-gray-500 italic mb-6">
              Category: {product.category}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              className="bg-red-600 flex-1 py-3 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-red-700"
              onClick={() => addToWishlist(product)}
            >
              <GoHeartFill className=" text-[1.4rem]"/> Add to Wishlist
            </button>

            <button
              className="bg-amber-600 flex-1 py-3 text-white rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-amber-700"
              onClick={() => addToCart(product)}
            >
              <HiShoppingBag className=" text-[1.4rem]"/> Add To Cart
            </button>
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleBack}
              className="  text-blue-600 underline rounded-lg text-xl font-bold cursor-pointer hover:text-blue-800"
            >
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
