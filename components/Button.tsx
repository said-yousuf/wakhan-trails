import Image from 'next/image';

interface ButtonProps {
  children: string;
  iconSrc?: string;
  iconSize?: number;
  width?: number;
}

export const Button = ({
  children,
  iconSrc,
  iconSize = 18,
  width = 108,
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-[14px] py-[11px] gap-[10px] w-[${width}px] h-[41px]  
                 bg-gradient-to-b from-[#FF6064] to-[#EA1E24] shadow-[0px_0px_7px_rgba(255,245,245,0.25),0px_2.2px_0px_#C1161A] 
                 rounded-[62px] text-white font-bold text-sm transition-all duration-300 
                 hover:opacity-90 active:translate-y-[2px] active:shadow-[0px_0px_5px_rgba(255,245,245,0.2),0px_1px_0px_#C1161A]`}
    >
      {children}
      {iconSrc && (
        <Image src={iconSrc} alt="Icon" width={iconSize} height={iconSize} />
      )}
    </button>
  );
};
