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

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-3xl md:text-5xl font-bold mb-4 max-w-[335px] md:max-w-[520px] md:leading-14">
        Escape to top Vacation destinations
      </p>
      <p className="text-[16px] font-medium max-w-[356px] md:max-w-xl mb-8 text-[#78726D]">
        Discover the worlds most popular vacation spots, from tropical beaches
        to vibrant cityscapes, perfect for creating unforgettable memories.
      </p>
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
                className="image-container"
                style={{
                  position: 'absolute',
                  flexShrink: 0,
                  width: isFocused ? '346px' : '275px',
                  height: isFocused ? '430px' : '341px',
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
                  style={{
                    borderRadius: '0.5rem',
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
                {isFocused && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.5rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '1rem 10rem',
                      borderRadius: '0.5rem',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: 'black',
                      width: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {image.name}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {/* Navigation Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1rem',
          gap: '1rem',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            backgroundColor: 'white',
            border: '1px solid #E9E8E5',
            borderRadius: '9999px',
            padding: '0.5rem 1.5rem',
            cursor: 'pointer',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#D1D5DB')
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: 'white',
            border: '1px solid #E9E8E5',
            borderRadius: '9999px',
            padding: '0.5rem 1.5rem',
            cursor: 'pointer',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#D1D5DB')
          }
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
