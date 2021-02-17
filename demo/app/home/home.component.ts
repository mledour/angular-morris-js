import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}