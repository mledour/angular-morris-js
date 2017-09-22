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
        component: HomeComponent
      },
      {
        path: 'area-chart',
        loadChildren: 'app/chart-area/chart-area.module#ChartAreaModule',
        data: {
          title: 'Area Chart',
          icon: '',
          breadcrumb: 'area chart'
        }
      },
      {
        path: 'line-chart',
        loadChildren: 'app/chart-line/chart-line.module#ChartLineModule',
        data: {
          title: 'Line Chart',
          icon: '',
          breadcrumb: 'line chart'
        }
      },
      {
        path: 'bar-chart',
        loadChildren: 'app/chart-bar/chart-bar.module#ChartBarModule',
        data: {
          title: 'bar Chart',
          icon: '',
          breadcrumb: 'bar chart'
        }
      },
      {
        path: 'donut-chart',
        loadChildren: 'app/chart-donut/chart-donut.module#ChartDonutModule',
        data: {
          title: 'Donut Chart',
          icon: '',
          breadcrumb: 'donut chart'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
