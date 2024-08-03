import { ChevronDown, Database } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import HeroCard from '@/components/hero-cards/HeroCard';
import Navigation from '@/components/navigation/Navigation';
import { convertToDateTime } from '@/utils/utils';

// TODO Add a comment to describe the function
// TODO figure out where to place util functions

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
  const globalCovidData = await getCovidGlobalData();

  return (
    <main className="max-h-screen snap-mandatory snap-y overflow-y-scroll select-none">
      <section className="snap-always snap-start flex flex-col min-h-screen p-4 md:p-8">
        <Navigation />
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
              link="/active-cases"
            />
            <HeroCard
              title={t('totalRecovered')}
              value={globalCovidData.recovered}
              link="/recovered"
            />
          </div>
        </div>
        <a href="#covid-charts">
          <ChevronDown className="mx-auto animate-bounce" size={24} />
        </a>
      </section>
      <section
        id="covid-charts"
        className="group snap-always snap-start flex flex-col min-h-screen p-4 md:p-8"
      >
        <h2 className="text-center md:text-left text-4xl md:text-6xl font-semibold capitalize">
          Representations of
          <br /> COVID-19
          <br />
          datasets
          <div className="w-0 transition-all duration-300 h-2 md:h-3 bg-custom-primary group-hover:w-40 mx-auto md:mx-0 group-hover:md:w-64 mt-4"></div>
        </h2>
      </section>
    </main>
  );
}
