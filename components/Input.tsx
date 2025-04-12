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
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface LocationData {
  id: string;
  name: string;
}

export type InputValue = Date | LocationData | string | undefined;

interface SearchInputProps {
  placeholder: string;
  imagePath?: string;
  width?: number;
  height?: number;
  type?: 'default' | 'calendar' | 'dropdown';
  onValueChange?: (value: InputValue) => void;
  value?: InputValue;
}

export const SearchInput = ({
  placeholder,
  imagePath,
  width = 18,
  height = 18,
  type = 'default',
  onValueChange,
  value,
}: SearchInputProps) => {
  //
  // For default text input:
  //
  const [internalText, setInternalText] = useState<string>('');
  useEffect(() => {
    if (typeof value === 'string') {
      setInternalText(value);
    }
  }, [value]);

  //
  // For calendar input:
  //
  const [internalDate, setInternalDate] = useState<Date | undefined>(undefined);
  useEffect(() => {
    if (value instanceof Date) {
      setInternalDate(value);
    }
  }, [value]);

  //
  // For dropdown input:
  //
  const [internalLocation, setInternalLocation] = useState<string>('');
  useEffect(() => {
    if (value && typeof value === 'object' && 'id' in value) {
      setInternalLocation(value.id);
    } else if (typeof value === 'string') {
      setInternalLocation(value);
    }
  }, [value]);

  const locations = [
    { id: 'kbl', name: 'Kabul' },
    { id: 'mzr', name: 'Mazar-i-Sharif' },
    { id: 'her', name: 'Herat' },
    { id: 'kan', name: 'Kandahar' },
    { id: 'dxz', name: 'Dubai' },
    { id: 'ist', name: 'Istanbul' },
    { id: 'doh', name: 'Doha' },
    { id: 'del', name: 'Delhi' },
    { id: 'isb', name: 'Islamabad' },
  ];

  // Handlers:
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalText(e.target.value);
    if (onValueChange) {
      onValueChange(e.target.value);
    }
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setInternalDate(selectedDate);
    if (onValueChange) {
      onValueChange(selectedDate);
    }
  };

  const handleLocationChange = (val: string) => {
    setInternalLocation(val);
    if (onValueChange) {
      const selectedLocation = locations.find((loc) => loc.id === val);
      onValueChange(selectedLocation);
    }
  };

  //
  // Render by type:
  //
  if (type === 'default') {
    return (
      <div
        style={{ border: '1px solid #e5e7eb' }}
        className="relative md:w-[175.5px] w-full h-[44px] flex items-center
         bg-white border border-white
         rounded-full px-4"
      >
        <input
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pr-8"
          value={internalText}
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
              style={{ border: '1px solid #e5e7eb' }}
              className="relative md:w-[175.5px] w-full h-[44px] flex items-center
               bg-white border border-white 
               rounded-full px-4 cursor-pointer"
            >
              <div className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 pr-8">
                {internalDate ? (
                  internalDate.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                ) : (
                  <span className="text-gray-400">{placeholder}</span>
                )}
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
          <PopoverContent className="w-auto p-0 bg-white mt-2" align="start">
            <Calendar
              selected={internalDate}
              onSelect={(selectedDate) => {
                if (selectedDate) {
                  handleDateSelect(selectedDate as Date);
                }
              }}
              className="border-none shadow-lg"
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  if (type === 'dropdown') {
    return (
      <div className="relative md:w-[175.5px] w-full">
        <Select value={internalLocation} onValueChange={handleLocationChange}>
          <SelectTrigger
            style={{ border: '1px solid #e5e7eb' }}
            className="w-full !h-[44px] bg-white rounded-full px-4"
          >
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
          <SelectContent className="mt-2">
            {locations.map((loc) => (
              <SelectItem key={loc.id} value={loc.id}>
                <MapPin />
                <span className="font-normal text-[14px]">{loc.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return null;
};
