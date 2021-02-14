import { Component, OnInit, AfterViewInit } from '@angular/core';

import { chartAreaOptions, chartAreaData } from './morris-js-area';

declare var Prism;

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.css']
})
export class ChartAreaComponent implements OnInit, AfterViewInit {
  public chartAreaData;
  public chartAreaOptions;

  /**
   * @method ngOnInit
   */
  ngOnInit() {
    this.chartAreaOptions = chartAreaOptions;
    this.chartAreaData = chartAreaData;
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
