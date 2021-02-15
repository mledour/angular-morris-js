import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartAreaComponent } from './chart-area.component';

const routes: Routes = [
  {
    path: '',
    component: ChartAreaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartAreaRoutingModule {}
