webpackJsonp([2],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelinePageModule = (function () {
    function TimelinePageModule() {
    }
    TimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]),
            ],
        })
    ], TimelinePageModule);
    return TimelinePageModule;
}());

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelinePage = (function () {
    function TimelinePage(navCtrl, navParams, timelineProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timelineProvider = timelineProvider;
        this.storage = storage;
        this.setActivity = [];
        // this.today = new Date().toISOString();
    }
    TimelinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
        // console.log(this.dataInicial);
        this.searchTheActivity();
    };
    TimelinePage.prototype.searchTheActivity = function () {
        var _this = this;
        console.log('ff');
        this.storage.get('userId').then(function (userId) {
            _this.timelineProvider.getActivityForTimeline(userId).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    item.distance = _this.getDistanceFromLatLonInKm(item.location.start.lat, item.location.start.lng, item.location.end.lat, item.location.end.lng);
                    item.timedelta = new Date(item.end).valueOf() - new Date(item.start).valueOf();
                    item.timedelta = _this.TimeforHumans(item.timedelta / 1000);
                    _this.setActivity.push(item);
                }
                ;
            }, function (error) { return console.log('ActivityRecords Fetching Error', error); });
        }).catch(function (err) { return console.log(err); });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf ActivityRecords
    */
    TimelinePage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = Math.round(R * c); // Distance in km
        return d;
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf ActivityRecords
    */
    TimelinePage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf ActivityRecords
    */
    TimelinePage.prototype.TimeforHumans = function (seconds) {
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
    TimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/timeline/timeline.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Timeline</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="true">\n\n  <section id="cd-timeline">\n    <div *ngFor="let activity of setActivity" class="cd-timeline-block">\n\n        <div class="cd-timeline-img">\n          <ion-icon name="calendar"></ion-icon>\n        </div>\n        <!-- cd-timeline-img -->\n\n        <div class="cd-timeline-content">\n          <h2> Location : {{activity.startpoint}} </h2>\n          <p>Time: {{activity.start | date:\'h:mm\'}}</p>\n          <p>Activity: {{activity.activity}}</p>\n\n          <a href="#0" class="cd-read-more">Read more</a>\n          <span class="cd-date"> Date: {{activity.start | date:\'dd/MM/yyyy\'}}</span>\n          \n        </div>\n        <!-- cd-timeline-content -->\n    </div>\n    <!-- cd-timeline-block -->\n\n  </section>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/timeline/timeline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timeline_timeline__["a" /* TimelineProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], TimelinePage);
    return TimelinePage;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=2.js.map