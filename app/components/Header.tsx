'use client';
import { Button } from '@/components/Button';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white z-50 md:px-20 px-5">
      <Image
        src="/logo.png"
        alt="Wakhan Trails"
        width={113}
        height={41}
        className="z-20"
      />

      <button
        onClick={toggleMenu}
        className="md:hidden z-20"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <div className="bg-[#EDF0F7] rounded-full w-10 h-10 flex items-center justify-center">
            <Image src="/icons/menu.svg" height={20} width={24} alt="menu" />
          </div>
        )}
      </button>

      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/icons/phone.png" alt="Phone" width={18} height={18} />
          <span className="text-sm font-medium text-gray-700">Call</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/icons/whatsapp.png"
            alt="WhatsApp"
            width={18}
            height={18}
          />
          <span className="text-sm font-medium text-gray-700">WhatsApp</span>
        </div>
        <Button>Find Flights</Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-10 flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-2">
            <Image src="/icons/phone.png" alt="Phone" width={24} height={24} />
            <span className="text-lg font-medium text-gray-700">Call</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
            <span className="text-lg font-medium text-gray-700">WhatsApp</span>
          </div>
          <Button>Find Flights</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
