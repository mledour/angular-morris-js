import { Component, OnInit } from '@angular/core';

import { chartDonutData, chartDonutOptions } from './morris-js-donut';

declare var Prism;

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.css']
})
export class ChartDonutComponent implements OnInit {
  public chartDonutData;
  public chartDonutOptions;

  /**
   * @method ngOnInit
   */
  ngOnInit() {
    this.chartDonutData = chartDonutData;
    this.chartDonutOptions = chartDonutOptions;
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
