webpackJsonp([21],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\nWho are we?\n\nTeamCharlie\n1. Commandor\n2. Major\n3. General\n4. Lieutenant \n\n</ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding="">\n\n</ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_and_signin_signup_and_signin__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(storage, navParam) {
        this.storage = storage;
        this.navParam = navParam;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__signup_and_signin_signup_and_signin__["a" /* SignupAndSigninPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage.prototype.ionViewDidLoad = function () {
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
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
 * [Injectable description]
 */
var UserSettingsProvider = (function () {
    function UserSettingsProvider(http) {
        this.http = http;
        //  liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
        this.devUrl = 'http://localhost:5000/';
        console.log('Hello UserServiceProvider Provider');
    }
    /**
     * [signup description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {User} user [description]
     */
    UserSettingsProvider.prototype.createUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.devUrl + 'user/signup', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    /**
     * [signin description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {User} user [description]
     */
    UserSettingsProvider.prototype.loggin = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.devUrl + 'user/signin', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    /**
     * [deleted description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {[type]} userID [description]
     */
    UserSettingsProvider.prototype.deleted = function (userID) {
        return this.http.delete(this.devUrl + 'user/' + userID)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    /**
     * [resetPass description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {User}   user   [description]
     * @param {[type]} userID [description]
     */
    UserSettingsProvider.prototype.resetPass = function (user, userID) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.patch(this.devUrl + 'user/' + userID, body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error.json()); });
    };
    UserSettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserSettingsProvider);
    return UserSettingsProvider;
}());

//# sourceMappingURL=user-settings.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity-records/activity-records.module": [
		726,
		18
	],
	"../pages/add-place/add-place.module": [
		727,
		20
	],
	"../pages/chat-bot/chat-bot.module": [
		728,
		17
	],
	"../pages/facebook-signin/facebook-signin.module": [
		729,
		16
	],
	"../pages/facebook/facebook.module": [
		730,
		15
	],
	"../pages/favourite-place/favourite-place.module": [
		731,
		14
	],
	"../pages/find-friends/find-friends.module": [
		732,
		13
	],
	"../pages/find-hotel/find-hotel.module": [
		733,
		12
	],
	"../pages/gamification/gamification.module": [
		734,
		11
	],
	"../pages/place/place.module": [
		735,
		19
	],
	"../pages/preview-modal/preview-modal.module": [
		736,
		10
	],
	"../pages/profile-picture/profile-picture.module": [
		737,
		9
	],
	"../pages/profile/profile.module": [
		738,
		8
	],
	"../pages/set-activities/set-activities.module": [
		739,
		7
	],
	"../pages/set-cycling/set-cycling.module": [
		740,
		6
	],
	"../pages/set-driving/set-driving.module": [
		741,
		5
	],
	"../pages/set-walking/set-walking.module": [
		742,
		4
	],
	"../pages/social-components/social-components.module": [
		743,
		3
	],
	"../pages/timeline/timeline.module": [
		744,
		2
	],
	"../pages/upload-modal/upload-modal.module": [
		745,
		1
	],
	"../pages/user-management/user-management.module": [
		746,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 231;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesPage; });
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


var FeaturesPage = (function () {
    function FeaturesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgagesSlides = [
            {
                name: 'Favorite Place',
                description: "By not going to school I learned that the world is a beautiful\n                    place and needs to be discovered",
                image: 'assets/imgs/sliding-Images/MIS_RC_Code_Google_s.jpg'
            },
            {
                name: 'User Management',
                description: "User Management is an authentication feature that provides \n             administrators with the ability to identify and control the \n             state of users logged into their profile",
                image: 'assets/imgs/sliding-Images/user.png'
            },
            {
                name: 'Timeline',
                description: "Your timeline in Google Maps helps you find the \n             places you've been and the routes you've traveled. ",
                image: 'assets/imgs/sliding-Images/timeline.png'
            },
            {
                name: 'Activity Records',
                description: "What are some of the daily activities that you do at outside? \n            Swiming, Walking, Running, To visit your daily activites join this room",
                image: 'assets/imgs/sliding-Images/bicycle-rider.png'
            },
            {
                name: 'Social Components',
                description: "A social network is a social structure made up of a set of social actors, \n            'sets of dyadic ties, and other social interactions between actors. \n            You will find your social actors into this section",
                image: 'assets/imgs/sliding-Images/megaphone.png'
            },
            {
                name: 'Gamification',
                description: "Gamification is the craft of deriving all the fun and addicting elements \n            found in games and applying them to real-world or productive activities. ",
                image: 'assets/imgs/sliding-Images/air-hockey.png'
            }
        ];
    }
    FeaturesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeaturesPage');
    };
    FeaturesPage.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    /**
     *
     *
     *
     * @memberOf FeaturesPage
     */
    FeaturesPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        this.index = currentIndex;
        console.log(this.index);
    };
    /**
     *
     *
     *
     * @memberOf FeaturesPage
     */
    FeaturesPage.prototype.enterPages = function () {
        if (this.index == '1') {
            this.navCtrl.setRoot('UserManagementPage');
        }
        else if (this.index == '2') {
            this.navCtrl.setRoot('TimelinePage');
        }
        else if (this.index == '3') {
            this.navCtrl.setRoot('ActivityRecordsPage');
        }
        else if (this.index == '4') {
            this.navCtrl.setRoot('SocialComponentsPage');
        }
        else if (this.index == '5') {
            this.navCtrl.setRoot('GamificationPage');
        }
        else {
            this.navCtrl.setRoot('FavouritePlacePage');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], FeaturesPage.prototype, "slides", void 0);
    FeaturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-features',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/features/features.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Features</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n \n    <ion-slides zoom="true" pager preventClicks="false" parallax (ionSlideDidChange)="slideChanged()" >\n  <ion-slide *ngFor="let imgSlide of imgagesSlides" class="ionBorder">\n      <div class="swiper-zoom-container">\n        <ion-img width="180" height="180" [src]="imgSlide.image"></ion-img>\n      </div>\n        <h2>{{imgSlide.name}}</h2>\n        <p>{{imgSlide.description}}</p>\n\n    <ion-buttons>\n        <button  class="btnWidth" ion-button color="primary" (click)="enterPages()">Enter</button>\n    </ion-buttons>\n\n  </ion-slide>\n\n\n</ion-slides>\n</ion-content>'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/features/features.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FeaturesPage);
    return FeaturesPage;
}());

//# sourceMappingURL=features.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupAndSigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_model__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usertabs_usertabs__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupAndSigninPage = (function () {
    function SignupAndSigninPage(navCtrl, navParams, loadingCtrl, alertCtrl, storage, userService, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.userService = userService;
        this.appCtrl = appCtrl;
        this.selectOptions = ['Admin', 'Editor', 'Modarator'];
    }
    SignupAndSigninPage.prototype.ngOnInit = function () {
        this.initializeSignInForm();
        this.initializeSignUpForm();
    };
    /**
     * @description- Siginup Method
     * @author-Khondakar Readul Islam
     * @version-0.0.1
     * @memberOf UseraccountPage
     */
    SignupAndSigninPage.prototype.signUp = function () {
        var _this = this;
        var value = this.signUpForm.value;
        var user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */](value.userName, value.userRole, value.emailAddress, value.password, value.firstName, value.lastName);
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.userService.createUser(user)
            .subscribe(function (data) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup Successfull!',
                message: 'Please login to visit your profile!',
                buttons: ['Ok']
            });
            alert.present();
            _this.signUpForm.reset();
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signup failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    ;
    /**
     * [segmentChanged description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {[type]} friends [description]
     * @param {[type]} enemies [description]
     *
     */
    SignupAndSigninPage.prototype.signIn = function () {
        var _this = this;
        var value = this.signInForm.value;
        var user = new __WEBPACK_IMPORTED_MODULE_5__models_user_model__["a" /* User */](value.userName, value.userRole, value.emailAddress, value.password, value.firstName, value.lastName);
        var loading = this.loadingCtrl.create({
            content: 'We are searching you thanks for your patience ...'
        });
        loading.present();
        this.userService.loggin(user)
            .subscribe(function (data) {
            loading.dismiss();
            _this.storage.set('token', data.token);
            _this.storage.set('userId', data.userId);
            var alert = _this.alertCtrl.create({
                title: 'Wellcome to your own world',
                message: 'Enjoy your tour with cool features',
                buttons: ['Ok']
            });
            alert.present().then(function () {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__usertabs_usertabs__["a" /* UsertabsPage */])
                    .then(function () {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                });
            });
            _this.signInForm.reset();
        }, function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'sigin failed!',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupAndSigninPage.prototype.initializeSignUpForm = function () {
        var userName = '';
        var userRole = '';
        var emailAddress = '';
        var password = '';
        var firstName = '';
        var lastName = '';
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'userName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](userName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'userRole': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](userRole, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'emailAddress': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](emailAddress, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](password, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'firstName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](firstName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](lastName, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    };
    ;
    SignupAndSigninPage.prototype.initializeSignInForm = function () {
        var emailAddress = '';
        var password = '';
        this.signInForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'emailAddress': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](emailAddress, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](password, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
        });
    };
    ;
    SignupAndSigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup-and-signin',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/signup-and-signin/signup-and-signin.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="smallpage" >Welcome</ion-title>\n    <ion-toolbar>\n        <ion-segment [(ngModel)]="segments">\n        <ion-segment-button value="singup" color="black1">\n          Signup\n        </ion-segment-button>\n    \n        <ion-segment-button value="signin" color="black1">\n          Sigin\n        </ion-segment-button>\n      </ion-segment>\n      </ion-toolbar>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n    <ion-content padding [ngSwitch]="segments">\n    \n    <ion-content *ngSwitchCase="\'singup\'">\n      <form [formGroup]="signUpForm" (ngSubmit)="signUp()">\n        <ion-list>\n          <ion-item>\n            <ion-label floating color="black1"><ion-icon ios="ios-person-add" md="md-person-add"></ion-icon> User Name</ion-label>\n            <ion-input\n              type="text"\n              \n              formControlName="userName"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating color="black1"><ion-icon ios="ios-person" md="md-person"></ion-icon> First Name</ion-label>\n            <ion-input\n              type="text"\n              formControlName="firstName"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating color="black1"><ion-icon ios="ios-person" md="md-person"></ion-icon> Last Name</ion-label>\n            <ion-input\n              type="text"\n              formControlName="lastName"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating color="black1"> <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Email</ion-label>\n            <ion-input\n              type="email"\n              formControlName="emailAddress"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating color="black1"> <ion-icon ios="ios-key" md="md-key"></ion-icon> Password</ion-label>\n            <ion-input\n              type="password"\n              formControlName="password"\n              required\n              [minlength]="6"></ion-input>\n          </ion-item>\n          <ion-item>  \n            <ion-label floating color="black1"><ion-icon ios="logo-reddit" md="logo-reddit"></ion-icon> User Role</ion-label>\n            <ion-select formControlName="userRole">\n              <ion-option\n                *ngFor="let option of selectOptions"\n                [value]="option">{{ option }}\n            </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!signUpForm.valid">Signup</button>\n      </form>\n    </ion-content>\n    \n    <ion-content *ngSwitchCase="\'signin\'">\n      <form [formGroup]="signInForm" (ngSubmit)="signIn()">\n        <ion-list>\n          <ion-item>\n            <ion-label floating color="black1"> <ion-icon ios="ios-mail" md="md-mail"></ion-icon> Email</ion-label>\n            <ion-input\n              type="email"\n              formControlName="emailAddress"\n              required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating color="black1"> <ion-icon ios="ios-key" md="md-key"></ion-icon> Password</ion-label>\n            <ion-input\n              type="password"\n              formControlName="password"\n              required\n              [minlength]="6"></ion-input>\n          </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!signInForm.valid">Signin</button>\n      </form>\n    </ion-content>\n    <br>\n    <br>\n    <br> \n    \n    <h6 class="smallpage" *ngIf="!sigin">TeamCharlie[SocialLifeTracker]. <br>\n    For tracking your activities please Signin.</h6>\n    </ion-content>\n    \n    \n    \n    \n    \n    </ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/signup-and-signin/signup-and-signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_settings_user_settings__["a" /* UserSettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], SignupAndSigninPage);
    return SignupAndSigninPage;
}());

//# sourceMappingURL=signup-and-signin.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_place_service_place_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPlacePage = (function () {
    function AddPlacePage(navCtrl, navParams, storage, geolocation, loadingCtr, toastCtr, camera, placesService, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.geolocation = geolocation;
        this.loadingCtr = loadingCtr;
        this.toastCtr = toastCtr;
        this.camera = camera;
        this.placesService = placesService;
        this.file = file;
        this.location = {
            lat: 40.7624324,
            lng: -73.9759827
        };
        this.locationIsSet = false;
        this.imageUrl = '';
    }
    AddPlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPlacePage');
    };
    AddPlacePage.prototype.onSubmit = function (form) {
        this.placesService.addPlace(form.value.title, form.value.description, this.location, this.imageUrl);
        form.reset();
        this.location = {
            lat: 40.7624324,
            lng: -73.9759827
        };
        this.imageUrl = '';
        this.locationIsSet = false;
    };
    AddPlacePage.prototype.onLocate = function () {
        var _this = this;
        console.log('Checking');
        var loader = this.loadingCtr.create({
            content: 'Getting your Location..'
        });
        this.geolocation.getCurrentPosition()
            .then(function (location) {
            console.log(location);
            loader.dismiss();
            _this.location.lat = location.coords.latitude;
            _this.location.lng = location.coords.longitude;
            _this.locationIsSet = true;
        })
            .catch(function (error) {
            loader.dismiss();
            var toast = _this.toastCtr.create({
                message: 'Could get location, please pick it manually! ',
                duration: 2500
            });
            toast.present();
            console.log('Error getting location', error);
        });
    };
    AddPlacePage.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            allowEdit: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            //const Image64data = 'data:image/jpeg;base64,' + imageData;
            /* const currentName = imageData.replace(/^.*[\\\/]/,'');
                 const path = imageData.replace(/[^\/]*$/,'');
                 const newFileName = new Date().getUTCMilliseconds() + '.jpg';
                 console.log("Name, path", path,"+", currentName);
                 this.file.moveFile(path, currentName, this.file.dataDirectory, newFileName)
            .then(
              data =>{
               
                this.imageUrl = data.nativeURL;
                 console.log(data);
                this.camera.cleanup();
                this.file.removeFile(path,currentName);
              }
    
              )
            .catch(
              err=>{
                console.log(err);
                this.imageUrl = '';
                const toast = this.toastCtr.create({
                  message:'Could Not save the image. Please try again',
                  duration:2500
                });
                toast.present();
                this.camera.cleanup();
              }
             
    
              );*/
            ///Ned 
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.imageUrl = base64Image;
        }, function (err) {
            var toast = _this.toastCtr.create({
                message: 'Could Not save the image. Please try again',
                duration: 2500
            });
            toast.present();
            _this.camera.cleanup();
        });
    };
    AddPlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-place',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/add-place/add-place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>addPlace</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list>\n     <ion-item>\n       <ion-label fixed>Title</ion-label>\n       <ion-input type="text"\n       placeholder="Beautiful Moshjid.."\n       name="title"\n       ngModel\n       required>\n         \n       </ion-input>\n     </ion-item>\n     <ion-item>\n       <ion-label floating>Short Description</ion-label>\n       <ion-textarea name="description"\n       ngModel\n       required></ion-textarea>\n     </ion-item>\n   </ion-list>\n \n   <ion-grid>\n      <ion-row>\n         <ion-col>\n           <button\n             ion-button\n             block\n             outline\n             type="button"\n             icon-left\n             (click)="onLocate()">\n             <ion-icon name="locate"></ion-icon>\n             Locate me\n           </button>\n         </ion-col>\n       </ion-row>\n     <ion-row *ngIf = "locationIsSet">\n       <ion-col>\n         <agm-map\n       [latitude]="location.lat"\n             [longitude]="location.lng"\n             [zoom]="16"\n         >\n       <agm-marker\n             [latitude]="location.lat"\n             [longitude]="location.lng"\n             >	\n             </agm-marker>\n         </agm-map>\n       </ion-col>\n     </ion-row>\n     <ion-row>\n       <ion-col text-center>\n         <h5>Take a Photo!</h5>\n       </ion-col>\n     </ion-row>\n     <ion-row>\n       <ion-col>\n         <button ion-button\n         icon-left\n         block\n         outline\n         (click)="onTakePhoto()"\n         type="button">\n         <ion-icon name="camera"></ion-icon>\n           Open Camera\n         </button>\n       </ion-col>\n     </ion-row>\n     <ion-row *ngIf="imageUrl !=\'\'">\n       <ion-col>\n         <img [src]="imageUrl" >\n       </ion-col>\n     </ion-row>\n     <ion-row>\n       <ion-col>\n         <button ion-button\n         color="secondary"\n         type="submit"\n         [disabled] ="!f.valid || !locationIsSet || imageUrl ==\'\'"\n         block> Add to place</button>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n \n </form>\n </ion-content>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/add-place/add-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]])
    ], AddPlacePage);
    return AddPlacePage;
}());

//# sourceMappingURL=add-place.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookProvider = (function () {
    function FacebookProvider(facebook) {
        this.facebook = facebook;
        console.log('Hello FacebookProvider Provider');
    }
    FacebookProvider.prototype.login = function () {
        return this.facebook.login(['email', 'public_profile', 'user_photos', 'user_posts']);
    };
    FacebookProvider.prototype.getLoginStatus = function () {
        return this.facebook.getLoginStatus();
    };
    FacebookProvider.prototype.logout = function () {
        return this.facebook.logout();
    };
    FacebookProvider.prototype.shareStatus = function () {
        var opts = {
            method: 'share',
            href: 'http://khondakar.com',
            caption: 'Bismillah',
            description: 'Allah is the one god',
            hashtag: '#ionic'
        };
        return this.facebook.showDialog(opts);
    };
    FacebookProvider.prototype.getUserData = function () {
        return this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []);
    };
    FacebookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
    ], FacebookProvider);
    return FacebookProvider;
}());

//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlacePage = (function () {
    function PlacePage(navCtrl, navParams, viewCtrl, placesService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.placesService = placesService;
        this.storage = storage;
        this.place = this.navParams.get('place');
        this.index = this.navParams.get('index');
    }
    PlacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PlacePage');
    };
    PlacePage.prototype.onLeave = function () {
        this.viewCtrl.dismiss();
    };
    PlacePage.prototype.onDelete = function () {
        this.placesService.deletePlace(this.index);
        this.onLeave();
    };
    PlacePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/place/place.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>{{ place.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n          <img [src]="place.imageUrl">\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>{{ place.description }}</p>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col>\n          <agm-map\n            [latitude]="place.location.lat"\n            [longitude]="place.location.lng"\n            [zoom]="16">\n            <agm-marker\n              [latitude]="place.location.lat"\n              [longitude]="place.location.lng">\n            </agm-marker>\n          </agm-map>\n        </ion-col>\n      </ion-row>\n  \n  \n  \n      <ion-row>\n        <ion-col>\n          <button\n            ion-button\n            block\n            (click)="onLeave()">Leave</button>\n        </ion-col>\n        <ion-col>\n          <button\n            ion-button\n            block\n            color="danger"\n            (click)="onDelete()">Delete</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/place/place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], PlacePage);
    return PlacePage;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageUploadProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageUploadProvider = (function () {
    function ImageUploadProvider(http, transfer) {
        this.http = http;
        this.transfer = transfer;
        // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
        this.devUrl = 'http://localhost:5000/user/';
    }
    ImageUploadProvider.prototype.getImages = function () {
        return this.http.get(this.devUrl + 'fetchimages').map(function (res) { return res.json(); });
    };
    ImageUploadProvider.prototype.deleteImage = function (img) {
        return this.http.delete(this.devUrl + 'fetchimages/' + img._id);
    };
    ImageUploadProvider.prototype.uploadImage = function (img, desc) {
        // Destination URL
        var url = this.devUrl;
        // File for Upload
        var fileUrl = img;
        var trustAllHosts = true;
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: { 'desc': desc }
        };
        var fileTransfer = this.transfer.create();
        // Use the FileTransfer to upload the image
        return fileTransfer.upload(fileUrl, url, options, trustAllHosts).then(function (data) {
            console.log(data + " Uploaded Successfully");
        }, function (err) {
            console.log('Error', err);
        });
    };
    ImageUploadProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ImageUploadProvider);
    return ImageUploadProvider;
}());

//# sourceMappingURL=image-upload.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(userName, userRole, emailAddress, password, firstName, lastName) {
        this.userName = userName;
        this.userRole = userRole;
        this.emailAddress = emailAddress;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_location__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationProvider = (function () {
    function LocationProvider(http) {
        this.http = http;
        // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
        this.devUrl = 'http://localhost:5000/';
        this.locations = [];
        console.log('Hello LocationProvider Provider');
    }
    /**
     * [addLocation description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {Location} location [description]
     */
    LocationProvider.prototype.addLocation = function (location, val) {
        var body = JSON.stringify(location);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.devUrl + 'user/' + val, body, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
        // .catch((error: Response) => Observable.throw(error.json()));
    };
    /**
     * [getLocation description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     *
     */
    LocationProvider.prototype.getLocation = function () {
        var _this = this;
        return this.http.get(this.devUrl + 'user/allLocation')
            .map(function (response) {
            var locations = response.json().obj;
            var transformedLocation = [];
            for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
                var location_1 = locations_1[_i];
                transformedLocation.push(new __WEBPACK_IMPORTED_MODULE_3__models_location__["a" /* Location */](location_1.lat, location_1.lng, location_1.user.userName, location_1.user.userRole, location_1.user.firstName, location_1.user.lastName, location_1.user.emailAddress, location_1.user.imageURL, location_1.created));
            }
            _this.locations = transformedLocation;
            return transformedLocation;
        });
        // .catch((error: Response) => Observable.throw(error.json()));
    };
    LocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LocationProvider);
    return LocationProvider;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetActivity; });
var SetActivity = (function () {
    function SetActivity(location, setWalkingUserID, activity, start, end, distance) {
        this.location = location;
        this.setWalkingUserID = setWalkingUserID;
        this.activity = activity;
        this.start = start;
        this.end = end;
        this.distance = distance;
    }
    return SetActivity;
}());

//# sourceMappingURL=setActivites.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetActivitiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_setActivites__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetActivitiesProvider = (function () {
    function SetActivitiesProvider(http) {
        this.http = http;
        this.setactivites = [];
        // liveUrl = 'https://polar-mountain-79390.herokuapp.com/';
        this.devUrl = 'http://localhost:5000/';
        this.setActivity = [];
        console.log('Hello set Activites Provider');
    }
    /**
     * [addLocation description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     * @param {Location} location [description]
     */
    SetActivitiesProvider.prototype.startWalkingInfo = function (activityBody, id) {
        // const mergedBody = new SetActivity(latLng, setActivity); 
        var body = JSON.stringify(activityBody);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.devUrl + 'user/start/' + id, body, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
        // .catch((error: Response) => Observable.throw(error.json()));
    };
    SetActivitiesProvider.prototype.endWalkingInfo = function (activityBody, id) {
        var body = JSON.stringify(activityBody);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this.http.patch(this.devUrl + 'user/end/' + id, body, {
            headers: headers
        })
            .map(function (response) { return response.json(); });
    };
    /**
     * [getLocation description]
     * @author-Khondakar Readul Islam
     * @version 1.0.0
     *
     */
    SetActivitiesProvider.prototype.getLocation = function (id) {
        return this.http.get(this.devUrl + 'user/walkinglist/' + id)
            .map(function (response) {
            var activities = response.json().obj;
            var transformedLocation = [];
            for (var _i = 0, activities_1 = activities; _i < activities_1.length; _i++) {
                var activity = activities_1[_i];
                transformedLocation.push(new __WEBPACK_IMPORTED_MODULE_3__models_setActivites__["a" /* SetActivity */](activity.location));
            }
            // this.locations = transformedLocation; 
            return transformedLocation;
        });
        // .catch((error: Response) => Observable.throw(error.json()));
    };
    SetActivitiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SetActivitiesProvider);
    return SetActivitiesProvider;
}());

//# sourceMappingURL=set-activities.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_usertabs_usertabs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_place_add_place__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_place_place__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_user_settings_user_settings__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_and_signin_signup_and_signin__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_features_features__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_location_location__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_facebook_facebook__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_place_service_place_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_image_upload_image_upload__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_set_activities_set_activities__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_file__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_transfer__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_date_picker__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_and_signin_signup_and_signin__["a" /* SignupAndSigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_usertabs_usertabs__["a" /* UsertabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_features_features__["a" /* FeaturesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_place__["a" /* PlacePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activity-records/activity-records.module#ActivityRecordsPageModule', name: 'ActivityRecordsPage', segment: 'activity-records', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-place/add-place.module#AddPlacePageModule', name: 'AddPlacePage', segment: 'add-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-bot/chat-bot.module#ChatBotPageModule', name: 'ChatBotPage', segment: 'chat-bot', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facebook-signin/facebook-signin.module#FacebookSigninPageModule', name: 'FacebookSigninPage', segment: 'facebook-signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/facebook/facebook.module#FacebookPageModule', name: 'FacebookPage', segment: 'facebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favourite-place/favourite-place.module#FavouritePlacePageModule', name: 'FavouritePlacePage', segment: 'favourite-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-friends/find-friends.module#FindFriendsPageModule', name: 'FindFriendsPage', segment: 'find-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-hotel/find-hotel.module#FindHotelPageModule', name: 'FindHotelPage', segment: 'find-hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gamification/gamification.module#GamificationPageModule', name: 'GamificationPage', segment: 'gamification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place/place.module#PlacePageModule', name: 'PlacePage', segment: 'place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview-modal/preview-modal.module#PreviewModalPageModule', name: 'PreviewModalPage', segment: 'preview-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-picture/profile-picture.module#ProfilePicturePageModule', name: 'ProfilePicturePage', segment: 'profile-picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-activities/set-activities.module#SetActivitiesPageModule', name: 'SetActivitiesPage', segment: 'set-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-cycling/set-cycling.module#SetCyclingPageModule', name: 'SetCyclingPage', segment: 'set-cycling', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-driving/set-driving.module#SetDrivingPageModule', name: 'SetDrivingPage', segment: 'set-driving', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/set-walking/set-walking.module#SetWalkingPageModule', name: 'SetWalkingPage', segment: 'set-walking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-components/social-components.module#SocialComponentsPageModule', name: 'SocialComponentsPage', segment: 'social-components', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upload-modal/upload-modal.module#UploadModalPageModule', name: 'UploadModalPage', segment: 'upload-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-management/user-management.module#UserManagementPageModule', name: 'UserManagementPage', segment: 'user-management', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAL70RjqzK5w5U0eNd2ANKmf0fzIPEnveQ'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_signup_and_signin_signup_and_signin__["a" /* SignupAndSigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_usertabs_usertabs__["a" /* UsertabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_features_features__["a" /* FeaturesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_place_add_place__["a" /* AddPlacePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_place_place__["a" /* PlacePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_user_settings_user_settings__["a" /* UserSettingsProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_location_location__["a" /* LocationProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_facebook_facebook__["a" /* FacebookProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_24__providers_place_service_place_service__["a" /* PlaceServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_image_upload_image_upload__["a" /* ImageUploadProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_set_activities_set_activities__["a" /* SetActivitiesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = (function () {
    function Place(title, description, location, imageUrl) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.imageUrl = imageUrl;
    }
    return Place;
}());

//# sourceMappingURL=place.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(lat, lng, userName, userRole, firstName, lastName, emailAddress, imageURL, created) {
        this.lat = lat;
        this.lng = lng;
        this.userName = userName;
        this.userRole = userRole;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.imageURL = imageURL;
        this.created = created;
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_usertabs_usertabs__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.hometabs = __WEBPACK_IMPORTED_MODULE_6__pages_usertabs_usertabs__["a" /* UsertabsPage */];
        /**
          * @description- Get the token value form sqlLite Storage
          * @author-Khondakar Readul Islam
          * @type {Promise<any>}
          * @memberOf MyApp
          */
        this.token = this.storage.get('token').then(function (val) {
            return _this.token = val;
        }).catch(function (err) {
            console.log(err);
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Add Profile Picture', component: 'ProfilePicturePage', icon: 'camera' },
            { title: 'Find Friends', component: 'FindFriendsPage', icon: 'search' },
            { title: 'Set your Activities', component: 'SetActivitiesPage', icon: 'walk' },
            { title: 'Signin via Facebook/Google', component: 'FacebookSigninPage', icon: 'log-in' },
            { title: 'Chat with Friends', component: 'ChatBotPage', icon: 'chatboxes' },
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val !== null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_usertabs_usertabs__["a" /* UsertabsPage */];
            }
        });
    };
    MyApp.prototype.ionViewDidLoad = function () {
    };
    MyApp.prototype.goToRootAgain = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list *ngIf="token!==null" >\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon [name]="p.icon" item-start></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n      <ion-list *ngIf="token==null" >\n        <button menuClose ion-item (click)="goToRootAgain()">\n                <ion-icon name="repeat" item-start></ion-icon> Please Loggin Again\n        </button>\n      </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content ></ion-nav>\n\n\n\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsertabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_features__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsertabsPage = (function () {
    function UsertabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__features_features__["a" /* FeaturesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    UsertabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UsertabsPage');
    };
    UsertabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-usertabs',template:/*ion-inline-start:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/usertabs/usertabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Features" tabIcon="apps"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/alihamza/786/Algorithm/up/ION2/TK_Project/TeamCharlie_SLT_Test/clientFrontendTest3/src/pages/usertabs/usertabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UsertabsPage);
    return UsertabsPage;
}());

//# sourceMappingURL=usertabs.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_place__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceServiceProvider = (function () {
    function PlaceServiceProvider(storage, file) {
        this.storage = storage;
        this.file = file;
        this.places = [];
        console.log('Hello PlaceServiceProvider Provider');
    }
    PlaceServiceProvider.prototype.addPlace = function (title, description, location, imageUrl) {
        var _this = this;
        var place = new __WEBPACK_IMPORTED_MODULE_3__models_place__["a" /* Place */](title, description, location, imageUrl);
        /* this.places.push(place);*/
        this.storage.set('places', this.places.push(place))
            .then()
            .catch(function (err) {
            _this.places.splice(_this.places.indexOf(place), 1);
        });
    };
    PlaceServiceProvider.prototype.loadPlaces = function () {
        return this.places.slice();
    };
    PlaceServiceProvider.prototype.deletePlace = function (index) {
        var _this = this;
        var place = this.places[index];
        this.places.splice(index, 1);
        this.storage.set('places', this.places)
            .then(function () {
            _this.removeFile(place);
        })
            .catch(function (err) { return console.log(err); });
    };
    PlaceServiceProvider.prototype.removeFile = function (place) {
        var _this = this;
        var currentName = place.imageUrl.replace(/^.*[\\\/]/, '');
        this.file.removeFile(this.file.dataDirectory, currentName)
            .then(function () { return console.log('Removed File'); })
            .catch(function () {
            console.log('Error while removing File');
            _this.addPlace(place.title, place.description, place.location, place.imageUrl);
        });
    };
    PlaceServiceProvider.prototype.fetchPlaces = function () {
        var _this = this;
        return this.storage.get('places')
            .then(function (places) {
            _this.places = places != null ? places : [];
            return _this.places;
        })
            .catch(function (err) { return console.log(err); });
    };
    PlaceServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], PlaceServiceProvider);
    return PlaceServiceProvider;
}());

//# sourceMappingURL=place-service.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map