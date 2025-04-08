import {
  BaggageClaim,
  ChevronsRight,
  Clock,
  Info,
  Plane,
  Users,
} from 'lucide-react';

export default function FlightSearchResult({
  airline = 'Delta Airlines',
  flightNumber = 'DL1234',
  departureTime = '07:45',
  departureDate = '10 Apr',
  departureCity = 'New York',
  departureCode = 'JFK',
  arrivalTime = '10:30',
  arrivalDate = '10 Apr',
  arrivalCity = 'Los Angeles',
  arrivalCode = 'LAX',
  duration = '5h 45m',
  stops = 0,
  stopCities = [],
  travelClass = 'Economy',
  price = 349,
  seats = 3,
  baggage = '1x23kg',
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full font-sans transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div>
            <p className="font-semibold text-gray-800">{airline}</p>
            <p className="text-xs text-gray-500">{flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">${price}</p>
          <p className="text-xs text-gray-500">per person</p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6 items-center">
        <div className="col-span-2">
          <p className="text-2xl font-bold">{departureTime}</p>
          <p className="text-sm text-gray-500">{departureDate}</p>
          <p className="text-sm text-gray-700 mt-1">{departureCity}</p>
          <p className="text-xs text-gray-500">{departureCode}</p>
        </div>

        <div className="col-span-3 flex flex-col items-center justify-center">
          <div className="flex items-center w-full">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <div className="mx-2 flex flex-col items-center">
              <div className="text-xs text-gray-500 mb-1">{duration}</div>
              <Plane size={20} className="text-blue-500 transform rotate-90" />
              <div className="text-xs text-gray-500 mt-1">
                {stops === 0
                  ? 'Direct'
                  : stops === 1
                  ? '1 stop'
                  : `${stops} stops`}
              </div>
            </div>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>

          {stops > 0 && stopCities.length > 0 && (
            <div className="text-xs text-gray-500 mt-1">
              {stopCities.join(', ')}
            </div>
          )}
        </div>

        <div className="col-span-2 text-right">
          <p className="text-2xl font-bold">{arrivalTime}</p>
          <p className="text-sm text-gray-500">{arrivalDate}</p>
          <p className="text-sm text-gray-700 mt-1">{arrivalCity}</p>
          <p className="text-xs text-gray-500">{arrivalCode}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex space-x-6">
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-1" />
            <span className="text-sm">{seats} left</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BaggageClaim size={16} className="mr-1" />
            <span className="text-sm">{baggage}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-sm text-gray-600 px-2 py-1 bg-gray-100 rounded">
            {travelClass}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
            Select
            <ChevronsRight size={16} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button className="text-blue-500 text-sm flex items-center hover:text-blue-700 transition-colors">
          <Info size={14} className="mr-1" />
          View flight details
        </button>
      </div>
    </div>
  );
}
