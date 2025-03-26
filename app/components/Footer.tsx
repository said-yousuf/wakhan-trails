import { Button } from '@/components/Button';
import Image from 'next/image';

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-white relative">
      <div className="px-4 py-14 text-center flex flex-col items-center justify-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-full md:max-w-[600px] px-4">
          Your ultimate travel companion
        </p>
        <p className="text-sm md:text-base font-medium max-w-full md:max-w-xl mb-6 text-[#78726D] px-4">
          Get exclusive deals on tours only with Wakhan Trails
        </p>
        <Button iconSrc="/icons/right.png" iconSize={24} width={138}>
          Contact us
        </Button>
      </div>

      {/* <Image
        src="/images/cloud.png"
        alt={`Cloud`}
        width={600}
        height={370}
        className="absolute bottom-5"
      />

      <Image
        src="/images/cloud.png"
        alt={`Cloud`}
        width={600}
        height={370}
        className="absolute bottom-5 right-0 z-50 "
      /> */}

      <div className="px-4 py-6 border-t border-dashed border-[#D2D2D2]">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="/logo.png"
              alt="Wakhan Trails"
              width={113}
              height={41}
              priority
            />
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto ">
            <div className="flex items-center mb-2 md:mb-0 cursor-pointer">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                height={20}
                width={20}
                className="mr-2"
              />
              <p className="text-[#78726D] font-bold text-sm">Instagram</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                height={20}
                width={20}
                className="mr-2"
              />
              <p className="text-[#78726D] font-bold text-sm">Facebook</p>
            </div>
          </div>

          <p className="text-[#78726D] text-sm text-center md:text-right w-full md:w-auto">
            Wakhan Trails © {date.getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
