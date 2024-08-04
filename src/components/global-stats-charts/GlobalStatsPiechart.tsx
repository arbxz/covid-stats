import React from 'react';

import { getTranslations } from 'next-intl/server';

import ChartJsPiechart from '@/components/ui-chartjs/Piechart';
import { generateShades } from '@/utils/chart-color-shade';

interface GlobalStatsPiechartProps {
  dataset: {};
}

const GlobalStatsPiechart = async ({ dataset }: GlobalStatsPiechartProps) => {
  const t = await getTranslations('GlobalDoughnutChart');

  const shades = generateShades('#146ef5', '#5587d4', Object.keys(dataset).length);

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
  };

  return <ChartJsPiechart type="doughnut" data={data} options={options} />;
};

export default GlobalStatsPiechart;
