import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule } from 'angular-admin-lte';

import { MorrisJsModule } from 'angular-morris-js';

import { ChartAreaRoutingModule } from './chart-area-routing.module';
import { ChartAreaComponent } from './chart-area.component';

@NgModule({
  imports: [CommonModule, BoxModule, MorrisJsModule, ChartAreaRoutingModule],
  declarations: [ChartAreaComponent],
})
export class ChartAreaModule {}
