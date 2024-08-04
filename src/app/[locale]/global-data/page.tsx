import { getTranslations } from 'next-intl/server';

import ContinentsBarchart from '@/components/continents-stats-charts/ContinentBarchart';
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
    <main className="flex flex-col min-h-screen justify-center items-center h-full px-4 md:px-8 pt-32">
      <div className="text-center mb-4">
        <h1 className="font-semibold text-4xl lg:text-4xl mb-4 lg:mb-8">{t('title')}</h1>
        <p className="max-w-lg mx-auto">{t('description')}</p>
      </div>
      <div className="flex-1 w-full lg:w-4/5 mx-auto">
        <ContinentsBarchart dataset={data} />
      </div>
    </main>
  );
};

export default Page;
