import { cn } from '@/lib/utils';
import { RiLoader4Fill } from '@remixicon/react';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSpinner({
  size = 'large',
  show = true,
  children,
  className = 'text-gray-600',
}: SpinnerContentProps) {
  return (
    <span
      className={cn(
        'flex-col items-center h-screen justify-center',
        spinnerVariants({ show })
      )}
    >
      <RiLoader4Fill className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
}
