## [2.0.1](https://github.com/mledour/angular-morris-js/compare/v2.0.0...v2.0.1) (2021-02-17)


### Bug Fixes

* **deps:** update angular monorepo ([ff0e5c9](https://github.com/mledour/angular-morris-js/commit/ff0e5c9fa811593891b9c0e93a23945e56dd8996))

# [2.0.0](https://github.com/mledour/angular-morris-js/compare/v1.1.0...v2.0.0) (2021-02-15)


### Bug Fixes

* chart options and data types ([ef0e0b6](https://github.com/mledour/angular-morris-js/commit/ef0e0b6f564af750f014871532ef2a53a8a23e34)), closes [#13](https://github.com/mledour/angular-morris-js/issues/13)
* chartInstance is not defined on ngOnDestroy ([41daf09](https://github.com/mledour/angular-morris-js/commit/41daf09f6feff3241dc46d21b68680fe2a07c49d))


### Code Refactoring

* change directive selector to mkMorrisJs ([c94cdb0](https://github.com/mledour/angular-morris-js/commit/c94cdb0e78036bd041ab1333ff7177d613cb578b)), closes [/angular.io/guide/styleguide#style-02-08](https://github.com//angular.io/guide/styleguide/issues/style-02-08)


### Features

* separate directives by type for better template type checking ([35fe6a2](https://github.com/mledour/angular-morris-js/commit/35fe6a2f17ca658772b738fa958dd09e0781fc9c))
* update angular to v11 ([9d9d0b5](https://github.com/mledour/angular-morris-js/commit/9d9d0b59f6689ca6362d0db520dadbb583318842))


### Performance Improvements

* construct chart config alongside with chart instance creation in AfterViewInit ([880d1d3](https://github.com/mledour/angular-morris-js/commit/880d1d3965770e7f730dfc1e1a1f7ca536a74c22))
* **morrisjs setdata:** update chart outside angular ngZone ([ac91e59](https://github.com/mledour/angular-morris-js/commit/ac91e59c75a774254fd76853221d247d909d374b))


### BREAKING CHANGES

* change directive selector to lower camel case to follow angular style guideline
