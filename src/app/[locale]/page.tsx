import { ChevronDown, Database } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import GlobalStatsRow from '@/components/global-stats-charts/GlobalStatsRow';
import HeroCard from '@/components/hero-cards/HeroCard';
import { CovidGlobalData } from '@/types/requests';
import { convertToDateTime } from '@/utils/utils';

// TODO Add a comment to describe the functions
// TODO figure out where to place util functions
// TODO add not found page
// Fix fetch error handling
// Todo add chart where data points can be modified
// Todo Mobile menu

async function getCovidGlobalData() {
  const res = await fetch('https://disease.sh/v3/covid-19/all', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const t = await getTranslations('HomePage');
  const globalCovidData: CovidGlobalData = await getCovidGlobalData();

  return (
    <main className="min-h-screen snap-mandatory snap-y select-none">
      <section className="snap-always snap-start flex flex-col min-h-screen p-4 md:p-8">
        <div className="relative overflow-hidden max-w-7xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 py-4">
          <Image
            className="absolute hidden lg:block top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -rotate-12"
            src="/chart.svg"
            width={950}
            height={600}
            alt="Next.js Logo"
            priority
          />
          <div className="relative w-full text-center md:text-left py-8">
            <small className="inline-block text-sm mb-4 font-bold">
              {t('lastUpdate', { date: convertToDateTime(globalCovidData.updated) })}
            </small>
            <h1 className="font-semibold text-4xl lg:text-6xl mb-4 lg:mb-8">
              {t('title')}
            </h1>
            <p className="text-md md:text-lg mb-4">{t('description')}</p>
            <div className="lg:text-right">
              <a
                className="px-4 py-1 border-custom-primary text-custom-primary hover:shadow-md transition-all duration-500 border-[1px] rounded-full text-xs"
                href="https://disease.sh"
                target="_blank"
              >
                {t('dataset')}
                <Database className="inline-block ml-2" size={12} />
              </a>
            </div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 w-full md:w-1/3 lg:w-72">
            {/* Card section*/}
            <HeroCard
              title={t('totalCases')}
              value={globalCovidData.cases}
              link="/global-data"
            />
            <HeroCard
              title={t('totalRecovered')}
              value={globalCovidData.recovered}
              link="/global-data"
            />
            <div className="block md:hidden xl:block">
              <HeroCard
                title={t('totalRecovered')}
                value={globalCovidData.deaths}
                link="/global-data"
              />
            </div>
          </div>
        </div>
        <a href="#covid-charts">
          <ChevronDown className="mx-auto animate-bounce" size={24} />
        </a>
      </section>

      <GlobalStatsRow stats={globalCovidData} />
    </main>
  );
}
