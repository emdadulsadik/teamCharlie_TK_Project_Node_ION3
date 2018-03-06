webpackJsonp([7],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetActivitiesPageModule", function() { return SetActivitiesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_activities__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetActivitiesPageModule = (function () {
    function SetActivitiesPageModule() {
    }
    SetActivitiesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__set_activities__["a" /* SetActivitiesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_activities__["a" /* SetActivitiesPage */]),
            ],
        })
    ], SetActivitiesPageModule);
    return SetActivitiesPageModule;
}());

//# sourceMappingURL=set-activities.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetActivitiesPage = (function () {
    /**
     * Creates an instance of SetActivitiesPage.
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {Storage} storage
     *
     * @memberOf SetActivitiesPage
     */
    function SetActivitiesPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        /**
      * @description- Get the token value form sqlLite Storage
      * @author-Khondakar Readul Islam
      * @type {Promise<any>}
      * @memberOf UserManagementPage
      */
        this.token = this.storage.get('token').then(function (val) {
            return _this.token = val;
        }).catch(function (err) {
            console.log(err);
        });
    }
    SetActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetActivitiesPage');
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    SetActivitiesPage.prototype.goToRootAgain = function () {
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
     *
     * @description- []
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @memberOf SetActivitiesPage
     */
    SetActivitiesPage.prototype.goToSetWorking = function () {
        this.navCtrl.push('SetWalkingPage');
    };
    /**
     *
     * @description- []
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @memberOf SetActivitiesPage
     */
    SetActivitiesPage.prototype.goToSetDriving = function () {
        this.navCtrl.push('SetDrivingPage');
    };
    /**
     * @description- []
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     *
     * @memberOf SetActivitiesPage
     */
    SetActivitiesPage.prototype.goToSetCycling = function () {
        this.navCtrl.push('SetCyclingPage');
    };
    SetActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-activities',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/set-activities/set-activities.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>setActivities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="sActivity">\n\n  <button (click)="goToSetWorking()" ion-button full block color="secondary" large>\n    <ion-icon name="walk" class="larger" ></ion-icon> </button>\n\n  <button (click)="goToSetDriving()" ion-button full block color="danger" large>\n    <ion-icon name="car" class="larger" ></ion-icon> </button>\n\n\n  <button (click)="goToSetCycling()" ion-button full block color="primary" large>\n    <ion-icon name="bicycle" class="larger" ></ion-icon>  </button>\n\n</ion-content>\n\n\n\n\n\n<ion-footer class="txtPos">\n  <ion-toolbar>\n    <ion-title>\n      <button color="gohstWhite" ion-button clear (click)="goToRootAgain()"> Back</button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/set-activities/set-activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SetActivitiesPage);
    return SetActivitiesPage;
}());

//# sourceMappingURL=set-activities.js.map

/***/ })

});
//# sourceMappingURL=7.js.map