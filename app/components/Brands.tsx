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
    <div className="flex items-center justify-center my-3 py-14 gap-6">
      {BrandsLogo.map((brand) => (
        <div key={brand.id} className=" flex items-center justify-center gap-8">
          <Image
            src={`/images/${brand.image}`}
            alt={brand.name}
            width={brand.width}
            height={brand.height}
          />
        </div>
      ))}
    </div>
  );
};
