import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartBarComponent } from './chart-bar.component';

const routes: Routes = [
  {
    path: '',
    component: ChartBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartBarRoutingModule {}
