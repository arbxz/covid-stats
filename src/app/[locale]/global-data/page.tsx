import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import ContinentsBarchart from '@/components/global-stats-charts/ContinentBarchart';
import { ContinentCovidStats } from '@/types/requests';

async function getContinentCovidStats() {
  const res = await fetch('https://disease.sh/v3/covid-19/continents', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const t = await getTranslations('ContinentPage');
  const data: ContinentCovidStats[] = await getContinentCovidStats();

  return (
    <main className=" flex-1 flex flex-col justify-center items-center h-full px-4 md:px-8 pt-24">
      <Image
        className="absolute block w-full -top-[200px] right-0 rotate-180 z-0"
        src="/chart.svg"
        width={950}
        height={600}
        alt="Next.js Logo"
        priority
      />
      <div className="text-center mb-4 z-10">
        <h1 className="font-semibold text-4xl lg:text-4xl mb-4 lg:mb-8">{t('title')}</h1>
        <p className="max-w-lg mx-auto">{t('description')}</p>
      </div>
      <div className="flex-1 w-full lg:w-4/5 mx-auto z-10">
        <ContinentsBarchart dataset={data} />
      </div>
    </main>
  );
};

export default Page;
