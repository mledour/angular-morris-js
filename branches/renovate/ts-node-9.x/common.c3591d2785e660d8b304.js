(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9PfN":function(t,n,s){"use strict";s.d(n,"a",function(){return h}),s.d(n,"b",function(){return a}),s.d(n,"c",function(){return u}),s.d(n,"d",function(){return f}),s.d(n,"e",function(){return r});var e=s("fXoL");let i=(()=>{class t{constructor(t,n){this.elementRef=t,this.ngZone=n,this.clickChart=new e.n,this.window=window}ngAfterViewInit(){if(!this.window.Morris)throw new Error("Please include node_modules/morris.js/morris.js");this.morrisConfig=Object.assign({element:this.elementRef.nativeElement,data:this.data},this.options),this.ngZone.runOutsideAngular(()=>{this.chartInstance=new this.window.Morris[this.mkMorrisJs](this.morrisConfig),this.chartInstance.on("click",(t,n)=>{this.clickChart.emit({event:event,index:t,row:n})})})}ngOnChanges(t){(t.data&&!t.data.firstChange||t.options&&!t.options.firstChange)&&(Object.assign(this.chartInstance.options,this.options),this.ngZone.runOutsideAngular(()=>this.chartInstance.setData(this.data)))}ngOnDestroy(){var t,n;(null===(n=null===(t=this.chartInstance)||void 0===t?void 0:t.el)||void 0===n?void 0:n.empty)instanceof Function&&this.chartInstance.el.empty()}}return t.\u0275fac=function(n){return new(n||t)(e.Kb(e.l),e.Kb(e.A))},t.\u0275dir=e.Fb({type:t,inputs:{mkMorrisJs:"mkMorrisJs"},outputs:{clickChart:"clickChart"},features:[e.wb]}),t})(),r=(()=>{class t extends i{}return t.\u0275fac=function(n){return o(n||t)},t.\u0275dir=e.Fb({type:t,selectors:[["","mkMorrisJs","line"]],inputs:{options:"options",data:"data"},features:[e.vb]}),t})();const o=e.Sb(r);let a=(()=>{class t extends i{}return t.\u0275fac=function(n){return c(n||t)},t.\u0275dir=e.Fb({type:t,selectors:[["","mkMorrisJs","bar"]],inputs:{options:"options",data:"data"},features:[e.vb]}),t})();const c=e.Sb(a);let u=(()=>{class t extends i{}return t.\u0275fac=function(n){return d(n||t)},t.\u0275dir=e.Fb({type:t,selectors:[["","mkMorrisJs","donut"]],inputs:{options:"options",data:"data"},features:[e.vb]}),t})();const d=e.Sb(u);let h=(()=>{class t extends i{}return t.\u0275fac=function(n){return l(n||t)},t.\u0275dir=e.Fb({type:t,selectors:[["","mkMorrisJs","area"]],inputs:{options:"options",data:"data"},features:[e.vb]}),t})();const l=e.Sb(h);let f=(()=>{class t{}return t.\u0275mod=e.Ib({type:t}),t.\u0275inj=e.Hb({factory:function(n){return new(n||t)}}),t})()}}]);