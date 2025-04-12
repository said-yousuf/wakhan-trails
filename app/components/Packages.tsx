import { Button } from '@/components/Button';
import Image from 'next/image';

export const Packages = () => {
  return (
    <div className="py-20 text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-[90%] sm:max-w-[650px] mx-auto">
        Our tour packages for you
      </p>
      <p className="text-[16px] font-medium max-w-[90%] sm:max-w-xl mb-8 text-[#78726D] mx-auto">
        Discover the worlds most popular vacation spots, from tropical beaches
        to vibrant cityscapes, perfect for creating unforgettable memories
      </p>

      <div className="container mx-auto ">
        <div className="flex gap-4 flex-col md:flex-row md:justify-center">
          <div className="flex justify-center ">
            <div className="relative bg-[#EDF0F7] rounded-2xl w-full md:w-[622px] h-[427px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute top-10 left-8 z-0 text-left">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Umrah Packages 2025
                  <br />
                  Travel in Ease Umrah
                </h2>
                <div>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      iconSrc="/icons/right.png"
                      iconSize={28}
                      width={138}
                    >
                      Contact us
                    </Button>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0">
                <Image
                  src="/images/umra.png"
                  alt="Kaaba"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative bg-[#EDF0F7] rounded-2xl w-full md:w-[438px] h-[427px] overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  textAlign: 'center',
                  width: 'max-content',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'black',
                    marginBottom: '1rem',
                  }}
                >
                  Secure Travel Visas <br />
                </h2>
              </div>

              <div className="absolute inset-0 bottom-10 flex items-center justify-center">
                <Image
                  src="/images/package-picture.png"
                  alt="Package"
                  width={338}
                  height={265}
                  className="transform scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
