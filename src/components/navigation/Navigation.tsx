import { Activity } from 'lucide-react';
import Link from 'next/link';

import LocaleSwitcher from '@/components/locale-switch/LocaleSwitcher';
import { ModeToggle } from '@/components/theme/ThemeToggle';

import MobileMenu from './MobileMenu';

const Navigation = () => {
  return (
    <nav className="fixed flex items-center justify-between gap-4 w-screen p-4 z-50 glass">
      <Link
        href="/"
        className="group bg-custom-primary text-white dark:bg-primary-foreground border-custom-primary flex gap-4 items-center px-4 py-2 border-[1px] rounded-full"
      >
        <Activity size={16} />
        <span className="text-sm">covid-stats</span>
      </Link>
      <div className="justify-between items-center flex-1 gap-4 hidden md:flex mll-auto">
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
              href="/global-data"
            >
              Continent data
            </Link>
          </li>
          <li>
            <Link
              className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
              href="/history-data"
            >
              History
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
};

export default Navigation;
