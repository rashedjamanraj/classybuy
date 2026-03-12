import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import product from "./ProductList";

const CartList = ({ activePanel, handleclose, cartList, removeItem, quantityIncremrnt, quantityDecremrnt, subtotal, orderTotal, shippingFee, setOrderSummary }) => {
  return (
    
  <>
    {activePanel === "cartlist" && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={handleclose} 
        />
      )}
    
    {/* cart panel */}
    <div
      className={` flex flex-col justify-between gap-5 bg-zinc-100 fixed right-0 top-0 bottom-0 left-auto z-40 w-100 border-l border-zinc-300 transform transition-transform duration-300 ${activePanel === "cartlist" ? "translate-x-0" : "translate-x-full"} `}
    >
      {/* heading */}
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center mt-5">
          Your Cart
        </h3>
      </div>

      {/* cart item */}
      <div className=" flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {
          cartList.length === 0 ? (
          <p className=" text-zinc-800 text-center">Your cart is empty</p>) : (
          cartList.map((product, index) => {
          return (
            <div
              className={`flex items-center gap-3  px-5 py-1 border-y border-zinc-300 ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
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
                  <button className="w-7 h-7 bg-red-600 rounded-full text-white flex items-center justify-center cursor-pointer active:bg-red-800 mr-6" onClick={()=> removeItem(product)}>
                    <FaTrash />
                  </button>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    {product.onSale && (
                      <span className="text-zinc-600 font-semibold line-through mr-5">
                        $ {product.oldprice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-rose-600 font-semibold">
                      $ {product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex gap-2 py-2">
                    <button className="w-6 h-6 bg-green-600 rounded-full text-white flex items-center justify-center text-[13px]  cursor-pointer active:bg-green-800 " onClick={() =>quantityDecremrnt(product)}>
                      <FaMinus />
                    </button>
                    <span>{product.quantity}</span>
                    <button className="w-6 h-6 bg-green-600 rounded-full text-white flex items-center justify-center cursor-pointer text-[13px] active:bg-green-800 " onClick={() =>quantityIncremrnt(product)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }))
        }
      </div>

      {/* cart total */}
      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between pt-2">
          <span className=" text-zinc-800">Subtotal</span>
          <span className=" text-zinc-800">$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className=" text-zinc-800">Shipping & handlings</span>
          <span className=" text-zinc-800">$ {shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-300">
          <span className=" text-amber-600 text-lg font-bold">Order Total</span>
          <span className=" text-amber-600 text-lg font-bold">$ {orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* button */}
      <div className="flex gap-2 mb-3 px-10 ">
        <button
          className="bg-red-600 text-white flex-1  h-[7vh] text-lg font-semibold rounded-lg active:bg-red-700 cursor-pointer"
          onClick={handleclose}
        >
          Close
        </button>
        <button className={` text-white flex-1  h-[7vh] text-lg font-semibold rounded-lg   ${cartList.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 cursor-pointer active:bg-green-800'}`} 
        disabled={cartList.length === 0} onClick={() => setOrderSummary(true)}
        >
          Checkout
        </button>
      </div>
    </div>
  </>
  );
};

export default CartList;
