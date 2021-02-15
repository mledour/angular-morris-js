import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule } from 'angular-admin-lte';

import { MorrisJsModule } from 'angular-morris-js';

import { ChartBarRoutingModule } from './chart-bar-routing.module';
import { ChartBarComponent } from './chart-bar.component';

@NgModule({
  imports: [CommonModule, ChartBarRoutingModule, BoxModule, MorrisJsModule],
  declarations: [ChartBarComponent],
})
export class ChartBarModule {}
