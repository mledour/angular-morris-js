import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartDonutComponent } from './chart-donut.component';

const routes: Routes = [
  {
    path: '',
    component: ChartDonutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartDonutRoutingModule {}
