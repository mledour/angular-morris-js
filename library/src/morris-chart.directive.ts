import { Directive, AfterViewInit, OnInit, OnDestroy, Input, ElementRef, NgZone, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import {ChartDonutOptions, ChartLineOptions, ChartBarOptions, ChartAreaOptions, ChartDonutData, ChartLineData, ChartBarData, ChartAreaData} from './morris-chart.interface';

interface BaseChartOptions {
  element: Element;
  data: (ChartDonutData | ChartBarData | ChartLineData | ChartAreaData)[];
  [key: string]: any;
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mk-morris-js]'
})
export class MorrisChartDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private window: any = window;
  private _options: BaseChartOptions;

  public chartInstance: any;

  @Input() type = 'Line';
  @Input() options: ChartDonutOptions | ChartLineOptions | ChartBarOptions | ChartAreaOptions;
  @Input() data: (ChartDonutData | ChartLineData | ChartBarData | ChartAreaData)[];
  @Output() clickChart = new EventEmitter();

  /*
   * [constructor description]
   * @method constructor
   * @param elementRef [description]
   * @param ngZone     [description]
   */
  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {}

  /*
   * [ngOnInit description]
   * @method ngOnInit
   */
  ngOnInit(): void {
    this._options = Object.assign({
      element: this.elementRef.nativeElement,
      data: this.data,
    }, this.options);
  }

  /*
   * [ngAfterViewInit description]
   * @method ngAfterViewInit
   */
  ngAfterViewInit(): void {
    if(!this.window.Morris) {
      throw new Error('Please include node_modules/morris.js/morris.js');
    } else {
      this.ngZone.runOutsideAngular(() => {
        this.chartInstance = new this.window.Morris[this.type](this._options);
        this.chartInstance.on('click', (i, row) => {
          this.clickChart.emit({ event, i, row });
        });
      });
    }
  }

  /*
   * [ngOnChanges description]
   * @method ngOnChanges
   * @param changes [description]
   */
  ngOnChanges(changes: SimpleChanges): void {
    if((changes.data && !changes.data.firstChange) || (changes.options && !changes.options.firstChange)) {
      Object.assign(this.chartInstance.options, this.options);
      this.chartInstance.setData(this.data);
    }
  }

  /*
   * [ngOnDestroy description]
   * @method ngOnDestroy
   */
  ngOnDestroy(): void {
    if (this.chartInstance.el.empty instanceof Function) {
      this.chartInstance.el.empty();
    }
  }
}
