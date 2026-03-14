import React from 'react'


const OrderSummary = ({cartList, subtotal, shippingFee, orderTotal, setOrderPlaced, setOrderSummary, setCartList}) => {
  const handlePlaceOrder = () => {
    setOrderSummary(false)
    setOrderPlaced(true)
    setCartList([]);
  }


  return (
    <section className=' flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
      <div className=' bg-zinc-100 p-8 w-150 rounded-lg border-2 border-zinc-300'>
        <h2 className=' text-3xl text-zinc-800 font-bold mb-5 text-center'>Order Summary</h2>

        <div>
          <div>
            {
              cartList.map(item => (
                <div key={item.id} className='flex justify-between items-center border-b-2 border-zinc-300'>
                  <span className=' text-zinc-800 py-2'>{item.name}(x{item.quantity})</span>
                  <span className=' text-zinc-800 py-2'>$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))
            }
          </div>
          
          <div className='flex justify-between items-center pt-2'>
            <span className=' text-zinc-800 font-semibold '>subTotal</span>
            <span className=' text-zinc-800 font-semibold  '>$ {subtotal.toFixed(2)}</span>
          </div>

          <div className='flex justify-between items-center py-1.5 '>
            <span className=' text-zinc-800 '>Shipping & Handling</span>
            <span className=' text-zinc-800 '>$ {shippingFee.toFixed(2)}</span>
          </div>

          <div className='flex justify-between items-center py-2 border-t-2 border-zinc-300 mb-5'>
            <span className=' text-amber-600 font-bold text-xl'>Order Total</span>
            <span className=' text-amber-600 font-bold text-xl'>$ {orderTotal.toFixed(2)}</span>
          </div>

          <div className='flex gap-x-5 mt-10 '>
            <button className=' bg-zinc-800 flex-1 py-3 active:bg-zinc-950 text-white rounded-lg cursor-pointer' onClick={()=> setOrderSummary(false)}>Cancel</button>
            
            <button className=' bg-amber-600 flex-1 py-3 active:bg-amber-700 text-white rounded-lg cursor-pointer' onClick={handlePlaceOrder}>Place Order</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OrderSummary
