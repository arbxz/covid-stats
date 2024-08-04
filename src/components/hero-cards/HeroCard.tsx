import { formatNumber } from '@/utils/utils';

interface HeroCardProps {
  title: string;
  value: number;
}

const HeroCard = ({ title, value }: HeroCardProps) => {
  return (
    <div className="group text-center hover:border-custom-primary transition-colors duration-300 bg-white dark:bg-primary-foreground border-[1px] rounded-md">
      <div className="flex flex-col justify-center items-center p-8">
        <span className="text-4xl font-semibold mb-4">{formatNumber(value)}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default HeroCard;
