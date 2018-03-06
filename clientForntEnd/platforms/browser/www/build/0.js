webpackJsonp([0],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementPageModule", function() { return UserManagementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management__ = __webpack_require__(732);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserManagementPageModule = (function () {
    function UserManagementPageModule() {
    }
    UserManagementPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_management__["a" /* UserManagementPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_management__["a" /* UserManagementPage */]),
            ],
        })
    ], UserManagementPageModule);
    return UserManagementPageModule;
}());

//# sourceMappingURL=user-management.module.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_settings_user_settings__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user_model__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserManagementPage = (function () {
    function UserManagementPage(navCtrl, navParams, storage, appCtrl, alertCtrl, loadingCtrl, userSetting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appCtrl = appCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userSetting = userSetting;
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
         * @description- Get the token value form sqlLite Storage
         * @author-Khondakar Readul Islam
         * @type {Promise<any>}
         * @memberOf UserManagementPage     } [description]
         */
        this.userId = this.storage.get('userId').then(function (val) {
            return _this.userId = val;
        }).catch(function (err) {
            console.log(err);
        });
    }
    UserManagementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserManagementPage');
        this.storage.get('token').then(function (val) {
            console.log(val);
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     *
     * @description - Logout() method, It has two promise one is loading controller
     *                and other is alert controller. After that It clean the token
     *                from the local storage,
     * @author- Khondakar Readul Isla
     * @memberOf UserManagementPage
     */
    UserManagementPage.prototype.doLogout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Do You Need fresh Air, We will always have been waiting for you',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please come back again........'
                        });
                        loading.present().then(function () {
                            _this.storage.clear().then(function () {
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1000);
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                            });
                        });
                        loading.onDidDismiss(function () {
                            console.log('Dismissed loading');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ;
    UserManagementPage.prototype.ngOnInit = function () {
    };
    /**
     * @description- Change the Footbar to default if token is null
     * @author-Khondakar Readul Islam
     * @memberOf UserManagementPage
     */
    UserManagementPage.prototype.goToRootAgain = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__usertabs_usertabs__["a" /* UsertabsPage */]);
            }
        });
    };
    ;
    /**
     * [onDeleted description]
     * @description- For the deleted user from NodeJs DataBase
     * @author- Khondakar Readul Islam
     * @memberOf UserManagementPage
     */
    UserManagementPage.prototype.onDeleted = function () {
        var _this = this;
        this.userSetting.deleted(this.userId).subscribe(function (data) {
            var alert = _this.alertCtrl.create({
                title: 'Delete Account',
                message: 'Is there anything wrong, you can contact with us before leave us',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('cancel clicked');
                        }
                    },
                    {
                        text: 'Delete',
                        handler: function () {
                            var loading = _this.loadingCtrl.create({
                                content: 'You can register anytime, whenever you want..'
                            });
                            loading.present().then(function () {
                                _this.storage.clear().then(function () {
                                    setTimeout(function () {
                                        window.location.reload();
                                    }, 1000);
                                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                                });
                            });
                            loading.onDidDismiss(function () {
                                console.log('Dismissed loading');
                            });
                        }
                    }
                ]
            });
            alert.present();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'sigin failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ;
    /**
     * [onResetPassword description]
     * @author- Khondakar Readul Islam
     * @memberOf UserManagementPage
     */
    UserManagementPage.prototype.onResetPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Reset Password',
            message: "Enter a new Password for your account, you're so keen on adding",
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var user = new __WEBPACK_IMPORTED_MODULE_6__models_user_model__["a" /* User */](data.userName, data.userRole, data.emailAddress, data.password, data.firstName, data.lastName);
                        var alert = _this.alertCtrl.create({
                            title: 'Reset Password',
                            message: 'Are you Sure to change your Password',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('cancel clicked');
                                    }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        var loading = _this.loadingCtrl.create({
                                            content: 'Thanks for your patient, Give us please a little moment...'
                                        });
                                        _this.userSetting.resetPass(user, _this.userId).subscribe(function (data) {
                                            loading.present().then(function () {
                                                _this.storage.clear().then(function () {
                                                    setTimeout(function () {
                                                        window.location.reload();
                                                    }, 1000);
                                                    _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                                                });
                                            });
                                            loading.onDidDismiss(function () {
                                                console.log('Dismissed loading');
                                            });
                                        }, function (error) {
                                            var alert = _this.alertCtrl.create({
                                                title: 'sigin failed!',
                                                message: error.message,
                                                buttons: ['Ok']
                                            });
                                            alert.present();
                                        });
                                    }
                                }
                            ]
                        });
                        alert.present();
                    }
                }
            ]
        });
        prompt.present();
    };
    UserManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-management',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/user-management/user-management.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User Management</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="uManag">\n    \n    <button [disabled]="!token" (click)="onResetPassword()" ion-button full block color="secondary">Reset Password</button>\n\n       <button [disabled]="!token" (click)="onDeleted()" ion-button full block color="danger">Delete Account</button>\n  \n   \n   <button [disabled]="!token" (click)="doLogout()" ion-button full block color="primary">Logout</button>\n\n</ion-content>\n\n\n\n\n<ion-footer  class="txtPos">\n  <ion-toolbar>\n    <ion-title ><button color="gohstWhite" ion-button clear (click)="goToRootAgain()" > Back</button></ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/Totaly_New_From_Scratch/clientForntEnd/src/pages/user-management/user-management.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_settings_user_settings__["a" /* UserSettingsProvider */]])
    ], UserManagementPage);
    return UserManagementPage;
}());

//# sourceMappingURL=user-management.js.map

/***/ })

});
//# sourceMappingURL=0.js.map