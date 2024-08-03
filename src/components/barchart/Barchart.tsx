'use client';

import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';

const BarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    let chart: Chart | null = null;

    if (canvas) {
      chart = new Chart(canvas, {
        type: 'bar',
        options: {
          animation: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
            },
          ],
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
    <div className="w-full">
      <canvas ref={canvasRef} id="acquisitions"></canvas>
    </div>
  );
};

export default BarChart;
