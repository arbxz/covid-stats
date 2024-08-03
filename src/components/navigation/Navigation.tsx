import { Activity } from 'lucide-react';

import LocaleSwitcher from '@/components/locale-switch/LocaleSwitcher';
import { ModeToggle } from '@/components/theme/Theme-toggle';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between gap-4 w-full">
      <div className="group bg-custom-primary text-white dark:bg-primary-foreground border-custom-primary flex gap-4 items-center px-4 py-2 border-[1px] rounded-full">
        <Activity size={16} />
        <span className="text-sm">covid-stats</span>
      </div>
      <ul className="hidden lg:flex items-center gap-4 text-sm">
        <li>
          <a
            className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
            href="/about"
          >
            Active cases
          </a>
        </li>
        <li>
          <a
            className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
            href="/about"
          >
            Vaccination data
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
