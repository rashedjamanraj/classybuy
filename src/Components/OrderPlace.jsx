import React from 'react'

const OrderPlaced = ({setOrderPlaced}) => {
  return (
    <section className=' flex justify-center items-center bg-black/95 fixed inset-0 z-40'>
      <div className=' bg-zinc-100 p-8 w-100 text-center rounded-lg border-2 border-zinc-300 '>
        <h2 className=' text-3xl  text-green-600 mt-5 font-bold '>Order Placed</h2>
        <p className=' text-zinc-800 text-lg  items-center font-bold my-4'>Thanks for your purchase!</p>
        <button className='px-6 rounded-lg py-3 r text-white bg-amber-600 active:bg-amber-700 cursor-pointer mb-5' onClick={() => setOrderPlaced (false)}>Close</button>


      </div>
    </section>
  )
}

export default OrderPlaced
