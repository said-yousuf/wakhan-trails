'use client';
import { Button } from '@/components/Button';
import { SearchInput } from '@/components/Input';
import { useRef } from 'react';

type InputValue = Date | { id: string; name: string } | string | undefined;

export const Search = () => {
  const locationRef = useRef<{ id: string; name: string } | null>(null);
  const arrivingRef = useRef<Date | null>(null);
  const leavingRef = useRef<Date | null>(null);
  const personsRef = useRef<string>('');

  const handleLocationChange = (value: InputValue) => {
    if (value && typeof value === 'object' && 'id' in value) {
      locationRef.current = value;
    }
  };

  const handleArrivingChange = (value: InputValue) => {
    if (value instanceof Date) {
      arrivingRef.current = value;
    }
  };

  const handleLeavingChange = (value: InputValue) => {
    if (value instanceof Date) {
      leavingRef.current = value;
    }
  };

  const handlePersonsChange = (value: InputValue) => {
    if (typeof value === 'string') {
      personsRef.current = value;
    }
  };

  const handleSearch = () => {
    const searchData = {
      location: locationRef.current,
      arriving: arrivingRef.current,
      leaving: leavingRef.current,
      persons: personsRef.current,
    };
    console.log('Search Data:', searchData);
  };

  return (
    <div
      className="md:flex md:items-center mx-auto md:w-[895.99px] w-full md:h-[80px] -translate-x-[0.01px]
       bg-white border border-[#ECECEC] shadow-lg shadow-black/10 md:rounded-[96px] rounded-2xl px-[15px] gap-4 my-3 grid grid-cols-1 py-4 md:py-0"
    >
      <SearchInput
        placeholder="Location"
        type="dropdown"
        imagePath="down"
        width={18}
        height={18}
        onValueChange={handleLocationChange}
      />
      <SearchInput
        placeholder="Arriving"
        imagePath="calender"
        type="calendar"
        width={20}
        height={20}
        onValueChange={handleArrivingChange}
      />
      <SearchInput
        placeholder="Leaving"
        imagePath="calender"
        type="calendar"
        width={20}
        height={20}
        onValueChange={handleLeavingChange}
      />
      <SearchInput
        placeholder="Persons"
        imagePath="person"
        width={18}
        height={18}
        onValueChange={handlePersonsChange}
      />
      <Button
        iconSrc="/icons/search.png"
        iconSize={20}
        width={108}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};
