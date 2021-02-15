import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

import { ChartBarOptions } from 'angular-morris-js';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css'],
})
export class ChartBarComponent implements AfterViewInit {
  public chartBarData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75, b: 65 },
    { y: '2008', a: 50, b: 40 },
    { y: '2009', a: 75, b: 65 },
    { y: '2010', a: 50, b: 40 },
    { y: '2011', a: 75, b: 65 },
    { y: '2012', a: 100, b: 90 },
  ];

  public chartBarOptions = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    // resize: true
  };

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
