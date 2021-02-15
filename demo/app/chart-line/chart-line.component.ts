import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css'],
})
export class ChartLineComponent implements AfterViewInit {
  public chartLineOptions = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    resize: true,
  };

  public chartLineData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75, b: 65 },
    { y: '2008', a: 50, b: 40 },
    { y: '2009', a: 75, b: 65 },
    { y: '2010', a: 50, b: 40 },
    { y: '2011', a: 75, b: 65 },
    { y: '2012', a: 100, b: 90 },
  ];

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
