import { Button } from '@/components/Button';
import Image from 'next/image';

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-auto bg-white  md:px-20 px-5">
      <div className="px-4 py-20 text-center flex flex-col items-center justify-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-full md:max-w-[600px] px-4 md:leading-14">
          Your ultimate travel companion
        </p>
        <p className="text-base font-medium max-w-full md:max-w-xl mb-6 text-[#78726D] px-4">
          Get exclusive deals on tours only with Wakhan Trails
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button iconSrc="/icons/right.png" iconSize={28} width={138}>
            Contact us
          </Button>
        </a>
      </div>

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

          <div className="flex items-center justify-center gap-6 md:gap-0 md:space-y-0 md:space-x-4 w-full md:w-auto ">
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                height={20}
                width={20}
                className="mr-2"
              />
              <p className="text-[#78726D] font-bold text-base">Instagram</p>
            </a>
            <a
              href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                height={20}
                width={20}
                className="mr-2"
              />
              <p className="text-[#78726D] font-bold text-base">Facebook</p>
            </a>
          </div>

          <p className="text-[#78726D] text-base text-center md:text-right w-full md:w-auto">
            Wakhan Trails © {date.getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
