import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule } from 'angular-admin-lte';

import { MorrisJsModule } from 'angular-morris-js';

import { ChartDonutRoutingModule } from './chart-donut-routing.module';
import { ChartDonutComponent } from './chart-donut.component';

@NgModule({
  imports: [CommonModule, ChartDonutRoutingModule, BoxModule, MorrisJsModule],
  declarations: [ChartDonutComponent],
})
export class ChartDonutModule {}
