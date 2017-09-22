webpackJsonp(["chart-bar.module"],{

/***/ "../../../../../demo/src/app/chart-bar/chart-bar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartBarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_bar_component__ = __webpack_require__("../../../../../demo/src/app/chart-bar/chart-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chart_bar_component__["a" /* ChartBarComponent */]
    }];
var ChartBarRoutingModule = (function () {
    function ChartBarRoutingModule() {
    }
    return ChartBarRoutingModule;
}());
ChartBarRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], ChartBarRoutingModule);

//# sourceMappingURL=chart-bar-routing.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/chart-bar/chart-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/chart-bar/chart-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<lte-box lteTitle=\"Demo\" [collapsable]=\"false\" [removable]=\"false\">\n  <div mk-morris-js [options]=\"chartBarOptions\" [data]=\"chartBarData\" type=\"Bar\" style=\"height: 500px; width: 100%;\"></div>\n</lte-box>\n\n<lte-box lteTitle=\"Usage\" [collapsable]=\"false\" [removable]=\"false\">\n  <pre><code class=\"language-html\">&lt;div mk-morris-js [options]=\"chartBarOptions\" [data]=\"chartBarData\" type=\"Bar\"&gt;&lt;/div&gt;</code></pre>\n</lte-box>\n\n<lte-box lteTitle=\"Datas\" [collapsable]=\"true\" [removable]=\"false\">\n  <p>\n    This is an array of objects, containing x and y attributes as described by the <code>xkey</code> and <code>ykeys</code> options.\n    <br>\n    <em>Note: the order in which you provide the data is the order in which the bars are displayed.</em>\n  </p>\n  <pre><code class=\"language-html\">let chartAreaData = [\n  &#123; y: '2006', a: 100, b: 90 &#125;,\n  &#123; y: '2007', a: 75,  b: 65 &#125;,\n  &#123; y: '2008', a: 50,  b: 40 &#125;,\n  &#123; y: '2009', a: 75,  b: 65 &#125;,\n  &#123; y: '2010', a: 50,  b: 40 &#125;,\n  &#123; y: '2011', a: 75,  b: 65 &#125;,\n  &#123; y: '2012', a: 100, b: 90 &#125;\n];</code></pre>\n</lte-box>\n\n<lte-box lteTitle=\"Options\" [collapsable]=\"true\" [removable]=\"false\">\n  <table class=\"table table-striped table-bordered\">\n    <tbody>\n      <tr>\n        <td><code>xkey</code><br><b>required</b></td>\n        <td>\n          A string containing the name of the attribute that contains\n          X labels.\n        </td>\n      </tr>\n      <tr>\n        <td><code>ykeys</code><br><b>required</b></td>\n        <td>\n          A list of strings containing names of attributes that\n          contain Y values (one for each series of data to be\n          plotted).\n        </td>\n      </tr>\n      <tr>\n        <td><code>labels</code><br><b>required</b></td>\n        <td>\n          A list of strings containing labels for the data series\n          to be plotted (corresponding to the values in the\n          <code>ykeys</code> option).\n        </td>\n      </tr>\n      <tr>\n        <td><code>barColors</code></td>\n        <td>\n          Array containing colors for the series bars.\n        </td>\n      </tr>\n      <tr>\n        <td><code>stacked</code></td>\n        <td>\n          Set to <code>true</code> to draw bars stacked vertically.\n        </td>\n      </tr>\n      <tr>\n        <td><code>hideHover</code></td>\n        <td>\n          Set to <code>false</code> to always show a hover legend.\n          <br>\n          Set to <code>true</code> or <code>'auto'</code> to only show the\n          hover legend when the mouse cursor is over the chart.\n          <br>\n          Set to <code>'always'</code> to never show a hover legend.\n        </td>\n      </tr>\n      <tr>\n        <td><code>hoverCallback</code></td>\n        <td>\n          Provide a function on this option to generate custom\n          hover legends.\n          <br>\n          The function will be called with the index of the row under\n          the hover legend, the options object passed to the constructor\n          as arguments, a string containing the default generated hover legend\n          content HTML, and an object containing the original data for the\n          row as passed in the <code>data</code> option.\n          <br>\n          <em>eg:</em>\n          <pre>hoverCallback: function (index, options, content, row) &#123;\nreturn \"sin(\" + row.x + \") = \" + row.y;\n&#125;</pre>\n        </td>\n      </tr>\n      <tr>\n        <td><code>axes</code></td>\n        <td>\n          Set to <code>false</code> to disable drawing the x and\n          y axes.\n        </td>\n      </tr>\n      <tr>\n        <td><code>grid</code></td>\n        <td>\n          Set to <code>false</code> to disable drawing the horizontal\n          grid lines.\n        </td>\n      </tr>\n      <tr>\n        <td><code>gridTextColor</code></td>\n        <td>\n          Set the color of the axis labels (default: #888).\n        </td>\n      </tr>\n      <tr>\n        <td><code>gridTextSize</code></td>\n        <td>\n          Set the point size of the axis labels (default: 12).\n        </td>\n      </tr>\n      <tr>\n        <td><code>gridTextFamily</code></td>\n        <td>\n          Set the font family of the axis labels (default: sans-serif).\n        </td>\n      </tr>\n      <tr>\n        <td><code>gridTextWeight</code></td>\n        <td>\n          Set the font weight of the axis labels (default: normal).\n        </td>\n      </tr>\n      <tr>\n        <td><code>resize</code></td>\n        <td>\n          Set to <code>true</code> to enable automatic resizing when the\n          containing element resizes. (default: false).\n          <br>\n          This has a significant performance impact, so is disabled by\n          default.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</lte-box>\n"

/***/ }),

/***/ "../../../../../demo/src/app/chart-bar/chart-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__morris_js_bar__ = __webpack_require__("../../../../../demo/src/app/chart-bar/morris-js-bar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChartBarComponent = (function () {
    function ChartBarComponent() {
    }
    /**
     * @method ngOnInit
     */
    ChartBarComponent.prototype.ngOnInit = function () {
        this.chartBarData = __WEBPACK_IMPORTED_MODULE_1__morris_js_bar__["a" /* chartBarData */];
        this.chartBarOptions = __WEBPACK_IMPORTED_MODULE_1__morris_js_bar__["b" /* chartBarOptions */];
    };
    /**
     * @method ngAfterViewInit
     */
    ChartBarComponent.prototype.ngAfterViewInit = function () {
        Prism.highlightAll();
    };
    return ChartBarComponent;
}());
ChartBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart-bar',
        template: __webpack_require__("../../../../../demo/src/app/chart-bar/chart-bar.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/chart-bar/chart-bar.component.css")]
    })
], ChartBarComponent);

//# sourceMappingURL=chart-bar.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/chart-bar/chart-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartBarModule", function() { return ChartBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_admin_lte__ = __webpack_require__("../../../../../demo/src/app/ng-admin-lte/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_morris_js__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_bar_routing_module__ = __webpack_require__("../../../../../demo/src/app/chart-bar/chart-bar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_bar_component__ = __webpack_require__("../../../../../demo/src/app/chart-bar/chart-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChartBarModule = (function () {
    function ChartBarModule() {
    }
    return ChartBarModule;
}());
ChartBarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__chart_bar_routing_module__["a" /* ChartBarRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_admin_lte__["a" /* BoxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_morris_js__["MorrisJsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__chart_bar_component__["a" /* ChartBarComponent */]]
    })
], ChartBarModule);

//# sourceMappingURL=chart-bar.module.js.map

/***/ }),

/***/ "../../../../../demo/src/app/chart-bar/morris-js-bar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chartBarOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartBarData; });
var chartBarOptions = {
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B'],
    resize: true
};
var chartBarData = [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75, b: 65 },
    { y: '2008', a: 50, b: 40 },
    { y: '2009', a: 75, b: 65 },
    { y: '2010', a: 50, b: 40 },
    { y: '2011', a: 75, b: 65 },
    { y: '2012', a: 100, b: 90 }
];
//# sourceMappingURL=morris-js-bar.js.map

/***/ })

});
//# sourceMappingURL=chart-bar.module.chunk.js.map