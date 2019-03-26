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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.routing */ "./src/app/home/home.routing.ts");
/* harmony import */ var _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-selection/quiz-selection.component */ "./src/app/home/quiz-selection/quiz-selection.component.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz.service */ "./src/app/home/quiz.service.ts");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/home/presentation/presentation.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_9__["QuizSelectionComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_8__["HomeRoutes"]),
            ],
            providers: [
                _quiz_service__WEBPACK_IMPORTED_MODULE_10__["QuizService"]
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

/***/ "./src/app/home/presentation/presentation.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/presentation/presentation.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/presentation/presentation.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/presentation/presentation.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  presentation works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/presentation/presentation.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/presentation/presentation.component.ts ***!
  \*************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/home/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/home/presentation/presentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    max-width: 800px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6LXNlbGVjdGlvbi9xdWl6LXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9xdWl6LXNlbGVjdGlvbi9xdWl6LXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <mat-card>\r\n    <mat-card-title>Quiz Selection</mat-card-title>\r\n    <mat-card-content>\r\n      <h2>Welcome to NodeQuiz, <span class=\"bold\">{{ user.firstName }}!</span></h2>\r\n      <p>Please select an option below to view a presentation and take a quiz!</p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button\r\n        *ngFor=\"let quiz of quizzes\"\r\n        mat-raised-button\r\n        [ngClass]=\"quiz.slug + '-btn'\"\r\n        [routerLink]=\"'/presentations/' + quiz.slug\"\r\n      >\r\n        {{ quiz.title }}\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

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
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/home/quiz.service.ts");




var QuizSelectionComponent = /** @class */ (function () {
    function QuizSelectionComponent(userService, quizService) {
        this.userService = userService;
        this.quizService = quizService;
    }
    QuizSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser();
        this.quizService.getAllQuizzes(function (quizzes) { return _this.quizzes = quizzes; });
        this.quizService.getQuizBySlug("devops", function (quiz) {
            console.log(quiz);
        });
    };
    QuizSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-selection',
            template: __webpack_require__(/*! ./quiz-selection.component.html */ "./src/app/home/quiz-selection/quiz-selection.component.html"),
            styles: [__webpack_require__(/*! ./quiz-selection.component.css */ "./src/app/home/quiz-selection/quiz-selection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_session_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], QuizSelectionComponent);
    return QuizSelectionComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/quiz.service.ts ***!
  \**************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getAllQuizzes = function (callback) {
        var quizzes$;
        quizzes$ = this.http.get("/api/quizzes");
        quizzes$.subscribe({
            next: function (data) {
                callback(data);
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    QuizService.prototype.getQuizBySlug = function (slug, callback) {
        var quiz$;
        quiz$ = this.http.get("/api/quizzes/" + slug);
        quiz$.subscribe({
            next: function (data) {
                callback(data);
            },
            error: function (err) {
                console.error(err);
            }
        });
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map