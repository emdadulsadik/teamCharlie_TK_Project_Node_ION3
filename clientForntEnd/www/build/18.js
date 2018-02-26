webpackJsonp([18],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRecordsPageModule", function() { return ActivityRecordsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_records__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivityRecordsPageModule = (function () {
    function ActivityRecordsPageModule() {
    }
    ActivityRecordsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activity_records__["a" /* ActivityRecordsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activity_records__["a" /* ActivityRecordsPage */]),
            ],
        })
    ], ActivityRecordsPageModule);
    return ActivityRecordsPageModule;
}());

//# sourceMappingURL=activity-records.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityRecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityRecordsPage = (function () {
    function ActivityRecordsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivityRecordsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityRecordsPage');
    };
    ActivityRecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-records',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/activity-records/activity-records.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>activityRecords</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-toolbar>\n  <ion-segment [(ngModel)]="activity">\n    <ion-segment-button value="walking" color="black1">\n      <ion-icon name="walk" class="larger"></ion-icon> Walking\n    </ion-segment-button>\n\n    <ion-segment-button value="cycling" color="black1">\n      <ion-icon name="bicycle" class="larger"></ion-icon> Cycling\n    </ion-segment-button>\n\n\n    <ion-segment-button value="driving" color="black1">\n      <ion-icon name="car" class="larger"></ion-icon> Driving\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content padding>\n  <ion-content padding [ngSwitch]="activity">\n\n    <ion-content *ngSwitchCase="\'walking\'">\n      Walking\n    </ion-content>\n\n    <ion-content *ngSwitchCase="\'cycling\'">\n      Cycling\n    </ion-content>\n\n    <ion-content *ngSwitchCase="\'driving\'">\n      Driving\n    </ion-content>\n\n\n\n  </ion-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/activity-records/activity-records.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ActivityRecordsPage);
    return ActivityRecordsPage;
}());

//# sourceMappingURL=activity-records.js.map

/***/ })

});
//# sourceMappingURL=18.js.map