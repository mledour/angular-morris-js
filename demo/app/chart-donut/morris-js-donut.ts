import {ChartDonutData, ChartDonutOptions} from 'angular-morris-js';

export const chartDonutOptions: ChartDonutOptions = {
  resize: true,
};

export const chartDonutData: ChartDonutData[] =  [
  {label: "Download Sales", value: 12},
  {label: "In-Store Sales", value: 30},
  {label: "Mail-Order Sales", value: 20}
];
