import { NgModule } from '@angular/core';

import { MorrisChartDirective } from './morris-chart.directive';


@NgModule({
  declarations: [MorrisChartDirective],
  exports: [MorrisChartDirective]
})
export class MorrisJsModule { }
