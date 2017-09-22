import { Component, OnInit, AfterViewInit } from '@angular/core';

import { chartLineData, chartLineOptions } from './morris-js-line';

declare var Prism;

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit, AfterViewInit {
  public chartLineData;
  public chartLineOptions;

  /**
   * @method ngOnInit
   */
  ngOnInit() {
    this.chartLineData = chartLineData;
    this.chartLineOptions = chartLineOptions;
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
