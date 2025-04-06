import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import Image from 'next/image';
import React, { useState } from 'react';

interface LocationData {
  id: string;
  name: string;
}

type InputValue = Date | LocationData | string | undefined;

interface SearchInputProps {
  placeholder: string;
  imagePath?: string;
  width?: number;
  height?: number;
  type?: 'default' | 'calendar' | 'dropdown';
  onValueChange?: (value: InputValue) => void;
}

export const SearchInput = ({
  placeholder,
  imagePath,
  width = 18,
  height = 18,
  type = 'default',
  onValueChange,
}: SearchInputProps) => {
  const [date, setDate] = useState<Date>();
  const [location, setLocation] = useState<string>('');
  const [text, setText] = useState<string>('');

  const locations = [
    { id: 'nyc', name: 'New York City' },
    { id: 'sf', name: 'San Francisco' },
    { id: 'chi', name: 'Chicago' },
    { id: 'la', name: 'Los Angeles' },
    { id: 'mia', name: 'Miami' },
  ];

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onValueChange) {
      onValueChange(selectedDate);
    }
  };

  const handleLocationChange = (value: string) => {
    setLocation(value);
    if (onValueChange) {
      const selectedLocation = locations.find((loc) => loc.id === value);
      onValueChange(selectedLocation);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  if (type === 'default') {
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
          value={text}
          onChange={handleTextChange}
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
  }

  if (type === 'calendar') {
    return (
      <div className="relative md:w-[175.5px] w-full">
        <Popover>
          <PopoverTrigger asChild>
            <div
              className="relative md:w-[175.5px] w-full h-[44px] flex items-center
               bg-white border border-white shadow-[0px_1px_2px_rgba(188,188,188,0.24),0px_0px_0px_1px_rgba(0,0,0,0.08)]
               rounded-full px-4 cursor-pointer"
            >
              <div className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pr-8">
                {date ? format(date, 'PPP') : placeholder}
              </div>
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
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  if (type === 'dropdown') {
    return (
      <div className="relative md:w-[175.5px] w-full">
        <Select value={location} onValueChange={handleLocationChange}>
          <SelectTrigger className="w-full !h-[44px] bg-white border border-white shadow-[0px_1px_2px_rgba(188,188,188,0.24),0px_0px_0px_1px_rgba(0,0,0,0.08)] rounded-full px-4">
            <SelectValue placeholder={placeholder} />
            {imagePath && (
              <Image
                src={`/icons/${imagePath}.png`}
                alt="Icon"
                width={width}
                height={height}
                className="absolute right-4"
              />
            )}
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.id} value={loc.id}>
                {loc.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return null;
};
