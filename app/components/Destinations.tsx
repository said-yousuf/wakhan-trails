'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
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
  {
    id: 4,
    name: 'Istanbul',
    imagePath: '/images/turkey.png',
  },
  {
    id: 5,
    name: 'Dubai',
    imagePath: '/images/dubai.png',
  },
  {
    id: 6,
    name: 'Tehran',
    imagePath: '/images/iran.png',
  },
];

export const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'prev' | 'next'>('next');
  const totalImages = DestinationsImage.length;

  const getPrevIndex = (index: number) =>
    (index - 1 + totalImages) % totalImages;
  const getNextIndex = (index: number) => (index + 1) % totalImages;

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex(getNextIndex(currentIndex));
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex(getPrevIndex(currentIndex));
  };

  // const positions = ['left', 'center', 'right'];

  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      {/* ... (keep your original text content) */}

      {/* Image Slider */}
      <div className="relative flex items-center h-[430px] justify-center w-full md:max-w-[58rem] max-w-xl">
        <AnimatePresence mode="popLayout" custom={direction}>
          {[
            getPrevIndex(currentIndex),
            currentIndex,
            getNextIndex(currentIndex),
          ].map((index, i) => {
            const isFocused = i === 1;
            const image = DestinationsImage[index];

            return (
              <motion.div
                key={image.id}
                layout
                custom={direction}
                initial={{
                  x: direction === 'next' ? 100 : -100,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: 0,
                  opacity: isFocused ? 1 : 0.7,
                  scale: 1,
                  zIndex: isFocused ? 10 : 1,
                }}
                exit={{
                  x: direction === 'next' ? -100 : 100,
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className={`absolute flex-shrink-0 ${
                  isFocused ? 'w-[346px] h-[430px]' : 'w-[275px] h-[341px]'
                }`}
                style={{
                  left: i === 0 ? '0%' : undefined,
                  right: i === 2 ? '0%' : undefined,
                  transform: i === 1 ? 'translateX(-50%)' : undefined,
                }}
              >
                <Image
                  src={image.imagePath}
                  alt={image.name}
                  width={isFocused ? 346 : 275}
                  height={isFocused ? 430 : 341}
                  className="rounded-lg object-cover w-full h-full"
                />
                {isFocused && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-lg text-sm font-semibold text-black w-[50%] text-center">
                    {image.name}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
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
