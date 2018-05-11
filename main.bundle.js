webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recepies_italian_foods_italian_foods_component__ = __webpack_require__("./src/app/recepies/italian-foods/italian-foods.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_4__blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'italian', component: __WEBPACK_IMPORTED_MODULE_6__recepies_italian_foods_italian_foods_component__["a" /* ItalianFoodsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">   \r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_not_found_not_found_component__ = __webpack_require__("./src/app/partials/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_services_blog_blog_service__ = __webpack_require__("./src/app/core/services/blog/blog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recepies_italian_foods_italian_foods_component__ = __webpack_require__("./src/app/recepies/italian-foods/italian-foods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_services_italian_foods_italian_foods_service__ = __webpack_require__("./src/app/core/services/italian-foods/italian-foods.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__partials_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recepies_italian_foods_italian_foods_component__["a" /* ItalianFoodsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__core_services_blog_blog_service__["a" /* BlogService */], __WEBPACK_IMPORTED_MODULE_12__core_services_italian_foods_italian_foods_service__["a" /* ItalianFoodsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    text-align: center; \r\n    font-family: 'Merienda One', sans-serif;\r\n}\r\ndiv.polaroid {\r\n    border: 1px double; \r\n    margin: 15px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nimg{\r\n    width: 80%\r\n}"

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\"> \r\n    <div *ngFor=\"let blog of blogs\" >\r\n      <div class=\"col-md-4\">\r\n        <div class=\"polaroid\">           \r\n            <h3>{{blog.Title}}</h3>\r\n            <p>{{blog.Description}}</p>\r\n            <img src=\"{{blog.ImgSrc}}\" alt=\"\" />    \r\n            <br>      \r\n            <br>\r\n            <p>Author: {{blog.Author}}</p>\r\n            <p>Blog ID: {{blog.Id}}</p>\r\n        </div>\r\n      </div>        \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_blog_blog_service__ = __webpack_require__("./src/app/core/services/blog/blog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(blogService) {
        this.blogService = blogService;
        this.blogs = blogService.takeAllBlogs();
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_blog_blog_service__["a" /* BlogService */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/core/services/blog/blog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = /** @class */ (function () {
    function BlogService() {
    }
    BlogService.prototype.takeAllBlogs = function () {
        var heroes = [
            {
                Id: 'bcfacd2f-4143-4717-8720-b00cd6e8e859',
                Title: 'Eat wisely!',
                Description: 'Somethimes it\'s good idea to go to bed hungry',
                Author: 'Mr. Nice',
                ImgSrc: './assets/images/sleep-hungry.jpg'
            },
            {
                Id: 'e4445009-3ca3-40af-aa97-abafc8727501',
                Title: 'Why Americans are so fat?',
                Description: 'Eating burgers all the time is not the ultimate skinny problem solving...',
                Author: 'Narco',
                ImgSrc: './assets/images/americans.jpg'
            },
            {
                Id: '6cd12f8e-9b8f-4c6a-9779-7b1de49d7a71',
                Title: 'How to eat octopus',
                Description: 'You should be aware of this 5 simple steps to eat octopus....',
                Author: 'Chief Skull Master ',
                ImgSrc: './assets/images/octopus.jpg'
            },
        ];
        return heroes;
    };
    BlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/core/services/italian-foods/italian-foods.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItalianFoodsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItalianFoodsService = /** @class */ (function () {
    function ItalianFoodsService() {
    }
    ItalianFoodsService.prototype.getAllItalianFoods = function () {
        var italianFoods = [
            {
                Title: 'Eat wisely Spageta!',
                Description: 'Pasta',
                Author: 'S.S.I',
                ImgSrc: './assets/images/pa.jpg'
            },
            {
                Title: 'Eat wisely some Wurst!',
                Description: 'Wurst',
                Author: 'S.S.I',
                ImgSrc: './assets/images/vurst.jpg'
            }
        ];
        return italianFoods;
    };
    ItalianFoodsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ItalianFoodsService);
    return ItalianFoodsService;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\r\n<img width=\"300\" src=\"./assets/images/cook-book.jpg\" alt=\"\">\r\n<h3 style=\"font-family: 'Merienda One', sans-serif;\">\r\n    Best recipies for newbies!\r\n</h3>\r\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "body{\r\n    background: #eeeeee;\r\n}\r\n.form-inline {\r\n    display: inline-block;\r\n}\r\n.navbar-header.col {\r\n    padding: 0 !important;\r\n}\r\n.navbar {\t\t\r\n    background: #fff;\r\n    padding-left: 16px;\r\n    padding-right: 16px;\r\n    border-bottom: 1px solid #d6d6d6;\r\n    -webkit-box-shadow: 0 0 4px rgba(0,0,0,.1);\r\n            box-shadow: 0 0 4px rgba(0,0,0,.1);\r\n}\r\n.nav-link img {\r\n    border-radius: 50%;\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: -8px 0;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n.navbar .navbar-brand {\r\n    color: #555;\r\n    padding-left: 0;\r\n    padding-right: 50px;\r\n    font-family: 'Merienda One', sans-serif;\r\n}\r\n.navbar .navbar-brand i {\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n}\r\n.search-box {\r\n    position: relative;\r\n}\r\n.search-box input {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    padding-right: 35px;\r\n    border-radius: 3px !important;\r\n}\r\n.search-box .input-group-addon {\r\n    min-width: 35px;\r\n    border: none;\r\n    background: transparent;\r\n    position: absolute;\r\n    right: 0;\r\n    z-index: 9;\r\n    padding: 7px;\r\n    height: 100%;\r\n}\r\n.search-box i {\r\n    color: #a0a5b1;\r\n    font-size: 19px;\r\n}\r\n.navbar .nav-item i {\r\n    font-size: 18px;\r\n}\r\n.navbar .dropdown-item i {\r\n    font-size: 16px;\r\n    min-width: 22px;\r\n}\r\n.navbar .nav-item.open > a {\r\n    background: none !important;\r\n}\r\n.navbar .dropdown-menu {\r\n    border-radius: 1px;\r\n    border-color: #e5e5e5;\r\n    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.05);\r\n            box-shadow: 0 2px 8px rgba(0,0,0,.05);\r\n}\r\n.navbar .dropdown-menu li a {\r\n    color: #777;\r\n    padding: 8px 20px;\r\n    line-height: normal;\r\n}\r\n.navbar .dropdown-menu li a:hover, .navbar .dropdown-menu li a:active {\r\n    color: #333;\r\n}\r\n.navbar .dropdown-item .material-icons {\r\n    font-size: 21px;\r\n    line-height: 16px;\r\n    vertical-align: middle;\r\n    margin-top: -2px;\r\n}\r\n.navbar .badge {\r\n    background: #f44336;\r\n    font-size: 11px;\r\n    border-radius: 20px;\r\n    position: absolute;\r\n    min-width: 10px;\r\n    padding: 4px 6px 0;\r\n    min-height: 18px;\r\n    top: 5px;\r\n}\r\n.navbar ul.nav li a.notifications, .navbar ul.nav li a.messages {\r\n    position: relative;\r\n    margin-right: 10px;\r\n}\r\n.navbar ul.nav li a.messages {\r\n    margin-right: 20px;\r\n}\r\n.navbar a.notifications .badge {\r\n    margin-left: -8px;\r\n}\r\n.navbar a.messages .badge {\r\n    margin-left: -4px;\r\n}\r\n.navbar .active a, .navbar .active a:hover, .navbar .active a:focus {\r\n    background: transparent !important;\r\n}\r\n@media (min-width: 1200px){\r\n    .form-inline .input-group {\r\n        width: 300px;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n@media (max-width: 1199px){\r\n    .form-inline {\r\n        display: block;\r\n        margin-bottom: 10px;\r\n    }\r\n    .input-group {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-xl navbar-light\">\r\n    <div class=\"navbar-header d-flex col\">\r\n      <a routerLink=\"/home\" class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-book\"></i>Chief Cook Book</a>  \t\t\r\n      <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle navbar-toggler ml-auto\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <!-- Collection of nav links, forms, and other content for toggling -->\r\n    <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a routerLink=\"/home\" class=\"single-menu-element-link\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/about\" class=\"single-menu-element-link\">About</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle\" href=\"#\">Recipies <b class=\"caret\"></b></a>\r\n          <ul class=\"dropdown-menu\">\t\t\t\t\t\r\n            <li><a routerLink=\"/italian\" class=\"single-menu-element-link\">Italian</a>\r\n            </li>\r\n            <li><a href=\"#\" class=\"dropdown-item\">Web Development</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\">Graphic Design</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\">Digital Marketing</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/blog\" class=\"single-menu-element-link\">Blog</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a routerLink=\"/contact\" class=\"single-menu-element-link\">Contact</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"navbar-form form-inline\">\r\n        <div class=\"input-group search-box\">\t\t\t\t\t\t\t\t\r\n          <input type=\"text\" id=\"search\" class=\"form-control\" placeholder=\"Search by Name\">\r\n          <span class=\"input-group-addon\"><i class=\"material-icons\">&#xE8B6;</i></span>\r\n        </div>\r\n      </form>\r\n      <ul class=\"nav navbar-nav navbar-right ml-auto\">\r\n        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link notifications\"><i class=\"fa fa-bell-o\"></i><span class=\"badge\">1</span></a></li>\r\n        <li class=\"nav-item\"><a href=\"#\" class=\"nav-link messages\"><i class=\"fa fa-envelope-o\"></i><span class=\"badge\">10</span></a></li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" class=\"nav-link dropdown-toggle user-action\">\r\n            <img src=\"./assets/images/skull.png\" class=\"avatar\" alt=\"Avatar\"> \r\n            Chief Skull Master <b class=\"caret\"></b>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-user-o\"></i> Profile</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-calendar-o\"></i> Calendar</a></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-sliders\"></i> Settings</a></li>\r\n            <li class=\"divider dropdown-divider\"></li>\r\n            <li><a href=\"#\" class=\"dropdown-item\"><i class=\"material-icons\">&#xE8AC;</i> Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\r\n  <img style=\"width: 600px;\" alt=\"404\" src=\"../assets/images/404.ico\">\r\n  <h3 style=\"font-family: 'Merienda One', sans-serif;\">\r\n      Oops... Resource could't be found!\r\n  </h3>\r\n</div>"

/***/ }),

/***/ "./src/app/partials/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/partials/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/partials/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/recepies/italian-foods/italian-foods.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\r\n    text-align: center; \r\n    font-family: 'Merienda One', sans-serif;\r\n}\r\ndiv.polaroid {\r\n    border: 1px double; \r\n    margin: 15px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nimg{\r\n    width: 80%\r\n}"

/***/ }),

/***/ "./src/app/recepies/italian-foods/italian-foods.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \n  <div *ngFor=\"let italianFood of italianFoods\" >\n    <div class=\"col-md-4\">\n      <div class=\"polaroid\">           \n          <h3>{{italianFood.Title}}</h3>\n          <p>{{italianFood.Description}}</p>\n          <img src=\"{{italianFood.ImgSrc}}\" alt=\"\" />    \n          <br>      \n          <br>\n          <p>Author: {{italianFood.Author}}</p>\n      </div>\n    </div>        \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/recepies/italian-foods/italian-foods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItalianFoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_italian_foods_italian_foods_service__ = __webpack_require__("./src/app/core/services/italian-foods/italian-foods.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItalianFoodsComponent = /** @class */ (function () {
    function ItalianFoodsComponent(italianFoodsServices) {
        this.italianFoodsServices = italianFoodsServices;
        this.italianFoods = italianFoodsServices.getAllItalianFoods();
    }
    ItalianFoodsComponent.prototype.ngOnInit = function () {
    };
    ItalianFoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-italian-foods',
            template: __webpack_require__("./src/app/recepies/italian-foods/italian-foods.component.html"),
            styles: [__webpack_require__("./src/app/recepies/italian-foods/italian-foods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_italian_foods_italian_foods_service__["a" /* ItalianFoodsService */]])
    ], ItalianFoodsComponent);
    return ItalianFoodsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map