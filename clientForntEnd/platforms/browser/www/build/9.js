webpackJsonp([9],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function() { return ProfilePicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_picture__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePicturePageModule = (function () {
    function ProfilePicturePageModule() {
    }
    ProfilePicturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_picture__["a" /* ProfilePicturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_picture__["a" /* ProfilePicturePage */]),
            ],
        })
    ], ProfilePicturePageModule);
    return ProfilePicturePageModule;
}());

//# sourceMappingURL=profile-picture.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_upload_image_upload__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePicturePage = (function () {
    function ProfilePicturePage(navCtrl, imagesProvider, camera, actionSheetCtrl, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.imagesProvider = imagesProvider;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.images = [];
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
        this.reloadImages();
    }
    ProfilePicturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimelinePage');
        // console.log(this.dataInicial);
        this.reloadImages();
    };
    ProfilePicturePage.prototype.reloadImages = function () {
        var _this = this;
        this.imagesProvider.getImages().subscribe(function (data) {
            _this.images = data;
            console.log(data);
        });
    };
    ProfilePicturePage.prototype.deleteImage = function (img) {
        var _this = this;
        this.imagesProvider.deleteImage(img).subscribe(function (data) {
            _this.reloadImages();
        });
    };
    ProfilePicturePage.prototype.openImage = function (img) {
        var modal = this.modalCtrl.create('PreviewModalPage', {
            img: img
        });
        modal.present();
    };
    ProfilePicturePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [{
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePicturePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            var modal = _this.modalCtrl.create('UploadModalPage', {
                // data: imagePath
                data: 'data:image/jpeg;base64,' + imagePath
            });
            modal.present();
            modal.onDidDismiss(function (data) {
                if (data && data.reload) {
                    _this.reloadImages();
                }
            });
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    /**
     * @description- Change the Footbar to default if token is null
     * @author-Khondakar Readul Islam
     * @memberOf UserManagementPage
     */
    ProfilePicturePage.prototype.goToRootAgain = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__["a" /* UsertabsPage */]);
            }
        });
    };
    ProfilePicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-picture',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/profile-picture/profile-picture.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Profile Picture</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n<ion-content>\n  <h3 [hidden]="images.length !== 0" text-center>No Images found!</h3>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let img of images">\n\n      <ion-item tappable (click)="openImage(img)">\n        <ion-thumbnail item-start>\n          <img [src]="img.imageData">\n        </ion-thumbnail>\n        <h2>{{ img.desc }}</h2>\n        <button ion-button clear icon-only item-end>\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n      </ion-item>\n\n      <ion-item-options side="right">\n        <button ion-button icon-only color="danger" (click)="deleteImage(img)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab (click)="presentActionSheet()">\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n\n\n\n\n<ion-footer class="txtPos">\n  <ion-toolbar>\n    <ion-title>\n      <button color="gohstWhite" ion-button clear (click)="goToRootAgain()"> Back</button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/profile-picture/profile-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_image_upload_image_upload__["a" /* ImageUploadProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ProfilePicturePage);
    return ProfilePicturePage;
}());

//# sourceMappingURL=profile-picture.js.map

/***/ })

});
//# sourceMappingURL=9.js.map