import BarChart from '@/components/barchart/Barchart';
import Navigation from '@/components/navigation/Navigation';
import PieChart from '@/components/piechart/Pierchart';

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 md:p-8">
      <Navigation />
      <div className="py-8">
        <BarChart />
        <PieChart />
      </div>
    </main>
  );
};

export default Page;
