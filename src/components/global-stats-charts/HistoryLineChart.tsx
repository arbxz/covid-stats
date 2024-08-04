'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';

import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from 'chart.js';

interface LineChartProps {
  chartData: any;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineController, LineElement);

const LineChart = ({ chartData }: LineChartProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: 'center' }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
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
    </div>
  );
};

export default LineChart;
