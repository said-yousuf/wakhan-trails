import Image from 'next/image';

interface SearchInputProps {
  placeholder: string;
  imagePath?: string;
  width?: number;
  height?: number;
}

export const SearchInput = ({
  placeholder,
  imagePath,
  width = 18,
  height = 18,
}: SearchInputProps) => {
  return (
    <div
      className="relative md:w-[175.5px] w-full h-[44px] flex items-center 
          bg-white border border-white shadow-[0px_1px_2px_rgba(188,188,188,0.24),0px_0px_0px_1px_rgba(0,0,0,0.08)] 
          rounded-full px-4"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pr-8"
      />
      {imagePath && (
        <Image
          src={`/icons/${imagePath}.png`}
          alt="Icon"
          width={width}
          height={height}
          className="absolute right-4"
        />
      )}
    </div>
  );
};
