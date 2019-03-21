(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.routing */ "./src/app/home/home.routing.ts");
/* harmony import */ var _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-selection/quiz-selection.component */ "./src/app/home/quiz-selection/quiz-selection.component.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_6__["QuizSelectionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_5__["HomeRoutes"]),
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quiz-selection/quiz-selection.component */ "./src/app/home/quiz-selection/quiz-selection.component.ts");


var HomeRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
            },
            {
                path: 'quizzes',
                component: _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_1__["QuizSelectionComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcXVpei1zZWxlY3Rpb24vcXVpei1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{ user.firstName }}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.ts ***!
  \*****************************************************************/
/*! exports provided: QuizSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSelectionComponent", function() { return QuizSelectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_session_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/session/user.service */ "./src/app/session/user.service.ts");



var QuizSelectionComponent = /** @class */ (function () {
    function QuizSelectionComponent(userService) {
        this.userService = userService;
    }
    QuizSelectionComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
        console.log(this.user);
    };
    QuizSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-selection',
            template: __webpack_require__(/*! ./quiz-selection.component.html */ "./src/app/home/quiz-selection/quiz-selection.component.html"),
            styles: [__webpack_require__(/*! ./quiz-selection.component.css */ "./src/app/home/quiz-selection/quiz-selection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_session_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], QuizSelectionComponent);
    return QuizSelectionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map