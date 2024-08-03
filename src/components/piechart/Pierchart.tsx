'use client';

import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';

const PieChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    };

    let chart: Chart<'doughnut', number[], string> | null = null;

    if (canvas) {
      chart = new Chart(canvas, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Doughnut Chart',
            },
          },
        },
      });
    }

    return () => {
      /**
       * Clean up the chart instance when the component unmounts or updates.
       */
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-[300px]">
      <canvas ref={canvasRef} id="acquisitions"></canvas>
    </div>
  );
};

export default PieChart;
