'use client';
import { Button } from '@/components/Button';
import FlightSearchResult from '@/components/Card';
import { SearchInput } from '@/components/Input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { flights } from '../_static/flight-data';

type InputValue = Date | { id: string; name: string } | string | undefined;

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const qsDestination = searchParams.get('destination') || '';
  const qsDeparting = searchParams.get('departing') || '';
  const qsLeaving = searchParams.get('leaving') || '';
  const qsAdults = searchParams.get('adults') || '';

  const [destination, setDestination] = useState<string>(qsDestination);
  const [departing, setDeparting] = useState<string>(qsDeparting);
  const [leaving, setLeaving] = useState<string>(qsLeaving);
  const [adults, setAdults] = useState<string>(qsAdults);

  const [searchResults, setSearchResults] = useState<typeof flights>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const viewAll = searchParams.get('view') === 'all';

  const handleLocationChange = (value: InputValue) => {
    console.log('Location changed:', value);
    if (value && typeof value === 'object' && 'id' in value) {
      setDestination(value.id);
    }
  };

  const handleArrivingChange = (value: InputValue) => {
    console.log('Arriving date changed:', value);
    if (value instanceof Date) {
      setDeparting(value.toLocaleDateString('en-CA'));
    }
  };

  const handleLeavingChange = (value: InputValue) => {
    console.log('Leaving date changed:', value);
    if (value instanceof Date) {
      setLeaving(value.toLocaleDateString('en-CA'));
    }
  };

  const handlePersonsChange = (value: InputValue) => {
    console.log('Persons changed:', value);
    if (typeof value === 'string') {
      setAdults(value);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const performSearch = (dest: string, dep: string, _adults: string) => {
    const codeMapping: Record<string, string> = {
      kbl: 'KBL',
      mzr: 'MZR',
      her: 'HEA',
      kan: 'KDH',
      dxz: 'DXB',
      ist: 'IST',
      doh: 'DOH',
      del: 'DEL',
      isb: 'ISB',
    };

    const mappedDestination = codeMapping[dest] || dest;

    const results = flights.filter((flight) => {
      return (
        flight.arrivalCode.toLowerCase() === mappedDestination.toLowerCase() &&
        flight.departureDate === dep
      );
    });
    console.log('Search results:', results);
    setSearchResults(results);
  };

  const handleSearch = () => {
    console.log('Search triggered with:', {
      destination,
      departing,
      leaving,
      adults,
    });
    if (!destination || !departing || !adults) {
      console.error('Missing required search fields');
      return;
    }

    router.push(
      `/flight?destination=${encodeURIComponent(
        destination
      )}&departing=${encodeURIComponent(
        departing
      )}&leaving=${encodeURIComponent(leaving)}&adults=${encodeURIComponent(
        adults
      )}`
    );
  };

  useEffect(() => {
    if (viewAll) {
      setHasSearched(true);
      setSearchResults(flights);
      return;
    }

    if (qsDestination && qsDeparting && qsAdults) {
      setHasSearched(true);
      performSearch(qsDestination, qsDeparting, qsAdults);
    }
  }, [qsDestination, qsDeparting, qsAdults, viewAll]);

  return (
    <>
      <div
        style={{ border: '1px solid #e5e7eb' }}
        className="md:flex md:items-center mx-auto md:w-[895.99px] w-full md:h-[80px] -translate-x-[0.01px]
          bg-white shadow-lg shadow-black/10 md:rounded-[96px] rounded-2xl px-[15px] gap-4 my-3 grid grid-cols-1 py-4 md:py-0"
      >
        <SearchInput
          placeholder="Location"
          type="dropdown"
          imagePath="down"
          width={18}
          height={18}
          value={destination}
          onValueChange={handleLocationChange}
        />
        <SearchInput
          placeholder="Arriving"
          imagePath="calender"
          type="calendar"
          width={20}
          height={20}
          value={departing ? new Date(departing) : undefined}
          onValueChange={handleArrivingChange}
        />
        <SearchInput
          placeholder="Leaving"
          imagePath="calender"
          type="calendar"
          width={20}
          height={20}
          value={leaving ? new Date(leaving) : undefined}
          onValueChange={handleLeavingChange}
        />
        <SearchInput
          placeholder="Persons"
          imagePath="person"
          width={18}
          height={18}
          value={adults}
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

      <div className="grid grid-cols-1 gap-4 mx-auto md:w-[1082px] w-full md:grid-cols-3">
        {hasSearched && searchResults.length === 0 ? (
          <p className="text-gray-500 text-lg py-8 text-center font-medium col-span-full">
            No flights found for your search criteria.
          </p>
        ) : (
          searchResults.map((flight, index) => (
            <FlightSearchResult key={index} {...flight} />
          ))
        )}
      </div>
    </>
  );
};
