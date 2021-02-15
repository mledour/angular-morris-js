import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styleUrls: ['./chart-donut.component.css'],
})
export class ChartDonutComponent implements AfterViewInit {
  public chartDonutOptions = {
    resize: true,
    toto: 'roro',
  };

  public chartDonutData = [
    { label: 'Download Sales', value: 12 },
    { label: 'In-Store Sales', value: 30 },
    { label: 'Mail-Order Sales', value: 20 },
  ];

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
