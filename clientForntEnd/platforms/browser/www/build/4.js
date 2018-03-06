webpackJsonp([4],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetWalkingPageModule", function() { return SetWalkingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_walking__ = __webpack_require__(729);
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

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetWalkingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_setActivites__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_set_activities_set_activities__ = __webpack_require__(358);
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
 * @description-[]
 * @author-Khondakar Readul Islam
 * @version 0.0.1
 * @export
 * @class SetWalkingPage
 */
var SetWalkingPage = (function () {
    /**
     * Creates an instance of SetWalkingPage.
     * @param {NavController} navCtrl
     * @param {NavParams} navParams
     * @param {Storage} storage
     * @param {Geolocation} geolocation
     * @param {SetActivitiesProvider} stActivityProvider
     *
     * @memberOf SetWalkingPage
     */
    function SetWalkingPage(navCtrl, navParams, storage, geolocation, stActivityProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.stActivityProvider = stActivityProvider;
        this.hide = false;
        this.activity = "Walking";
        this.setActivity = [];
        /**
         * @description-[]
         * @author-Khondakar Readul Islam
         * @version 0.0.1
         * @type {Promise < any >}
         * @memberOf SetWalkingPage
         */
        this.token = this.storage.get('token').then(function (val) {
            return _this.token = val;
        }).catch(function (err) {
            console.log(err);
        });
        /**
         * @description-[]
         * @author-Khondakar Readul Islam
         * @version 0.0.1
         * @type {Promise < any >}
         * @memberOf SetWalkingPage
         */
        this.userId = this.storage.get('userId').then(function (val) {
            return _this.userId = val;
        }).catch(function (err) {
            console.log(err);
        });
        /**
         * @description-[]
         * @author-Khondakar Readul Islam
         * @version 0.0.1
         *
         * @type {Promise < any >}
         * @memberOf SetWalkingPage
         */
        this.setWalkingUserID = this.storage.get('setWalkingUserID').then(function (val) {
            return _this.setWalkingUserID = val;
        }).catch(function (err) {
            console.log(err);
        });
        /**
         * @description-[]
         * @author-Khondakar Readul Islam
         * @version 0.0.1
         *
         * @type {Promise < any >}
         * @memberOf SetWalkingPage
         */
        this.setActivities = this.storage.get('setActivities').then(function (val) {
            return _this.setActivities = val;
        }).catch(function (err) {
            console.log(err);
        });
    }
    /**
     *
     *
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetWorkingPage');
        // this.getWalkingRecordsData();
    };
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     *
     * @memberOf SetWalkingPage
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
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     *
     * @memberOf SetWalkingPage
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
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'latLng': latLng
            }, function (results, status) {
                var _this = this;
                if (status !== google.maps.GeocoderStatus.OK) {
                    console.log(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    var startpoint = (results[0].formatted_address);
                }
                var bodyObject = new __WEBPACK_IMPORTED_MODULE_5__models_setActivites__["a" /* SetActivity */](latLng);
                console.log(latLng.lat);
                this.storage.get('userId').then(function (userId) {
                    _this.stActivityProvider.setStartActivitiesInfo(bodyObject, userId, startpoint, _this.activity).subscribe(function (data) {
                        console.log(data);
                        _this.storage.set('setActivitiesIDForWalking', data.setActivitiesID);
                        _this.storage.set('setActivities', data.activity);
                    }, function (error) {
                        console.log(error);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                var marker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: this.map.getCenter()
                });
                var content = "<h5>" + startpoint + "</h5>";
                this.addInfoWindow(marker, content);
            }.bind(_this));
        });
    };
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     *
     * @memberOf SetWalkingPage
     */
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
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                'latLng': latLng
            }, function (results, status) {
                var _this = this;
                if (status !== google.maps.GeocoderStatus.OK) {
                    console.log(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    var endpoint = (results[0].formatted_address);
                }
                var bodyObject = new __WEBPACK_IMPORTED_MODULE_5__models_setActivites__["a" /* SetActivity */](latLng);
                console.log(latLng.lat);
                this.storage.get('setActivitiesIDForWalking').then(function (setActivitiesIDForWalking) {
                    _this.stActivityProvider.setEndActivitiesInfo(bodyObject, setActivitiesIDForWalking, endpoint).subscribe(function (data) {
                        console.log(data);
                    }, function (error) {
                        console.log(error);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                var marker = new google.maps.Marker({
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    position: this.map.getCenter()
                });
                var content = "<h5>" + endpoint + "</h5>";
                this.addInfoWindow(marker, content);
            }.bind(_this));
            _this.getWalkingRecordsData();
            _this.hide = true;
            // Below Function does not work properly
            //  this.makePolylines();
        });
    };
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.makePolylines = function () {
        var _this = this;
        this.storage.get('setActivitiesIDForWalking').then(function (setActivitiesIDForWalking) {
            _this.stActivityProvider.getWalkingRecords(setActivitiesIDForWalking).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    var drawPath = [{
                            lat: item.location.start.lat,
                            lng: item.location.start.lng
                        },
                        {
                            lat: item.location.end.lat,
                            lng: item.location.end.lng
                        },
                    ];
                    var polyLing = new google.maps.Polyline({
                        path: drawPath,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, polyLing);
                }
                ;
            }, function (error) { return console.log('ActivityRecords Fetching Error', error); });
        }).catch(function (err) { return console.log(err); });
    };
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @param {any} marker
     * @param {any} content
     *
     * @memberOf SetWalkingPage
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
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.getWalkingRecordsData = function () {
        var _this = this;
        this.storage.get('setActivitiesIDForWalking').then(function (setActivitiesIDForWalking) {
            _this.stActivityProvider.getWalkingRecords(setActivitiesIDForWalking).subscribe(function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
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
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @param {any} lat1
     * @param {any} lon1
     * @param {any} lat2
     * @param {any} lon2
     * @returns
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
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
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @param {any} deg
     * @returns
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    /**
     *
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @param {any} seconds
     * @returns
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.TimeforHumans = function (seconds) {
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
    /**
     * @description-[]
     * @author-Khondakar Readul Islam
     * @version 0.0.1
     * @param {SetActivity} activity
     * @param {number} index
     *
     * @memberOf SetWalkingPage
     */
    SetWalkingPage.prototype.shareActivity = function (activity, index) {
        console.log('We will do');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SetWalkingPage.prototype, "mapElement", void 0);
    SetWalkingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-set-walking',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/set-walking/set-walking.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>setWalking</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding="true">\n  <div #map id="map"></div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block  type="button" icon-left (click)="startWalking()">\n          <ion-icon name="arrow-dropup-circle"></ion-icon>\n          Start Walking\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="rosyBrown" type="button" icon-left (click)="endWalking()">\n          <ion-icon name="arrow-dropdown-circle"></ion-icon>\n          End Walking\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n\n<ion-footer class="txtPos">\n  <ion-toolbar>\n    <ion-title>\n      <button color="gohstWhite" ion-button clear (click)="goToRootAgain()"> Back</button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/set-walking/set-walking.html"*/,
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