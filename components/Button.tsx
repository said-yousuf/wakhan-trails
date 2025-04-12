import Image from 'next/image';
import styles from './button.module.css';

interface ButtonProps {
  children: string;
  iconSrc?: string;
  iconSize?: number;
  width?: number;
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  iconSrc,
  iconSize = 18,
  width = 108,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className || ''} w-[${width}] `}
      onClick={onClick}
    >
      {children}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt="Icon"
          width={iconSize}
          height={iconSize}
          className={className}
        />
      )}
    </button>
  );
};
