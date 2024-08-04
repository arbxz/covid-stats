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
    <main className="md:min-h-screen px-4 md:px-8 pt-24 md:pt-32">
      <LineChart chartData={lineChartData} />
    </main>
  );
};

export default Page;
