import Image from 'next/image';

const BrandsLogo = [
  {
    id: 1,
    name: 'Netlinks',
    image: 'netlinks-logo.png',
    width: 135,
    height: 25,
  },
  { id: 2, name: 'Kam Air', image: 'kamair-logo.png', width: 125, height: 22 },
  { id: 3, name: 'Vector', image: 'vector-logo.png', width: 50, height: 27 },
  {
    id: 4,
    name: 'Turkish Airline',
    image: 'turkish-logo.png',
    width: 116,
    height: 31,
  },
  {
    id: 5,
    name: 'Fly Dubail',
    image: 'flydubai-logo.png',
    width: 116,
    height: 23,
  },
];

export const Brands = () => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {BrandsLogo.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto"
          >
            <Image
              src={`/images/${brand.image}`}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="max-w-[100px] sm:max-w-[135px] md:max-w-none opacity-70  transition-opacity duration-300"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
