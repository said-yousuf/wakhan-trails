'use client';

import Image from 'next/image';
import CloudAnimation from './Cloud-Animation';

export const Hero = () => {
  return (
    <div className="relative my-3 w-full h-[660px] rounded-[20px] overflow-hidden flex flex-col justify-between">
      {/* Background */}
      <Image
        src="/images/background.png"
        alt="Mountain"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Clouds */}
      <CloudAnimation
        countRTL={1}
        countLTR={2}
        verticalRange={{ min: 0, max: 50 }}
      />
      {/* Text Content */}
      <div className="relative z-10 text-center mt-16">
        <h1 className="text-white font-bold text-6xl md:text-6xl lg:text-[56px] leading-tight">
          Discover your travel journey
        </h1>
        <p className="text-white font-medium text-lg md:text-xl mt-2">
          Flights, tours, and travel packages at the best prices!
        </p>
      </div>

      {/* Plane Image */}
      <div className="relative z-10 flex justify-center">
        <Image
          src="/images/plane.png"
          alt="Plane"
          width={900}
          height={400}
          className="w-[90%] md:w-[80%] lg:w-[865px] -mb-10"
        />
      </div>
    </div>
  );
};
