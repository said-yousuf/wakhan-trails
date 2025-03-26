import { Button } from '@/components/Button';
import { SearchInput } from '@/components/Input';

export const Search = () => {
  return (
    <div
      className="md:flex md:items-center mx-auto md:w-[895.99px] w-full md:h-[80px] -translate-x-[0.01px] 
    bg-white border border-[#ECECEC] shadow-lg shadow-black/10 md:rounded-[96px] rounded-2xl px-[15px] gap-4 my-3 grid grid-cols-1 py-4 md:py-0"
    >
      <SearchInput
        placeholder="Location"
        imagePath="down"
        width={18}
        height={18}
      />

      <SearchInput
        placeholder="Arriving"
        imagePath="calender"
        width={20}
        height={20}
      />

      <SearchInput
        placeholder="Leaving"
        imagePath="calender"
        width={20}
        height={20}
      />

      <SearchInput
        placeholder="Persons"
        imagePath="person"
        width={18}
        height={18}
      />

      <Button iconSrc="/icons/search.png" iconSize={20} width={108}>
        Search
      </Button>
    </div>
  );
};
