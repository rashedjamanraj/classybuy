import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/hero-bigSale.png'



const Hero = () => {
  const initialTime = 5 * 60 * 60; //1800
  const [timeLeft , setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem('remainingTime');
    return storedTime && parseInt(storedTime, 10) > 0 ?
    parseInt(storedTime, 10) :initialTime
  });

  useEffect(() => {
    if(timeLeft <= 0 ) return

    const timer = setInterval(() => {
      setTimeLeft(prev=> {
        if (prev <= 1){
          clearInterval(timer);
          localStorage.setItem('remainingTime', 0)
          return 0;
        }
        const remainingTime =  prev -1
        localStorage.setItem('remainingTime', remainingTime);
        return remainingTime;
      })

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft])

  const formatTime = (time) => {
    const hours = Math.floor (time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds =   time % 60;

    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    }
  }

  const {hours, minutes, seconds} = formatTime(timeLeft);
  
  return (
    <section className=' h-[60vh] mt-[14vh] bg-cover bg-top' style={{backgroundImage: `url(${HeroImage})`}}>
        <div className='px-15 max-w-7xl mx-auto flex flex-col justify-center h-90 gap-3'>
          <h1 className='text-red-600 text-8xl uppercase font-bold tracking-tight'>Big Sale!</h1>
          <h2 className='text-zinc-800 text-3xl'>Up to 50% OFF - Limited Time Only!</h2>
         <div className='text-6xl font-bold flex gap-3 mt-5'>
            <span className=' text-white bg-zinc-800 p-3 rounded-lg'>{hours}</span>:
            <span className=' text-white bg-zinc-800 p-3 rounded-lg'>{minutes}</span>:
            <span className=' text-white bg-zinc-800 p-3 rounded-lg'>{seconds}</span>
         </div>
        </div>
        
    </section>
  )
}

export default Hero
