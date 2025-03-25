'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CloudAnimationProps = {
  countRTL?: number; // Number of clouds moving right-to-left
  countLTR?: number; // Number of clouds moving left-to-right
  cloudSrc?: string;
  cloudWidth?: number;
  cloudHeight?: number;
  verticalRange?: { min: number; max: number }; // Vertical offset in percentage (from bottom)
  baseDurationRTL?: number;
  baseDurationLTR?: number;
};

const CloudAnimation: React.FC<CloudAnimationProps> = ({
  countRTL = 2,
  countLTR = 2,
  cloudSrc = '/images/cloud.png',
  cloudWidth = 600,
  cloudHeight = 370,
  verticalRange = { min: 0, max: 50 },
  baseDurationRTL = 60,
  baseDurationLTR = 80,
}) => {
  // Return a random percentage string between min and max
  const getRandomVertical = () =>
    `${Math.floor(
      Math.random() * (verticalRange.max - verticalRange.min + 1) +
        verticalRange.min
    )}%`;

  // Create clouds moving right-to-left (start at right, move off left)
  const rtlClouds = Array.from({ length: countRTL }).map((_, index) => {
    const delay = Math.random() * 5; // Random delay up to 5 seconds
    return (
      <motion.div
        key={`rtl-${index}`}
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: baseDurationRTL + Math.random() * 10, // Randomly vary duration
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          delay,
        }}
        className="absolute z-30"
        style={{
          bottom: getRandomVertical(),
          left: 0,
          width: `${cloudWidth}px`,
        }}
      >
        <Image
          src={cloudSrc}
          alt={`Cloud RTL ${index}`}
          width={cloudWidth}
          height={cloudHeight}
          className="opacity-80"
        />
      </motion.div>
    );
  });

  // Create clouds moving left-to-right (start at left, move off right)
  const ltrClouds = Array.from({ length: countLTR }).map((_, index) => {
    const delay = Math.random() * 5;
    return (
      <motion.div
        key={`ltr-${index}`}
        initial={{ x: '-120%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: baseDurationLTR + Math.random() * 10,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          delay,
        }}
        className="absolute z-20"
        style={{
          bottom: getRandomVertical(),
          right: 0,
          width: `${cloudWidth}px`,
        }}
      >
        <Image
          src={cloudSrc}
          alt={`Cloud LTR ${index}`}
          width={cloudWidth}
          height={cloudHeight}
          className="opacity-70"
        />
      </motion.div>
    );
  });

  return (
    <>
      {rtlClouds}
      {ltrClouds}
    </>
  );
};

export default CloudAnimation;
