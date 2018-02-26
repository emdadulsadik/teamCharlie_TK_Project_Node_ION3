webpackJsonp([13],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFriendsPageModule", function() { return FindFriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_friends__ = __webpack_require__(752);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindFriendsPageModule = (function () {
    function FindFriendsPageModule() {
    }
    FindFriendsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_friends__["a" /* FindFriendsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_friends__["a" /* FindFriendsPage */]),
            ],
        })
    ], FindFriendsPageModule);
    return FindFriendsPageModule;
}());

//# sourceMappingURL=find-friends.module.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_location__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FindFriendsPage = (function () {
    function FindFriendsPage(navCtrl, navParams, storage, geolocation, locationService, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.locationService = locationService;
        this.http = http;
        this.hide = false;
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
        /**
        * @description- Change the Footbar to default if token is null
        * @author-Khondakar Readul Islam
        * @memberOf UserManagementPage
        */
        this.userId = this.storage.get('userId').then(function (val) {
            return _this.userId = val;
        }).catch(function (err) {
            console.log(err);
        });
    }
    FindFriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddFavouritePlacePage');
        // console.log(this.location);
        this.mapInit();
        this.locationService.getLocation().subscribe(function (data) {
            _this.locations = data;
            console.log(_this.locations);
        });
        // this.findAddress();
    };
    FindFriendsPage.prototype.mapInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (location) {
            var latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    FindFriendsPage.prototype.goToRootAgain = function () {
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
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    FindFriendsPage.prototype.onLocateMe = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (location) {
            var latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.storage.get('userId').then(function (userId) {
                _this.locationService.addLocation(latLng, userId)
                    .subscribe(function (data) { console.log(latLng); }, function (error) { console.log(error); });
            }).catch(function (err) {
                console.log(err);
            });
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            var content = "<h4>" + latLng + "</h4> <br>\n                  <p> </p>";
            _this.addInfoWindow(marker, content);
            console.log(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    FindFriendsPage.prototype.onLocateFriends = function () {
        var addressFull = [];
        for (var i = 0; i < this.locations.length; ++i) {
            var marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng),
            });
            var geocoder = new google.maps.Geocoder;
            var conCatLatLng = { lat: parseFloat('' + this.locations[i].lat), lng: parseFloat('' + this.locations[i].lng + '') };
            console.log(conCatLatLng);
            geocoder.geocode({ 'latLng': conCatLatLng }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);
                }
                // This is checking to see if the Geoeode Status is OK before proceeding
                if (status == google.maps.GeocoderStatus.OK) {
                    // console.log(results);
                    var address = (results[0].formatted_address);
                    //  console.log(address);
                    // `<p>Address : ${address}</p>`
                    addressFull.push(address);
                }
            });
            var content = "<h4>" + this.locations[i].userName + "</h4>\n                  <p>" + addressFull[i] + "  </p>\n                  <p>Active Time: " + this.locations[i].created + "</p>\n                  ";
            this.addInfoWindow(marker, content);
        }
        this.hide = !this.hide;
        console.log('Hitting');
    };
    FindFriendsPage.prototype.viewProfile = function (location, index) {
        this.navCtrl.push('ProfilePage', { location: location, index: index });
    };
    /**
    * @description- Change the Footbar to default if token is null
    * @author-Khondakar Readul Islam
    * @memberOf UserManagementPage
    */
    FindFriendsPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FindFriendsPage.prototype, "mapElement", void 0);
    FindFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-friends',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/find-friends/find-friends.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Find Friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding="true">\n  <div #map id="map"></div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block outline type="button" icon-left (click)="onLocateMe()">\n          <ion-icon name="locate"></ion-icon>\n          Locate me\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block outline type="button" icon-left (click)="onLocateFriends()">\n          <ion-icon name="map"></ion-icon>\n          Find Friends\n        </button>\n      </ion-col>\n    </ion-row>\n   \n      <ion-row  *ngFor="let location of locations; let i=index">\n        <ion-col *ngIf="hide">\n          <ion-card>\n            <ion-item>\n              <ion-avatar item-start>\n                <img src="assets/imgs/profile-images/avatar/img45.jpg">\n              </ion-avatar>\n              <h2>User Name: {{location.userName}} </h2>\n              <p>Last Active Time:{{location.created | date:\'short\'}} </p>\n            </ion-item>\n\n            <ion-row>\n              <ion-col>\n                <button ion-button color="primary" full block (click)="viewProfile(location,i)">\n                  <ion-icon name=\'eye\'></ion-icon> Profile View\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer class="txtPos">\n  <ion-toolbar>\n    <ion-title>\n      <button color="gohstWhite" ion-button clear (click)="goToRootAgain()"> Back</button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/find-friends/find-friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* Http */]])
    ], FindFriendsPage);
    return FindFriendsPage;
}());

//# sourceMappingURL=find-friends.js.map

/***/ })

});
//# sourceMappingURL=13.js.map