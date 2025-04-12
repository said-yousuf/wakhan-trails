'use client';

import { ChevronUpCircleIcon, Plane } from 'lucide-react';
import { redirect } from 'next/navigation';

const FlightData = [
  {
    airline: 'Emirates',
    flightNumber: 'EK202',
    departureCity: 'New York',
    departureCode: 'JFK',
    departureTime: '22:30',
    arrivalCity: 'Dubai',
    arrivalCode: 'DXB',
    arrivalTime: '19:15',
    duration: '12h 45m',
    travelClass: 'First Class',
    price: 1200,
  },
  {
    airline: 'Qatar Airways',
    flightNumber: 'QR305',
    departureCity: 'London',
    departureCode: 'LHR',
    departureTime: '15:20',
    arrivalCity: 'Doha',
    arrivalCode: 'DOH',
    arrivalTime: '23:50',
    duration: '6h 30m',
    travelClass: 'Business Class',
    price: 850,
  },
  {
    airline: 'Singapore Airlines',
    flightNumber: 'SQ318',
    departureCity: 'Singapore',
    departureCode: 'SIN',
    departureTime: '09:00',
    arrivalCity: 'Tokyo',
    arrivalCode: 'NRT',
    arrivalTime: '17:30',
    duration: '7h 30m',
    travelClass: 'Economy Class',
    price: 600,
  },
  {
    airline: 'Lufthansa',
    flightNumber: 'LH711',
    departureCity: 'Tokyo',
    departureCode: 'HND',
    departureTime: '13:45',
    arrivalCity: 'Frankfurt',
    arrivalCode: 'FRA',
    arrivalTime: '18:30',
    duration: '11h 45m',
    travelClass: 'Premium Economy',
    price: 750,
  },
  {
    airline: 'Delta Airlines',
    flightNumber: 'DL150',
    departureCity: 'Atlanta',
    departureCode: 'ATL',
    departureTime: '08:15',
    arrivalCity: 'Paris',
    arrivalCode: 'CDG',
    arrivalTime: '22:50',
    duration: '8h 35m',
    travelClass: 'Business Class',
    price: 900,
  },
  {
    airline: 'Air Canada',
    flightNumber: 'AC859',
    departureCity: 'Toronto',
    departureCode: 'YYZ',
    departureTime: '17:00',
    arrivalCity: 'Vancouver',
    arrivalCode: 'YVR',
    arrivalTime: '19:15',
    duration: '5h 15m',
    travelClass: 'Economy Class',
    price: 400,
  },
];

const FlightCard = ({
  airline = 'flydubai',
  flightNumber = 'A330-300',
  departureCity = 'Kabul',
  departureCode = 'AFG',
  departureTime = '17:30',
  arrivalCity = 'Dubai',
  arrivalCode = 'UAE',
  arrivalTime = '18:50',
  duration = '2h 20m',
  travelClass = 'Business Class',
  price = 450,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '1rem',
        width: '100%',
        fontFamily: 'sans-serif',
        transform: 'translateY(0)',
        transition: 'transform 0.3s',
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = 'translateY(-8px)')
      }
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.5rem',
            }}
          >
            <Plane size={20} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{airline}</p>
            <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>
              {flightNumber}
            </p>
          </div>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{duration}</p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{departureTime}</p>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#4B5563',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ChevronUpCircleIcon size={18} style={{ marginRight: '0.25rem' }} />
            {departureCity} ({departureCode})
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Plane size={16} style={{ color: '#6B7280' }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{arrivalTime}</p>
          <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>
            {arrivalCity} ({arrivalCode})
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px dashed #E5E7EB',
          paddingTop: '1rem',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: '#4B5563' }}>{travelClass}</p>
        <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>${price}</p>
      </div>
    </div>
  );
};

export const Tickets = () => {
  const handleViewAll = () => {
    redirect('/flight?view=all');
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-[500px] md:leading-14">
        Explore flights to top destinations
      </p>
      <p className="text-[16px] sm:text-base md:text-[16px] font-medium max-w-xl mb-8 text-[#78726D]">
        Showing roundtrip flights for: March 16 - March 20
      </p>
      <div className="bg-[#F0282D] p-4 md:p-10 rounded-2xl w-full md:w-[1085px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {FlightData.map((flight) => (
            <FlightCard key={flight.flightNumber} {...flight} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleViewAll}
            className="flex flex-row justify-center items-center px-6 py-2 bg-white rounded-full text-lg font-medium cursor-pointer hover:bg-gray-200 hover:shadow-lg transition duration-200"
          >
            View all flights
          </button>
        </div>
      </div>
    </div>
  );
};
