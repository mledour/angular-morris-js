export interface ChartDonutData {
  label: string;
  value: number;
}

export interface ChartBarData {
  [key: string]: unknown;
}

export type ChartLineData = ChartBarData;

export type ChartAreaData = ChartBarData;

export interface ChartDonutOptions {
  colors?: string[];
  formatter?: (y: number, data: ChartDonutData) => string;
  resize?: boolean;
}

interface BaseChartAreaBarLineOptions {
  ykeys: string[];
  labels: string[];
  hideHover?: boolean | 'auto' | 'always';
  axes?: boolean;
  grid?: boolean;
  gridTextColor?: string;
  gridTextSize?: number;
  gridTextFamily?: string;
  gridTextWeight?: string;
  fillOpacity?: number;
}

export interface ChartBarOptions extends BaseChartAreaBarLineOptions {
  xkey: string;
  barColors?: string[];
  stacked?: boolean;
  hoverCallback?: (index: number, options: BaseChartAreaBarLineOptions, content: string, row: ChartBarData) => void;
}

export interface ChartLineOptions extends BaseChartAreaBarLineOptions {
  xkey: string | Date;
  lineColors?: string[];
  lineWidth?: number;
  pointSize?: number;
  pointFillColors?: string;
  pointStrokeColors?: string;
  ymax?: string | number;
  ymin?: string | number;
  smooth?: boolean;
  postUnits?: string;
  preUnits?: string;
  dateFormat?: (timestamp: number) => string;
  xLabels?: string;
  xLabelFormat?: (date: Date) => string;
  xLabelAngle?: number;
  yLabelFormat?: (label: string | number) => string;
  goals?: string[];
  goalStrokeWidth?: number;
  goalLineColors?: string;
  events?: string[];
  eventStrokeWidth?: number;
  eventLineColors?: string[];
  continuousLine?: boolean;
}

export interface ChartAreaOptions extends ChartLineOptions {
  behaveLikeLine?: boolean;
}
