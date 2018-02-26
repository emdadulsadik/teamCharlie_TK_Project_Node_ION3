webpackJsonp([14],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritePlacePageModule", function() { return FavouritePlacePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourite_place__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FavouritePlacePageModule = (function () {
    function FavouritePlacePageModule() {
    }
    FavouritePlacePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favourite_place__["a" /* FavouritePlacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favourite_place__["a" /* FavouritePlacePage */]),
                __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */]
            ],
        })
    ], FavouritePlacePageModule);
    return FavouritePlacePageModule;
}());

//# sourceMappingURL=favourite-place.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritePlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_add_place_add_place__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_place_service_place_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_place_place__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavouritePlacePage = (function () {
    function FavouritePlacePage(modalCtrl, placesService) {
        this.modalCtrl = modalCtrl;
        this.placesService = placesService;
        this.addPlacePage = __WEBPACK_IMPORTED_MODULE_2__pages_add_place_add_place__["a" /* AddPlacePage */];
        this.places = [];
    }
    FavouritePlacePage.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.fetchPlaces()
            .then(function (places) { return _this.places = places; });
    };
    FavouritePlacePage.prototype.ionViewWillEnter = function () {
        this.places = this.placesService.loadPlaces();
    };
    FavouritePlacePage.prototype.onOpenPlace = function (place, index) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_place_place__["a" /* PlacePage */], { place: place, index: index });
        modal.present();
        modal.onDidDismiss(function () {
            _this.places = _this.placesService.loadPlaces();
        });
    };
    FavouritePlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourite-place',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/favourite-place/favourite-place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-buttons end>\n          <button ion-button icon-only [navPush]="addPlacePage">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-title>favouritePlace</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let place of places; let i = index" (click)="onOpenPlace(place, i)">\n    <img [src]="place.imageUrl">\n    <ion-card-content text-center>\n      <ion-card-title>\n        {{ place.title }}\n      </ion-card-title>\n      <p>{{ place.description }}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/favourite-place/favourite-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_place_service_place_service__["a" /* PlaceServiceProvider */]])
    ], FavouritePlacePage);
    return FavouritePlacePage;
}());

//# sourceMappingURL=favourite-place.js.map

/***/ })

});
//# sourceMappingURL=14.js.map