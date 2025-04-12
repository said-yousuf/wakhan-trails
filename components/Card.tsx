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
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.5rem',
        padding: '1rem',
        width: '100%',
        fontSize: '0.875rem',
        fontFamily: 'sans-serif',
        transition: 'all 0.2s',
        border: '1px solid #f3f4f6',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '9999px',
              padding: '0.375rem',
            }}
          >
            <Plane size={16} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontWeight: '600' }}>{airline}</p>
            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
              {flightNumber}
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.75rem',
              color: '#4b5563',
            }}
          >
            <Clock size={12} style={{ marginRight: '0.25rem' }} />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: '1rem', fontWeight: '700' }}>{departureTime}</p>
          <div style={{ display: 'flex', gap: '0.125rem' }}>
            <CircleArrowUp size={15} />
            <p
              style={{
                fontSize: '0.75rem',
                color: '#78726D',
                fontWeight: '600',
              }}
            >
              {departureCity} ({departureCode})
            </p>
          </div>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', margin: '0 0.5rem' }}
        >
          <Plane size={14} style={{ color: '#6b7280' }} />
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '1rem', fontWeight: '700' }}>{arrivalTime}</p>
          <div style={{ display: 'flex', gap: '0.125rem' }}>
            <CircleArrowUp size={15} />
            <p
              style={{
                fontSize: '0.75rem',
                color: '#78726D',
                fontWeight: '600',
                display: 'flex',
              }}
            >
              {arrivalCity} ({arrivalCode})
            </p>
          </div>
        </div>
      </div>

      {stops > 0 && (
        <div
          style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            fontStyle: 'italic',
            marginBottom: '0.5rem',
          }}
        >
          {stops === 1 ? '1 stop' : `${stops} stops`}
          {stopCities.length > 0 ? ` via ${stopCities.join(', ')}` : ''}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px dashed #e5e7eb',
          paddingTop: '0.75rem',
        }}
      >
        <span
          style={{
            color: '#78726D',
            padding: '0.125rem 0.5rem',
            fontSize: '0.75rem',
            fontWeight: '500',
          }}
        >
          {travelClass} Class
        </span>
        <p style={{ fontSize: '1.125rem', fontWeight: '700' }}>${price}</p>
      </div>
    </div>
  );
}
