'use client';

import React, { useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ChartJsBaseChart from '@/components/ui-chartjs/BaseChart';
import { ContinentCovidStats } from '@/types/requests';
import { generateShades } from '@/utils/chart-color-shade';
import { LoaderCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ContinentsBarchartProps {
  dataset: ContinentCovidStats[];
}

interface Data {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

enum DataOptions {
  'CASES' = 'cases',
  'DEATHS' = 'deaths',
  'RECOVERED' = 'recovered',
}

const ContinentsBarchart = ({ dataset }: ContinentsBarchartProps) => {
  const t = useTranslations('ContinentPage');
  const [data, setData] = React.useState<Data>();
  const [selectedDataFilter, setSelectedDataFilter] = React.useState<string>(
    DataOptions.CASES,
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const shades = generateShades('#146ef5', '#b4d2ff', Object.keys(dataset).length);

    if (selectedDataFilter === DataOptions.CASES) {
      setData({
        labels: dataset.map((row) => row.continent),
        datasets: [
          {
            label: t('cases'),
            data: dataset.map((row) => row.cases),
            backgroundColor: shades,
            borderColor: shades,
            borderWidth: 1,
          },
        ],
      });
    } else if (selectedDataFilter === DataOptions.DEATHS) {
      setData({
        labels: dataset.map((row) => row.continent),
        datasets: [
          {
            label: t('deaths'),
            data: dataset.map((row) => row.deaths),
            backgroundColor: shades,
            borderColor: shades,
            borderWidth: 1,
          },
        ],
      });
    } else if (selectedDataFilter === DataOptions.RECOVERED) {
      setData({
        labels: dataset.map((row) => row.continent),
        datasets: [
          {
            label: t('recovered'),
            data: dataset.map((row) => row.recovered),
            backgroundColor: shades,
            borderColor: shades,
            borderWidth: 1,
          },
        ],
      });
    }
  }, [dataset, selectedDataFilter]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 justify-center items-center">
      <div className="text-center">
        <span className="block mb-4">{t('filterby')}</span>
        <Select
          onValueChange={(e) => {
            setSelectedDataFilter(e);
          }}
          defaultValue={selectedDataFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(DataOptions).map((option: DataOptions) => (
              <SelectItem key={option} value={option}>
                {t(option)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {data ? (
        <div className="mx-auto w-96 h-96 md:w-[512px] md:h-[512px] lg:w-[1024px] lg:h-[512px] xl:w-[1280px] xl:h-[640px]">
          <ChartJsBaseChart type="bar" data={data} options={options} />
        </div>
      ) : (
        <LoaderCircle className="text-custom-primary animate-spin" size={48} />
      )}
    </div>
  );
};

export default ContinentsBarchart;
