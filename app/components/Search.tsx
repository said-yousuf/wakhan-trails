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

  // Read query parameters from URL for persisting search values
  const qsDestination = searchParams.get('destination') || '';
  const qsDeparting = searchParams.get('departing') || '';
  const qsLeaving = searchParams.get('leaving') || '';
  const qsAdults = searchParams.get('adults') || '';

  // Controlled state for inputs (initial values come from URL if present)
  const [destination, setDestination] = useState<string>(qsDestination);
  const [departing, setDeparting] = useState<string>(qsDeparting);
  const [leaving, setLeaving] = useState<string>(qsLeaving);
  const [adults, setAdults] = useState<string>(qsAdults);

  const [searchResults, setSearchResults] = useState<typeof flights>([]);
  const [hasSearched, setHasSearched] = useState(false); // flag to avoid premature "No flights found" message

  // Handlers for updating state from input changes:
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

  // When user clicks search, update URL and set flag, then run search:
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

    setHasSearched(true);

    // Update URL with query parameters so that the state persists on redirection.
    router.push(
      `/flight?destination=${encodeURIComponent(
        destination
      )}&departing=${encodeURIComponent(
        departing
      )}&leaving=${encodeURIComponent(leaving)}&adults=${encodeURIComponent(
        adults
      )}`
    );

    performSearch(destination, departing, adults);
  };

  // If query parameters exist, run the search automatically on mount.
  useEffect(() => {
    if (qsDestination && qsDeparting && qsAdults) {
      setHasSearched(true);
      performSearch(qsDestination, qsDeparting, qsAdults);
    }
  }, [qsDestination, qsDeparting, qsAdults]);

  return (
    <>
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

      <div className="grid grid-cols-1 gap-4 px-4 mx-auto md:w-[895.99px] w-full">
        {hasSearched && searchResults.length === 0 ? (
          <p className="text-gray-500 text-lg py-8 text-center font-medium">
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
