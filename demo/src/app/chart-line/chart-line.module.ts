import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule } from 'angular-admin-lte';

import { MorrisJsModule } from '../../../../src';

import { ChartLineRoutingModule } from './chart-line-routing.module';
import { ChartLineComponent } from './chart-line.component';

@NgModule({
  imports: [
    CommonModule,
    ChartLineRoutingModule,
    BoxModule,
    MorrisJsModule,
  ],
  declarations: [ChartLineComponent]
})
export class ChartLineModule { }
