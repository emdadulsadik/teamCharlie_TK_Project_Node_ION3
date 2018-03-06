webpackJsonp([8],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(157);
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





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.tap = 0;
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
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    /**
     *
     *
     *
     * @memberOf ProfilePage
     */
    ProfilePage.prototype.ngOnInit = function () {
        this.location = this.navParams.get('location');
        this.index = this.navParams.get('index');
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    ProfilePage.prototype.goToRootAgain = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__["a" /* UsertabsPage */]);
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="social-cards">\n\n  <ion-card class="cards" color="mistyRose">\n    <img height="180px" src="assets/imgs/profile-images/avatar/img45.jpg">\n    <ion-card-content>\n      <h4>User Name: {{ location.userName }}</h4>\n      <h5>Full Name: {{ location.firstName }} {{ location.lastName }}  </h5>\n      <h5>Address: {{ location.formatedAddress }} </h5>\n      <h5>Email Address: {{ location.formatedAdres }} </h5>\n      <p class="justify"> Created Date:  {{location.created | date:\'short\'}} </p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small (tap)="tapEvent($event)">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div> {{tap}} Likes </div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-left clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>4 Comments</div>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer  class="txtPos">\n    <ion-toolbar>\n      <ion-title ><button color="gohstWhite" ion-button clear (click)="goToRootAgain()" > Back</button></ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map