webpackJsonp([17],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRecordsPageModule", function() { return ActivityRecordsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_records__ = __webpack_require__(716);
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

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityRecordsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_activity_records_activity_records__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 *
 *
 * @export
 * @class ActivityRecordsPage
 */
var ActivityRecordsPage = (function () {
    /**
     * Creates an instance of ActivityRecordsPage.
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {Storage} storage
     * @param {Geolocation} geolocation
     * @param {ActivityRecordsProvider} ActivityRecordsProvider
     *
     * @memberOf ActivityRecordsPage
     */
    function ActivityRecordsPage(navCtrl, navParams, storage, geolocation, ActivityRecordsProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.ActivityRecordsProvider = ActivityRecordsProvider;
        this.walkingData = [];
        this.cyclingData = [];
        this.drivingData = [];
        /**
        * @description- Get the token value form sqlLite Storage
        * @author-Emdadul Sadik
        * @type {Promise<any>}
        * @memberOf ActivityRecords
        */
        this.token = this.storage.get('token').then(function (val) {
            return _this.token = val;
        }).catch(function (err) { return console.log(err); });
    }
    /**
     *
     *
     *
     * @memberOf ActivityRecordsPage
     */
    ActivityRecordsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivityRecordsPage');
        // this.getActivityRecordsData();
        this.getDrivingRecordsData();
        this.getWalkingRecordsData();
        this.getCyclingRecordsData();
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Emdadul Sadik
    * @memberOf ActivityRecords
    */
    ActivityRecordsPage.prototype.goToRootAgain = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__["a" /* UsertabsPage */]);
            }
        });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Emdadul Sadik
    * @memberOf ActivityRecords
    */
    ActivityRecordsPage.prototype.getWalkingRecordsData = function () {
        var _this = this;
        this.storage.get('userId').then(function (userId) {
            _this.ActivityRecordsProvider.getWalkingRecords(userId).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    item.distance = _this.getDistanceFromLatLonInKm(item.location.start.lat, item.location.start.lng, item.location.end.lat, item.location.end.lng);
                    item.timedelta = new Date(item.end).valueOf() - new Date(item.start).valueOf();
                    item.timedelta = _this.TimeforHumans(item.timedelta / 1000);
                    _this.walkingData.push(item);
                }
                ;
            }, function (error) { return console.log('ActivityRecords Fetching Error', error); });
        }).catch(function (err) { return console.log(err); });
    };
    /**
     *
     *
     *
     * @memberOf ActivityRecordsPage
     */
    ActivityRecordsPage.prototype.getCyclingRecordsData = function () {
        var _this = this;
        this.storage.get('userId').then(function (userId) {
            _this.ActivityRecordsProvider.getCyclingRecords(userId).subscribe(function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    item.distance = _this.getDistanceFromLatLonInKm(item.location.start.lat, item.location.start.lng, item.location.end.lat, item.location.end.lng);
                    item.timedelta = new Date(item.end).valueOf() - new Date(item.start).valueOf();
                    item.timedelta = _this.TimeforHumans(item.timedelta / 1000);
                    _this.cyclingData.push(item);
                }
                ;
            }, function (error) { return console.log('ActivityRecords Fetching Error', error); });
        }).catch(function (err) { return console.log(err); });
    };
    /**
     *
     *
     *
     * @memberOf ActivityRecordsPage
     */
    ActivityRecordsPage.prototype.getDrivingRecordsData = function () {
        var _this = this;
        this.storage.get('userId').then(function (userId) {
            _this.ActivityRecordsProvider.getDrivingRecords(userId).subscribe(function (data) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var item = data_3[_i];
                    item.distance = _this.getDistanceFromLatLonInKm(item.location.start.lat, item.location.start.lng, item.location.end.lat, item.location.end.lng);
                    item.timedelta = new Date(item.end).valueOf() - new Date(item.start).valueOf();
                    item.timedelta = _this.TimeforHumans(item.timedelta / 1000);
                    _this.drivingData.push(item);
                }
                ;
            }, function (error) { return console.log('ActivityRecords Fetching Error', error); });
        }).catch(function (err) { return console.log(err); });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Emdadul Sadik
    * @memberOf ActivityRecords
    */
    ActivityRecordsPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Emdadul Sadik
    * @memberOf ActivityRecords
    */
    ActivityRecordsPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Emdadul Sadik
    * @memberOf ActivityRecords
    */
    ActivityRecordsPage.prototype.TimeforHumans = function (seconds) {
        var levels = [
            [Math.floor(seconds / 31536000), 'years'],
            [Math.floor((seconds % 31536000) / 86400), 'days'],
            [Math.floor(((seconds % 31536000) % 86400) / 3600), 'hours'],
            [Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'minutes'],
            [(((seconds % 31536000) % 86400) % 3600) % 60, 'seconds'],
        ];
        var returntext = '';
        for (var i = 0, max = levels.length; i < max; i++) {
            if (levels[i][0] === 0)
                continue;
            returntext += ' ' + levels[i][0] + ' ' + (levels[i][0] === 1 ?
                levels[i][1].toString().substr(0, (levels[i][1]).toString().length - 1) : levels[i][1]);
        }
        ;
        return returntext.trim();
    };
    ActivityRecordsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-records',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/activity-records/activity-records.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>activityRecords</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-toolbar>\n<ion-segment [(ngModel)]="activity">\n  <ion-segment-button value="walking" color="black1">\n    <ion-icon name="walk" class="larger"></ion-icon> Walking\n  </ion-segment-button>\n\n  <ion-segment-button value="cycling" color="black1">\n    <ion-icon name="bicycle" class="larger"></ion-icon> Cycling\n  </ion-segment-button>\n\n  <ion-segment-button value="driving" color="black1">\n    <ion-icon name="car" class="larger"></ion-icon> Driving\n  </ion-segment-button>\n</ion-segment>\n</ion-toolbar>\n\n<ion-content padding>\n  <ion-content padding [ngSwitch]="activity">\n\n    <ion-content *ngSwitchCase="\'walking\'">\n      <ion-grid *ngFor="let walkingDatas of walkingData">\n        <ion-row></ion-row>\n        <ion-row class="header">\n          <ion-col col-12>\n            <button class="icons">\n              <ion-icon name="people"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h4 class="name"> <ion-icon name="walk" class="larger"></ion-icon> {{walkingDatas.activity}}</h4>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <ion-icon name="pin"></ion-icon> Start from -{{walkingDatas.startpoint}}\n          </ion-col>\n          <ion-col col-18>\n            <ion-icon name="pin"></ion-icon> End to- {{walkingDatas.startpoint}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <strong>Distance</strong> {{walkingDatas.distance}}\n          </ion-col>\n          <ion-col col-8>\n            <strong>Time</strong> {{walkingDatas.timedelta}}\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-content>\n\n    <ion-content *ngSwitchCase="\'cycling\'">\n        <ion-grid *ngFor="let cyclingDatas of cyclingData">\n            <ion-row></ion-row>\n            <ion-row class="header">\n              <ion-col col-12>\n                <button class="icons">\n                  <ion-icon name="people"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12>\n                <h4 class="name"> <ion-icon name="bicycle" class="larger"></ion-icon>  {{cyclingDatas.activity}}</h4>\n              </ion-col>\n            </ion-row>\n           \n            <ion-row>\n              <ion-col col-4>\n                <ion-icon name="pin"></ion-icon> Start from -{{cyclingDatas.startpoint}}\n              </ion-col>\n              <ion-col col-18>\n                <ion-icon name="pin"></ion-icon> End to- {{cyclingDatas.startpoint}}\n              </ion-col>\n            </ion-row>\n    \n    \n            <ion-row>\n              <ion-col col-4>\n                <strong>Distance</strong> {{cyclingDatas.distance}}\n              </ion-col>\n              <ion-col col-8>\n                <strong>Time</strong> {{cyclingDatas.timedelta}}\n              </ion-col>\n            </ion-row>\n    \n          </ion-grid>\n    </ion-content>\n\n    <ion-content *ngSwitchCase="\'driving\'">\n      <ion-grid *ngFor="let drivingDatas of drivingData">\n        <ion-row></ion-row>\n        <ion-row class="header">\n          <ion-col col-12>\n            <button class="icons">\n              <ion-icon name="people"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <h4 class="name"> <ion-icon name="bicycle" class="larger"></ion-icon>  {{drivingDatas.activity}}</h4>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <ion-icon name="pin"></ion-icon> Start from -{{drivingDatas.startpoint}}\n          </ion-col>\n          <ion-col col-18>\n            <ion-icon name="pin"></ion-icon> End to- {{drivingDatas.startpoint}}\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-4>\n            <strong>Distance</strong> {{drivingDatas.distance}}\n          </ion-col>\n          <ion-col col-8>\n            <strong>Time</strong> {{drivingDatas.timedelta}}\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </ion-content>\n\n\n\n  </ion-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/activity-records/activity-records.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_activity_records_activity_records__["a" /* ActivityRecordsProvider */]])
    ], ActivityRecordsPage);
    return ActivityRecordsPage;
}());

//# sourceMappingURL=activity-records.js.map

/***/ })

});
//# sourceMappingURL=17.js.map