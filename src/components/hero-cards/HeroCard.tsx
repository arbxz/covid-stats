import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { formatNumber } from '@/utils/utils';

interface HeroCardProps {
  title: string;
  value: number;
  link: string;
}

const HeroCard = ({ title, value, link }: HeroCardProps) => {
  return (
    <div className="group text-center hover:border-custom-primary transition-colors duration-300 bg-white dark:bg-primary-foreground border-[1px] rounded-md">
      <div className="flex flex-col justify-center items-center p-8">
        <span className="text-4xl font-semibold mb-4">{formatNumber(value)}</span>
        <span>{title}</span>
      </div>
      <Link
        href={link}
        className="p-4 group-hover:border-custom-primary border-t-[1px] flex justify-start items-end text-xs text-left text-slate-500 hover:text-custom-primary transition-colors duration-300"
      >
        View active covid cases datasets.
        <ArrowRight className="inline ml-2" size={14} />
      </Link>
    </div>
  );
};

export default HeroCard;
