import React from 'react';

import { getTranslations } from 'next-intl/server';

import ChartJsBaseChart from '@/components/ui-chartjs/BaseChart';
import { PieChartDataset } from '@/types/requests';
import { generateShades } from '@/utils/chart-color-shade';

interface GlobalStatsPiechartProps {
  dataset: PieChartDataset;
  chartTitle: string;
}

const GlobalStatsPiechart = async ({ dataset, chartTitle }: GlobalStatsPiechartProps) => {
  const t = await getTranslations('GlobalDoughnutChart');

  const shades = generateShades('#146ef5', '#b4d2ff', Object.keys(dataset).length);

  const keys = Object.keys(dataset).map((key) => t(key));

  const values: number[] = Object.values(dataset);

  const data = {
    labels: keys,
    datasets: [
      {
        label: 'Covid-19 Stats',
        data: values,
        backgroundColor: shades,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    borderWidth: 0,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  return (
    <div className="w-full">
      <ChartJsBaseChart type="doughnut" data={data} options={options} />
    </div>
  );
};

export default GlobalStatsPiechart;
