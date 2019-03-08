import { Directive, AfterViewInit, OnInit, OnDestroy, Input, ElementRef, NgZone, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { ChartOptions, ChartDatas } from './morris-chart.interface';

@Directive({
  selector: '[mk-morris-js]'
})
export class MorrisChartDirective implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private window: any = window;
  private _options: ChartOptions;

  public chartInstance: any;

  @Input() type = 'Line';
  @Input() options: ChartOptions;
  @Input() data: ChartDatas;
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
  ngOnInit() {
    this._options = Object.assign({}, this.options);
    this._options.element = this.elementRef.nativeElement;
    this._options.data = this.data;
  }

  /*
   * [ngAfterViewInit description]
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
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
  ngOnChanges(changes: SimpleChanges) {
    if((changes.data && !changes.data.firstChange) || (changes.options && !changes.options.firstChange)) {
      Object.assign(this.chartInstance.options, this.options);
      this.chartInstance.setData(this.data);
    }
  }

  /*
   * [ngOnDestroy description]
   * @method ngOnDestroy
   */
  ngOnDestroy() {
    if (this.chartInstance && this.chartInstance.el.empty instanceof Function) {
      this.chartInstance.el.empty();
    }
  }
}
