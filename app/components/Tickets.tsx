import { ChevronUpCircleIcon, Plane } from 'lucide-react';

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
    <div className="bg-white shadow-lg rounded-lg p-4 w-full font-sans transform transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white rounded-full p-2">
            <Plane size={20} />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-sm">{airline}</p>
            <p className="text-xs text-gray-500">{flightNumber}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-start">
          <p className="text-2xl font-bold">{departureTime}</p>
          <p className="text-sm text-gray-600 flex items-center">
            <ChevronUpCircleIcon size={18} className="mr-1" />
            {departureCity} ({departureCode})
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-px bg-gray-300 mr-2"></div>
          <Plane size={16} className="text-gray-500" />
          <div className="w-8 h-px bg-gray-300 ml-2"></div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{arrivalTime}</p>
          <p className="text-sm text-gray-600">
            {arrivalCity} ({arrivalCode})
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-dashed pt-4">
        <p className="text-sm text-gray-600">{travelClass}</p>
        <p className="text-xl font-bold">${price}</p>
      </div>
    </div>
  );
};

export const Tickets = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-[500px]">
        Explore flights to top destinations
      </p>
      <p className="text-sm sm:text-base md:text-[16px] font-medium max-w-xl mb-8 text-[#78726D]">
        Showing roundtrip flights for: March 16 - March 20
      </p>
      <div className="bg-[#F0282D] p-10 rounded-2xl w-full md:w-[1085px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FlightData.map((flight) => (
            <FlightCard key={flight.flightNumber} {...flight} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="flex flex-row justify-center items-center px-6 py-2 bg-white rounded-full text-lg font-medium cursor-pointer hover:bg-gray-200 hover:shadow-lg transition duration-200">
            View all flights
          </button>
        </div>
      </div>
    </div>
  );
};
