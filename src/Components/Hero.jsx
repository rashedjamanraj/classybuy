import React, { useEffect, useState } from 'react'
import HeroImage from '../assets/hero-bigSale.png'

const Hero = ({ menuOpen }) => {
  const initialTime = 5 * 60 * 60;
  const [timeLeft , setTimeLeft] = useState(() => {
    const storedTime = localStorage.getItem('remainingTime');
    return storedTime && parseInt(storedTime, 10) > 0 ?
    parseInt(storedTime, 10) :initialTime
  });

  useEffect(() => {
    if(timeLeft <= 0 ) return;

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
  }, [timeLeft]);

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

    if (menuOpen) return null;

  return (
    <section className="relative h-[30vh] md:h-[70vh] mt-[12vh] md:mt-[15vh]">
      {/* Hero Image */}
      <img 
        src={HeroImage} 
        alt="Big Sale Banner" 
        className="absolute inset-0 w-full h-full object-cover object-center" 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Content */}
      <div className=" px-5 md:px-12 relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center md:items-start z-10">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 text-left md:text-left mt-6 md:mt-8">
          <h1 className="text-red-600 text-4xl  md:text-7xl uppercase font-bold tracking-tight drop-shadow-lg">
            Big Sale!
          </h1>
          <h2 className=" text-amber-600 md:text-zinc-800 text-lg md:text-3xl font-semibold drop-shadow-lg">
            Up to 50% OFF - Limited Time Only!
          </h2>
        </div>

        {/* Timer */}
        <div className="mt-6 flex justify-center md:justify-start">
          <div className="text-2xl md:text-6xl font-bold flex gap-2 md:gap-3">
            <span className="text-white bg-zinc-800 p-2 md:p-4 rounded-lg shadow-lg">{hours}</span>:
            <span className="text-white bg-zinc-800 p-2 md:p-4 rounded-lg shadow-lg">{minutes}</span>:
            <span className="text-white bg-zinc-800 p-2 md:p-4 rounded-lg shadow-lg">{seconds}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
