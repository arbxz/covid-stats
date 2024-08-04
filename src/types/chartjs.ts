import { ChartData, ChartOptions, ChartType } from 'chart.js';

export interface ChartProps {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
}
