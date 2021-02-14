import { Component, OnInit, AfterViewInit } from '@angular/core';

import { chartBarData, chartBarOptions } from './morris-js-bar';

declare var Prism;

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements OnInit, AfterViewInit {
  public chartBarData;
  public chartBarOptions;

  /**
   * @method ngOnInit
   */
  ngOnInit() {
    this.chartBarData = chartBarData;
    this.chartBarOptions = chartBarOptions;
  }

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
