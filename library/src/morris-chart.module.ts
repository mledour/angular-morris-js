import { NgModule } from '@angular/core';

import {
  MorrisLineChartDirective,
  MorrisAreaChartDirective,
  MorrisBarChartDirective,
  MorrisDonutChartDirective,
} from './morris-chart.directive';

@NgModule({
  declarations: [MorrisLineChartDirective, MorrisAreaChartDirective, MorrisBarChartDirective, MorrisDonutChartDirective],
  exports: [MorrisLineChartDirective, MorrisAreaChartDirective, MorrisBarChartDirective, MorrisDonutChartDirective],
})
export class MorrisJsModule {}
