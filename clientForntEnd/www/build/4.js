webpackJsonp([4],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetWalkingPageModule", function() { return SetWalkingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_walking__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetWalkingPageModule = (function () {
    function SetWalkingPageModule() {
    }
    SetWalkingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__set_walking__["a" /* SetWalkingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_walking__["a" /* SetWalkingPage */]),
            ],
        })
    ], SetWalkingPageModule);
    return SetWalkingPageModule;
}());

//# sourceMappingURL=set-walking.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetWalkingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_setActivites__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_set_activities_set_activities__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SetWalkingPage = (function () {
    function SetWalkingPage(navCtrl, navParams, storage, geolocation, stActivityProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.stActivityProvider = stActivityProvider;
        this.activity = "walking";
        this.setActivity = [];
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
        this.setWalkingUserID = this.storage.get('setWalkingUserID').then(function (val) {
            return _this.setWalkingUserID = val;
        }).catch(function (err) {
            console.log(err);
        });
        this.setActivities = this.storage.get('setActivities').then(function (val) {
            return _this.setActivities = val;
        }).catch(function (err) {
            console.log(err);
        });
    }
    SetWalkingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetWorkingPage');
        this.getWalkingData();
        // this.storage.get('setWalkingUserID').then((startUser) => {
        //     console.log(startUser._id);
        //     console.log(startUser.activity);
        // })
    };
    /**
     * @description- Change the Footbar to default if token is null
     * @author-Khondakar Readul Islam
     * @memberOf UserManagementPage
     */
    SetWalkingPage.prototype.goToRootAgain = function () {
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
    SetWalkingPage.prototype.startWalking = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (location) {
            var latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            var geocoder = new google.maps.Geocoder();
            var addressfull = [];
            geocoder.geocode({
                'latLng': latLng
            }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    var address = (results[0].formatted_address);
                    addressfull.push(address);
                }
            });
            console.log('See1', addressfull);
            console.log('See2', addressfull.length);
            var addressfullValues = addressfull.values();
            console.log('See3', addressfullValues.next().value);
            var parsingAddress = JSON.stringify(addressfull);
            var bodyObject = new __WEBPACK_IMPORTED_MODULE_5__models_setActivites__["a" /* SetActivity */](latLng, parsingAddress, _this.activity);
            console.log(bodyObject);
            _this.storage.get('userId').then(function (userId) {
                _this.stActivityProvider.startWalkingInfo(bodyObject, userId)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.storage.set('setWalkingUserID', data.setWalkingUserID);
                    _this.storage.set('setActivities', data.activity);
                }, function (error) {
                    console.log(error);
                });
            }).catch(function (err) {
                console.log(err);
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
    SetWalkingPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    SetWalkingPage.prototype.endWalking = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (location) {
            var latLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            var marker = new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
            var geocoder = new google.maps.Geocoder();
            var addressfull = [];
            geocoder.geocode({
                'latLng': latLng
            }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    var address = (results[0].formatted_address);
                    addressfull.push(address);
                }
            });
            console.log('See1', addressfull[0]);
            console.log('See2', addressfull.length);
            var addressfullValues = addressfull.values();
            console.log('See3', addressfullValues.next().value);
            var parsingAddress = JSON.stringify(addressfull);
            var bodyObject = new __WEBPACK_IMPORTED_MODULE_5__models_setActivites__["a" /* SetActivity */](latLng, parsingAddress, _this.activity);
            for (var _i = 0, latLng_1 = latLng; _i < latLng_1.length; _i++) {
                var latLngs = latLng_1[_i];
                console.log(latLngs);
            }
            console.log(bodyObject);
            _this.storage.get('setWalkingUserID').then(function (setWalkingUserID) {
                _this.stActivityProvider.endWalkingInfo(bodyObject, setWalkingUserID)
                    .subscribe(function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
            }).catch(function (err) {
                console.log(err);
            });
            var content = "<h4>" + latLng + "</h4> <br>\n                  <p> </p>";
            _this.addInfoWindow(marker, content);
            console.log(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    SetWalkingPage.prototype.getWalkingData = function () {
        var _this = this;
        this.storage.get('userId').then(function (userId) {
            _this.stActivityProvider.getLocation(userId).subscribe(function (data) {
                console.log(data);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var objData = data_1[_i];
                    console.log(objData);
                }
            }, function (error) {
                console.log('getWalkingData Error', error);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SetWalkingPage.prototype, "mapElement", void 0);
    SetWalkingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-walking',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/set-walking/set-walking.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      <ion-title>setWalking</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n \n\n  <ion-content padding="true">\n    <div #map id="map"></div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button block  type="button" icon-left (click)="startWalking()">\n            <ion-icon name="arrow-dropup-circle"></ion-icon>\n            Start Walking\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block color="rosyBrown" type="button" icon-left (click)="endWalking()">\n            <ion-icon name="arrow-dropdown-circle"></ion-icon>\n            End Walking\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  \n  \n  <ion-footer class="txtPos">\n    <ion-toolbar>\n      <ion-title>\n        <button color="gohstWhite" ion-button clear (click)="goToRootAgain()"> Back</button>\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/set-walking/set-walking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_set_activities_set_activities__["a" /* SetActivitiesProvider */]])
    ], SetWalkingPage);
    return SetWalkingPage;
}());

//# sourceMappingURL=set-walking.js.map

/***/ })

});
//# sourceMappingURL=4.js.map