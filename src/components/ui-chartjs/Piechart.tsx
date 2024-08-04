'use client';

import React, { useEffect, useRef } from 'react';

import Chart, { ChartData, ChartOptions, ChartType } from 'chart.js/auto';

interface ChartProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}

const ChartJsPiechart: React.FC<ChartProps> = ({ type, data, options }) => {
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
  }, [type, data, options]);

  return (
    <div className="w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ChartJsPiechart;
