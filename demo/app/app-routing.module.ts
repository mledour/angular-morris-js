import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Get Started',
      icon: 'fa fa-home',
      breadcrumb: ' ',
    },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'area-chart',
        loadChildren: () => import('./chart-area/chart-area.module').then((m) => m.ChartAreaModule),
        data: {
          title: 'Area Chart',
          icon: '',
          breadcrumbs: 'area chart',
        },
      },
      {
        path: 'line-chart',
        loadChildren: () => import('./chart-line/chart-line.module').then((m) => m.ChartLineModule),
        data: {
          title: 'Line Chart',
          icon: '',
          breadcrumbs: 'line chart',
        },
      },
      {
        path: 'bar-chart',
        loadChildren: () => import('./chart-bar/chart-bar.module').then((m) => m.ChartBarModule),
        data: {
          title: 'bar Chart',
          icon: '',
          breadcrumbs: 'bar chart',
        },
      },
      {
        path: 'donut-chart',
        loadChildren: () => import('./chart-donut/chart-donut.module').then((m) => m.ChartDonutModule),
        data: {
          title: 'Donut Chart',
          icon: '',
          breadcrumbs: 'donut chart',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
