import React from "react";

const WishList = ({ activePanel, handleclose, wishlist, addToCart, clearWishlist }) => {
  return (
    
    <>


    {/* overlay */}
    {activePanel === "wishlist" && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={handleclose} 
        />
      )}

   {/* wishlist Panel */}
    <div
      className={` flex flex-col justify-between gap-5 w-full bg-zinc-100 fixed right-0 top-0 bottom-0 left-auto z-40 md:w-100 border-l border-zinc-300 transform transition-transform duration-300 ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"} `}
    >
      {/* heading */}
      <div className="px-3">
        <h3 className="text-3xl font-bold text-zinc-800 text-center mt-5">
          Your Wishlist
        </h3>
      </div>

      {/* cart item */}
      <div className=" flex flex-1 flex-col gap-2">
        {wishlist.length === 0 ? (
          <p className=" text-lg text-zinc-800 text-center mt-3">Your wishlist is empty</p>
        ) : (
          wishlist.map((product, index) => {
            return (
              <div
                className={`flex items-center gap-3 px-5 py-1 border-y border-zinc-300 ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
              >
                {/* cart image */}
                <div className="w-20 h-20">
                  <img src={product.image} className="w-full h-full " />
                </div>

                {/* product detail       */}
                <div className=" flex-1">
                  <div className="flex justify-between">
                    <h4 className=" font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <p className=" text-xs text-zinc-500">Add: {product.addDate}</p>
                  </div>

                  <div className="flex justify-between">
                    <div>
                      {product.onSale && (
                        <span className="text-zinc-600 font-semibold line-through mr-4">
                          $ {product.oldprice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-rose-600 font-semibold">
                        $ {product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className=" flex bg-amber-600 justify-center items-center mb-1 text-white active:bg-amber-700 px-3 rounded-full py-1 cursor-pointer" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* button */}
      <div className="flex gap-2 mb-3 px-10 ">
        <button
          className="bg-red-600 text-white flex-1  h-[7vh] text-lg font-semibold rounded-lg active:bg-red-700 cursor-pointer"
          onClick={handleclose}
        >
          Close
        </button>
        <button
          className="bg-amber-600 text-white flex-1  h-[7vh] text-lg font-semibold rounded-lg active:bg-amber-700 cursor-pointer"
          onClick={clearWishlist}
        >
          Clear All
        </button>
      </div>
    </div>
  </>
  );
};

export default WishList;
