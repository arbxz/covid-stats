import LineChart from '@/components/global-stats-charts/HistoryLineChart';
import { CovidHistoryStats } from '@/types/requests';

async function getCovidHistoryStats() {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async () => {
  const data: CovidHistoryStats = await getCovidHistoryStats();

  const casesArray: number[] = Object.values(data.cases);
  const deathArray: number[] = Object.values(data.deaths);
  const recoveryArray: number[] = Object.values(data.recovered);
  const labels: string[] = Object.keys(data.cases);

  const lineChartData = {
    type: 'line',
    labels: labels,
    datasets: [
      {
        label: 'Cases of covid',
        data: casesArray,
        fill: false,
        borderColor: '#146EF5',
        backgroundColor: '#146EF5',
        tension: 0.1,
      },
      {
        label: 'Fatal cases',
        data: deathArray,
        fill: false,
        borderColor: '#FF3333',
        backgroundColor: '#FF3333',
        tension: 0.1,
      },
      {
        label: 'Patients recovered',
        data: recoveryArray,
        fill: false,
        borderColor: '#1fe074',
        backgroundColor: '#1fe074',
        tension: 0.1,
      },
    ],
  };

  return (
    <main className="flex-1 flex flex-col px-4 md:px-8 pt-24 md:pt-24 h-full">
      <div className="mb-4 md:max-w-96 md:p-8 p-4 rounded-md bg-custom-primary text-primary-foreground shadow">
        <h2 className="text-4xl font-bold mb-4">Statistics for COVID-19</h2>
        <p>
          The following chart shows the rise in covid cases between the years 2020-2024.
          The chart shows the number of cases in millions.
        </p>
      </div>
      <div className="mx-auto w-96 h-96 md:w-[512px] md:h-[512px] lg:w-[1024px] lg:h-[512px] xl:w-[1280px] xl:h-[640px]">
        <LineChart chartData={lineChartData} />
      </div>
    </main>
  );
};

export default Page;
