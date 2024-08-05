'use client';

import React from 'react';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

import LocaleSwitcher from '@/components/locale-switch/LocaleSwitcher';
import { ModeToggle } from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dismissMenu = () => setIsOpen(false);

  return (
    <div className="block md:hidden z-50">
      <Button
        className="bg-custom-primary hover:bg-white hover:text-custom-primary  z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </Button>
      <div
        className={`${isOpen ? 'block' : 'hidden'} fixed left-0 top-0 w-screen bg-primary-foreground h-screen overflow-scroll z-40`}
      >
        <ul className="flex flex-col items-center justify-cente p-4 r w-full">
          <li className="flex justify-start bg-custom-primary p-4 rounded-md gap-4 items-center mb-16 shadow w-full">
            <LocaleSwitcher />
            <ModeToggle />
            <Button
              className="bg-custom-primary ml-auto px-2 hover:bg-white hover:text-custom-primary rounded-full flex"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </Button>
          </li>
          <li className="border-b-custom-primary py-4 border-b-[1px] text-center">
            <Link onClick={dismissMenu} href="/global-data">
              Continental statistics for COVID-19
            </Link>
          </li>
          <li className="py-4 text-center">
            <Link onClick={dismissMenu} href="/history-data">
              COVID-19 history Line-chart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
