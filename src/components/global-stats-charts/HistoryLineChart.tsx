'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  BubbleDataPoint,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  LinearScale,
  LineController,
  LineElement,
  Point,
  PointElement,
} from 'chart.js';

interface LineChartProps {
  chartData: ChartData<
    'line',
    (number | Point | [number, number] | BubbleDataPoint | null)[],
    unknown
  >;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineController, LineElement);

const LineChart = ({ chartData }: LineChartProps) => {
  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Covid cases rise between 2020-2024',
          },
          legend: {
            position: 'top',
          },
        },
      }}
    />
  );
};

export default LineChart;
