import Image from 'next/image';

interface LocationData {
  name: string;
  imageUrl: string;
  gridClass?: string;
  height?: number;
  width?: number;
}

export const Locations = () => {
  const locations: LocationData[] = [
    {
      name: 'Herat',
      imageUrl: '/images/herat.png',
      gridClass: 'col-span-1 row-span-1',
      height: 361,
      width: 347,
    },
    {
      name: 'Badakhshan',
      imageUrl: '/images/badakshan.png',
      gridClass: 'col-span-1 row-span-1',
      height: 361,
      width: 347,
    },
    {
      name: 'Kandahar',
      imageUrl: '/images/kandahar.png',
      gridClass: 'col-span-1 row-span-1',
      height: 361,
      width: 347,
    },
    {
      name: 'Bamyan',
      imageUrl: '/images/bamyan.png',
      gridClass: 'col-span-2 row-span-1',
      height: 361,
      width: 712,
    },
    {
      name: 'Mazar e sharif',
      imageUrl: '/images/mazar.png',
      gridClass: 'col-span-1 row-span-1',
      height: 361,
      width: 347,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <p className="text-3xl md:text-5xl font-bold mb-4 max-w-[600px]">
        Discover unforgettable places in Afghanistan
      </p>
      <p className="text-[14px] md:text-[16px] font-medium max-w-xl mb-8 text-[#78726D]">
        Experience the Unforgettable Provinces of Afghanistan{' '}
      </p>
      <div className="w-full max-w-6xl px-4">
        <div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-4 grid-cols-1 gap-4">
          {locations.map((location) => (
            <div
              key={location.name}
              className={`relative overflow-hidden rounded-lg shadow-md md:${location.gridClass}`}
            >
              <div className="relative w-full h-[361px]">
                <Image
                  src={location.imageUrl}
                  alt={location.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-white text-center p-2 font-bold text-xl">
                {location.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
