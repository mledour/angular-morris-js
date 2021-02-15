import {
  Directive,
  AfterViewInit,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  NgZone,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  ChartDonutOptions,
  ChartLineOptions,
  ChartBarOptions,
  ChartAreaOptions,
  ChartDonutData,
  ChartLineData,
  ChartBarData,
  ChartAreaData,
} from './morris-chart.interface';

interface BaseChartConfig<Data> {
  element: Element;
  data: Data;
}

type ChartConfig<Options, Data> = Options & BaseChartConfig<Data>;

@Directive()
export class BaseMorrisChartDirective<Options, Data> implements AfterViewInit, OnChanges, OnDestroy {
  @Input() mkMorrisJs!: 'Line' | 'Area' | 'Bar' | 'Donut';
  @Output() clickChart = new EventEmitter();

  public chartInstance: any;

  protected window: any = window;
  protected morrisConfig?: ChartConfig<Options, Data>;
  protected data?: Data;
  protected options?: Options;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (!this.window.Morris) {
      throw new Error('Please include node_modules/morris.js/morris.js');
    } else {
      this.morrisConfig = Object.assign(
        {
          element: this.elementRef.nativeElement,
          data: this.data,
        },
        this.options
      ) as ChartConfig<Options, Data>;

      this.ngZone.runOutsideAngular(() => {
        this.chartInstance = new this.window.Morris[this.mkMorrisJs](this.morrisConfig);
        this.chartInstance.on('click', (index: number, row: unknown) => {
          this.clickChart.emit({ event, index, row });
        });
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.data && !changes.data.firstChange) || (changes.options && !changes.options.firstChange)) {
      Object.assign(this.chartInstance.options, this.options);
      this.ngZone.runOutsideAngular(() => this.chartInstance.setData(this.data));
    }
  }

  ngOnDestroy(): void {
    if (this.chartInstance?.el?.empty instanceof Function) {
      this.chartInstance.el.empty();
    }
  }
}

@Directive({
  selector: '[mkMorrisJs="Line"]',
})
export class MorrisLineChartDirective extends BaseMorrisChartDirective<ChartLineOptions, ChartLineData[]> {
  @Input() options!: ChartLineOptions;
  @Input() data!: ChartLineData[];
}

@Directive({
  selector: '[mkMorrisJs="Bar"]',
})
export class MorrisBarChartDirective extends BaseMorrisChartDirective<ChartBarOptions, ChartBarData[]> {
  @Input() options!: ChartBarOptions;
  @Input() data!: ChartBarData[];
}

@Directive({
  selector: '[mkMorrisJs="Donut"]',
})
export class MorrisDonutChartDirective extends BaseMorrisChartDirective<ChartDonutOptions, ChartDonutData[]> {
  @Input() options!: ChartDonutOptions;
  @Input() data!: ChartDonutData[];
}

@Directive({
  selector: '[mkMorrisJs="Area"]',
})
export class MorrisAreaChartDirective extends BaseMorrisChartDirective<ChartAreaOptions, ChartAreaData[]> {
  @Input() options!: ChartAreaOptions;
  @Input() data!: ChartAreaData[];
}
