'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const DestinationsImage = [
  {
    id: 1,
    name: 'Istanbul',
    imagePath: '/images/turkey.png',
  },
  {
    id: 2,
    name: 'Dubai',
    imagePath: '/images/dubai.png',
  },
  {
    id: 3,
    name: 'Tehran',
    imagePath: '/images/iran.png',
  },
];

export const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = DestinationsImage.length;

  const getPrevIndex = (index: number) =>
    (index - 1 + totalImages) % totalImages;
  const getNextIndex = (index: number) => (index + 1) % totalImages;

  const handleNext = () => {
    setCurrentIndex(getNextIndex(currentIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(getPrevIndex(currentIndex));
  };

  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <p className="text-5xl font-bold mb-4 max-w-[500px]">
        Escape to top Vacation destinations
      </p>
      <p className="text-[16px] font-medium max-w-xl mb-8 text-[#78726D]">
        Discover the worlds most popular vacation spots, from tropical beaches
        to vibrant cityscapes, perfect for creating unforgettable memories.
      </p>

      {/* Image Slider */}
      <div className="relative flex items-center justify-center space-x-4 w-full max-w-xl">
        {[
          getPrevIndex(currentIndex),
          currentIndex,
          getNextIndex(currentIndex),
        ].map((index, i) => {
          const isFocused = i === 1; // Center image is always index 1
          return (
            <div
              key={DestinationsImage[index].id}
              className={`relative transition-all duration-300 ease-in-out flex-shrink-0 
                ${
                  isFocused
                    ? 'w-[346px] h-[430px] z-10'
                    : 'w-[275px] h-[341px] opacity-70'
                }
              `}
            >
              <Image
                src={DestinationsImage[index].imagePath}
                alt={DestinationsImage[index].name}
                width={isFocused ? 346 : 275}
                height={isFocused ? 430 : 341}
                className="rounded-lg object-cover"
              />

              {/* Overlay text for the focused image */}
              {isFocused && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg text-sm font-semibold text-black w-[50%] text-center">
                  {DestinationsImage[index].name}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={handlePrev}
          className="bg-white border border-[#E9E8E5] rounded-full px-6 py-2 hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-white border border-[#E9E8E5] rounded-full px-6 py-2 hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Destinations;
