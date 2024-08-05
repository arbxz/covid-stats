'use client';

import React, { useEffect, useRef } from 'react';

import Chart from 'chart.js/auto';

import { ChartProps } from '@/types/chartjs';

const ChartJsBaseChart: React.FC<ChartProps> = ({ type, data, options }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    let chart: Chart | null = null;

    if (canvas) {
      chart = new Chart(canvas, {
        type: type,
        data: data,
        options: options,
      });
    }

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data, options, type]);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChartJsBaseChart;
