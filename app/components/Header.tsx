import { Button } from '@/components/Button';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex justify-between">
      <Image src="/logo.png" alt="Wakhan Trails" width={113} height={41} />

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image src="/icons/phone.png" alt="Phone" width={18} height={18} />
          <span className="text-sm font-medium text-gray-700">Call</span>
        </div>

        <div className="flex items-center gap-2">
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
    </header>
  );
};
