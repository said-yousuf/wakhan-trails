import Image from 'next/image';

interface ButtonProps {
  children: string;
  iconSrc?: string;
  iconSize?: number;
  width?: number;
  onClick?: () => void;
}

export const Button = ({
  children,
  iconSrc,
  iconSize = 18,
  width = 108,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-[14px] py-[11px] gap-[10px] w-[${width}px] h-[41px]  
       bg-gradient-to-b from-[#FF6064] to-[#EA1E24]
       rounded-[62px] text-white font-bold text-sm
       hover:opacity-90 active:translate-y-[2px] cursor-pointer`}
      onClick={onClick}
    >
      {children}
      {iconSrc && (
        <Image src={iconSrc} alt="Icon" width={iconSize} height={iconSize} />
      )}
    </button>
  );
};
