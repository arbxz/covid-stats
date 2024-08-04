import { getTranslations } from 'next-intl/server';

import GlobalStatsPiechart from '@/components/global-stats-charts/GlobalStatsPiechart';
import { CovidGlobalData } from '@/types/requests';

interface GlobalStatsPiechartProps {
  stats: CovidGlobalData;
}

const GlobalStatsRow = async ({ stats }: GlobalStatsPiechartProps) => {
  const t = await getTranslations('GlobalDoughnutChart');

  const datasetToday = {
    todayCases: stats.todayCases,
    todayDeaths: stats.todayDeaths,
    todayRecovered: stats.todayRecovered,
  };

  const datasetTotal = {
    cases: stats.cases,
    deaths: stats.deaths,
    recovered: stats.recovered,
  };

  const datasetPerMillion = {
    casesPerOneMillion: stats.casesPerOneMillion,
    deathsPerOneMillion: stats.deathsPerOneMillion,
    recoveredPerOneMillion: stats.recoveredPerOneMillion,
  };

  return (
    <section
      id="covid-charts"
      className="group snap-always snap-start flex flex-col items-center min-h-screen p-4 md:p-8"
    >
      <h2 className="relative text-center text-4xl md:text-4xl font-semibold mb-4 md:mb-8 lg:mb-16">
        {t('globalTitle')}
        <div className="mx-auto w-0 transition-all duration-500 h-2 md:h-3 bg-custom-primary group-hover:w-full group-hover:md:w-full mt-4 max-w-xl"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-2xl lg:max-w-5xl mx-auto gap-4 md:gap-8 lg:gap-16">
        <GlobalStatsPiechart dataset={datasetToday} />
        <GlobalStatsPiechart dataset={datasetTotal} />
        <GlobalStatsPiechart dataset={datasetPerMillion} />
      </div>
    </section>
  );
};

export default GlobalStatsRow;
