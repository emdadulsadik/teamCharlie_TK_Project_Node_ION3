webpackJsonp([15],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookSigninPageModule", function() { return FacebookSigninPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_signin__ = __webpack_require__(718);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacebookSigninPageModule = (function () {
    function FacebookSigninPageModule() {
    }
    FacebookSigninPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__facebook_signin__["a" /* FacebookSigninPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__facebook_signin__["a" /* FacebookSigninPage */]),
            ],
        })
    ], FacebookSigninPageModule);
    return FacebookSigninPageModule;
}());

//# sourceMappingURL=facebook-signin.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookSigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookSigninPage = (function () {
    function FacebookSigninPage(navCtrl, plt, navParams, facebookProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.facebookProvider = facebookProvider;
        this.plt.ready().then(function () {
            _this.facebookProvider.getLoginStatus().then(function (data) {
                if (data.status === 'connected') {
                    _this.navCtrl.setRoot('FacebookPage');
                }
            });
        });
    }
    FacebookSigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FacebookSigninPage');
    };
    FacebookSigninPage.prototype.logginFB = function () {
        var _this = this;
        this.facebookProvider.login().then(function (data) {
            console.log('login', data);
            _this.navCtrl.setRoot('FacebookPage');
        });
    };
    FacebookSigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-facebook-signin',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/facebook-signin/facebook-signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>facebookSignin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<button ion-button full (click)="logginFB()">Login with Facebook</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/facebook-signin/facebook-signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_facebook_facebook__["a" /* FacebookProvider */]])
    ], FacebookSigninPage);
    return FacebookSigninPage;
}());

//# sourceMappingURL=facebook-signin.js.map

/***/ })

});
//# sourceMappingURL=15.js.map