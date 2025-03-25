import { Button } from '@/components/Button';
import Image from 'next/image';

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-white">
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <p className="text-5xl font-bold mb-4 max-w-[600px]">
          Your ultimate travel companion
        </p>
        <p className="text-[16px] font-medium max-w-xl mb-4 text-[#78726D]">
          Get exclusive deals on tours only with Wakhan Trails
        </p>
        <Button iconSrc="/icons/right.png" iconSize={28} width={138}>
          Contact us
        </Button>
      </div>
      <div className="flex items-center justify-between px-4 py-6 border-t border-dashed border-[#D2D2D2]">
        <Image
          src="/logo.png"
          alt="Wakhan Trails"
          width={113}
          height={41}
          priority
        />
        <div className="flex flex-row items-center space-x-4">
          <div className="flex items-center">
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              height={20}
              width={20}
              className="mr-2"
            />
            <p className="text-[#78726D] font-bold text-[16px]">Instagram</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              height={20}
              width={20}
              className="mr-2"
            />
            <p className="text-[#78726D] font-bold text-[16px]">Facebook</p>
          </div>
        </div>
        <p className="text-[#78726D] text-sm">
          Wakhan Trails © {date.getFullYear()}
        </p>
      </div>
    </footer>
  );
};
