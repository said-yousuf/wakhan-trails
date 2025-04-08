import { CircleArrowUp, Clock, Plane } from 'lucide-react';

export default function FlightSearchResult({
  airline = 'Delta Airlines',
  flightNumber = 'DL1234',
  departureTime = '07:45',
  departureCity = 'New York',
  departureCode = 'JFK',
  arrivalTime = '10:30',
  arrivalCity = 'Los Angeles',
  arrivalCode = 'LAX',
  duration = '5h 45m',
  stops = 0,
  stopCities = [],
  travelClass = 'Economy',
  price = 349,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full text-sm font-sans transition-all duration-200 hover:shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white rounded-full p-1.5">
            <Plane size={16} />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">{airline}</p>
            <p className="text-xs text-gray-500">{flightNumber}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center text-xs text-gray-600">
            <Clock size={12} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex flex-col">
          <p className="text-base font-bold">{departureTime}</p>
          <div className="flex gap-0.5">
            <CircleArrowUp size={15} />
            <p className="text-xs text-[#78726D] font-semibold">
              {departureCity} ({departureCode})
            </p>
          </div>
        </div>
        <div className="flex items-center mx-2">
          <Plane size={14} className="text-gray-500 " />
        </div>
        <div className="text-right">
          <p className="text-base font-bold">{arrivalTime}</p>
          <div className="flex gap-0.5">
            <CircleArrowUp size={15} />
            <p className="text-xs text-[#78726D] font-semibold flex">
              {arrivalCity} ({arrivalCode})
            </p>
          </div>
        </div>
      </div>

      {stops > 0 && (
        <div className="text-xs text-gray-500 italic mb-2">
          {stops === 1 ? '1 stop' : `${stops} stops`}
          {stopCities.length > 0 ? ` via ${stopCities.join(', ')}` : ''}
        </div>
      )}

      <div className="flex items-center justify-between border-t border-dashed pt-3">
        <span className=" text-[#78726D] px-2 py-0.5  text-xs font-medium">
          {travelClass} Class
        </span>
        <p className="text-lg font-bold ">${price}</p>
      </div>
    </div>
  );
}
