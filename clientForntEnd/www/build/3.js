webpackJsonp([3],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponentsPageModule", function() { return SocialComponentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_components__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocialComponentsPageModule = (function () {
    function SocialComponentsPageModule() {
    }
    SocialComponentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__social_components__["a" /* SocialComponentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_components__["a" /* SocialComponentsPage */]),
            ],
        })
    ], SocialComponentsPageModule);
    return SocialComponentsPageModule;
}());

//# sourceMappingURL=social-components.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponentsPage; });
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


/**
 * Generated class for the SocialComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SocialComponentsPage = (function () {
    function SocialComponentsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tap = 0;
    }
    SocialComponentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialComponentsPage');
    };
    SocialComponentsPage.prototype.tapEvent = function (e) {
        this.tap++;
    };
    SocialComponentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-social-components',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/social-components/social-components.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Social Life</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="social-cards">\n  \n      <ion-card class="cards"color="mistyRose" >\n  \n          <ion-item color="mistyRose">\n            <ion-avatar item-start>\n              <img src="assets/imgs/profile-images/avatar/img45.jpg">\n            </ion-avatar>\n            <h2>Khondaka Readul Islam</h2>\n            <p>November 5, 2017</p>\n          </ion-item>\n        \n          <img height="180px"  src="assets/imgs/profile-images/cardBackgroundImages/kalma-tayyaba.jpg">\n        \n          <ion-card-content>\n            <p class="justify">\n              \n                اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ\n                (1\n                <br>পাঠ করুন আপনার পালনকর্তার নামে যিনি সৃষ্টি করেছেন\n              <br> Proclaim! (or read!) in the name of thy Lord and Cherisher, Who created-</p>\n            \n            </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small (tap)="tapEvent($event)"  >\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div > {{tap}} Likes </div>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>4 Comments</div>\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-note>\n                11h ago\n              </ion-note>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n  \n        <ion-card class="cards"color="mistyRose" >\n  \n            <ion-item color="mistyRose">\n              <ion-avatar item-start>\n                <img src="assets/imgs/profile-images/avatar/broka.jpg">\n              </ion-avatar>\n              <h2>Mrs. Khondakar</h2>\n              <p>December 9, 2017</p>\n            </ion-item>\n          \n            <img height="180px"  src="assets/imgs/profile-images/cardBackgroundImages/quran.jpg">\n          \n            <ion-card-content>\n              <p class="justify">\n                \n                \n                خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ\n                (2 <br>  সৃষ্টি করেছেন মানুষকে জমাট রক্ত থেকে।\n                <br> Created man, out of a (mere) clot of congealed blood:\n                </p>\n                            \n              </ion-card-content>\n          \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="thumbs-up"></ion-icon>\n                  <div  (tap)="tapEvent($event)" >{{tap}} Likes</div>\n                </button>\n              </ion-col>\n              <ion-col>\n                <button ion-button icon-left clear small>\n                  <ion-icon name="text"></ion-icon>\n                  <div>41 Comments</div>\n                </button>\n              </ion-col>\n              <ion-col center text-center>\n                <ion-note>\n                  25h ago\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          \n          </ion-card>\n          <ion-fab right bottom>\n              <button ion-fab color="facebook"><ion-icon name="build"></ion-icon></button>\n              <ion-fab-list side="top">\n                <button ion-fab><ion-icon name="create"></ion-icon></button>\n                <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n                <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n                <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n                  \n                </ion-fab-list>\n            </ion-fab>\n  </ion-content>\n  \n  '/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/social-components/social-components.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SocialComponentsPage);
    return SocialComponentsPage;
}());

//# sourceMappingURL=social-components.js.map

/***/ })

});
//# sourceMappingURL=3.js.map