(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 800px;\r\n    max-width: 95%;\r\n    margin: 30px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jdW11bGF0aXZlLXF1aXotcmVzdWx0cy9jdW11bGF0aXZlLXF1aXotcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2N1bXVsYXRpdmUtcXVpei1yZXN1bHRzL2N1bXVsYXRpdmUtcXVpei1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  *ngIf=\"users\"\n>\n  <div\n    fxLayout=\"row\"\n    *ngFor=\"let user of users\"\n  >\n    <div fxFlex></div>\n    <mat-card>\n      <mat-card-title>{{ user.firstName }} {{ user.lastName }} Quiz Results</mat-card-title>\n      <mat-divider inset></mat-divider>\n      <mat-card-content>\n        <div\n          *ngFor=\"let qr of user.quizResults\"\n        >\n          <h3 [ngClass]=\"getQuizById(qr.quizId).slug + '-color'\">{{ getQuizById(qr.quizId).title }} Quiz</h3>\n          <h4>Score: {{ qr.score }}</h4>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <div fxFlex></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CumulativeQuizResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CumulativeQuizResultsComponent", function() { return CumulativeQuizResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_session_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/session/user.service */ "./src/app/session/user.service.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/home/quiz.service.ts");




var CumulativeQuizResultsComponent = /** @class */ (function () {
    function CumulativeQuizResultsComponent(userService, quizService) {
        var _this = this;
        this.userService = userService;
        this.quizService = quizService;
        this.userService.getAllUsers(function (users) { return _this.users = users; });
        this.quizService.getAllQuizzesWithAnswers(function (quizzes) { return _this.quizzes = quizzes; });
    }
    CumulativeQuizResultsComponent.prototype.getQuizById = function (quizId) {
        for (var _i = 0, _a = this.quizzes; _i < _a.length; _i++) {
            var quiz = _a[_i];
            if (quizId == quiz["_id"])
                return quiz;
        }
    };
    CumulativeQuizResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cumulative-quiz-results',
            template: __webpack_require__(/*! ./cumulative-quiz-results.component.html */ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.html"),
            styles: [__webpack_require__(/*! ./cumulative-quiz-results.component.css */ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_session_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], CumulativeQuizResultsComponent);
    return CumulativeQuizResultsComponent;
}());



/***/ }),

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
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/home/quiz/quiz.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./quiz-results/quiz-results.component */ "./src/app/home/quiz-results/quiz-results.component.ts");
/* harmony import */ var _cumulative_quiz_results_cumulative_quiz_results_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cumulative-quiz-results/cumulative-quiz-results.component */ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.ts");
















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _quiz_selection_quiz_selection_component__WEBPACK_IMPORTED_MODULE_9__["QuizSelectionComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_11__["PresentationComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__["QuizComponent"], _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_14__["QuizResultsComponent"], _cumulative_quiz_results_cumulative_quiz_results_component__WEBPACK_IMPORTED_MODULE_15__["CumulativeQuizResultsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
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
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/home/presentation/presentation.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/home/quiz/quiz.component.ts");
/* harmony import */ var _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-results/quiz-results.component */ "./src/app/home/quiz-results/quiz-results.component.ts");
/* harmony import */ var _cumulative_quiz_results_cumulative_quiz_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumulative-quiz-results/cumulative-quiz-results.component */ "./src/app/home/cumulative-quiz-results/cumulative-quiz-results.component.ts");






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
            },
            {
                path: 'quizzes/:slug',
                component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_3__["QuizComponent"]
            },
            {
                path: 'presentations/:slug',
                component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_2__["PresentationComponent"]
            },
            {
                path: 'quiz-results/:slug',
                component: _quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_4__["QuizResultsComponent"]
            },
            {
                path: 'cumulative-results',
                component: _cumulative_quiz_results_cumulative_quiz_results_component__WEBPACK_IMPORTED_MODULE_5__["CumulativeQuizResultsComponent"]
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

module.exports = "mat-card {\r\n    width: 800px;\r\n    max-width: 95%;\r\n}\r\n\r\nmat-divider {\r\n    padding-bottom: 10px;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/presentation/presentation.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/presentation/presentation.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n    <mat-card>\r\n      <mat-card-title [ngClass]=\"slug + '-color'\">\r\n        {{ quiz?.title }} Presentation\r\n      </mat-card-title>\r\n      <mat-divider inset></mat-divider>\r\n      <mat-card-content>\r\n        <p>{{ quiz?.description }}</p>\r\n        <video controls reload=\"none\">\r\n          <source src=\"{{'../../../assets/presentations/' + slug + '.mp4'}}\" />\r\n        </video>\r\n      </mat-card-content>\r\n      <mat-card-actions\r\n        fxLayout=\"row\"\r\n        fxLayoutAlign=\"center start\"\r\n      >\r\n        <button\r\n          mat-button\r\n          class=\"quiz-btn\"\r\n          [ngClass]=\"slug + '-bg'\"\r\n          [routerLink]=\"'/quizzes/' + slug\"\r\n        >\r\n          Begin Quiz\r\n        </button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  <div fxFlex></div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/home/quiz.service.ts");




var PresentationComponent = /** @class */ (function () {
    function PresentationComponent(route, quizService) {
        var _this = this;
        this.route = route;
        this.quizService = quizService;
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.quizService.getQuizDescriptionBySlug(this.slug, function (quiz) { return _this.quiz = quiz; });
    }
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/home/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/home/presentation/presentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz-results/quiz-results.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/quiz-results/quiz-results.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 800px;\r\n    max-width: 95%;\r\n    margin: 30px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6LXJlc3VsdHMvcXVpei1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcXVpei1yZXN1bHRzL3F1aXotcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/quiz-results/quiz-results.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/quiz-results/quiz-results.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <div fxFlex></div>\n  <mat-card\n    *ngIf=\"quizResult\"\n  >\n    <mat-card-title [ngClass]=\"quiz.slug + '-color'\">{{ quiz.title }} Quiz Results for {{ user.firstName }} {{ user.lastName }}</mat-card-title>\n    <mat-card-content>\n      <mat-list \n        role=\"list\"\n        fxLayout=\"column\"\n      >\n        <mat-list-item\n          *ngFor=\"let question of quiz.questions; let i = index\"\n          fxFlex=\"50%\"\n        >\n          Question {{ i + 1 }}: {{ question.correctAnswerIndex == quizResult.answers[i] ? \"&#10004;\" : \"&#x2716;\" }}\n        </mat-list-item>\n      </mat-list>\n      <h4>Score: {{ quizResult.score }}%</h4>\n    </mat-card-content>\n  </mat-card>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/home/quiz-results/quiz-results.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/quiz-results/quiz-results.component.ts ***!
  \*************************************************************/
/*! exports provided: QuizResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultsComponent", function() { return QuizResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/home/quiz.service.ts");
/* harmony import */ var src_app_session_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/session/user.service */ "./src/app/session/user.service.ts");





var QuizResultsComponent = /** @class */ (function () {
    function QuizResultsComponent(route, quizService, userService) {
        var _this = this;
        this.route = route;
        this.quizService = quizService;
        this.userService = userService;
        this.user = this.userService.getUser();
        var slug = this.route.snapshot.paramMap.get("slug");
        this.quizService.getQuizBySlug(slug, function (quiz) {
            _this.quiz = quiz;
            var quizId = _this.quiz["_id"];
            for (var _i = 0, _a = _this.user["quizResults"]; _i < _a.length; _i++) {
                var qr = _a[_i];
                if (qr.quizId == quizId) {
                    _this.quizResult = qr;
                }
            }
        });
    }
    QuizResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-results',
            template: __webpack_require__(/*! ./quiz-results.component.html */ "./src/app/home/quiz-results/quiz-results.component.html"),
            styles: [__webpack_require__(/*! ./quiz-results.component.css */ "./src/app/home/quiz-results/quiz-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"], src_app_session_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());



/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.css":
/*!******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    max-width: 95%;\r\n    width: 800px;\r\n    margin: 30px 0px;\r\n}\r\n\r\nmat-card-content {\r\n    height: 250px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6LXNlbGVjdGlvbi9xdWl6LXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9xdWl6LXNlbGVjdGlvbi9xdWl6LXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/quiz-selection/quiz-selection.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/quiz-selection/quiz-selection.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <mat-card>\r\n    <mat-card-title>Quiz Selection</mat-card-title>\r\n    <mat-card-content \r\n      fxLayout=\"column\"\r\n      fxLayoutAlign=\"center center\"\r\n    >\r\n      <h2>Welcome to NodeQuiz, {{ user?.firstName }}!</h2>\r\n      <p>Please select an option below to view a presentation and take a quiz!</p>\r\n    </mat-card-content>\r\n    <mat-card-actions\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"center start\"\r\n      fxLayoutGap=\"2%\"\r\n    >\r\n      <button\r\n        *ngFor=\"let quiz of mockQuizzes\"\r\n        mat-button\r\n        class=\"quiz-btn\"\r\n        [ngClass]=\"quiz.slug + '-bg'\"\r\n        [routerLink]=\"'/presentations/' + quiz.slug\"\r\n      >\r\n        {{ quiz.title }}\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n  <div fxFlex></div>\r\n</div>"

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
        this.mockQuizzes = [
            {
                title: "Enterprise JavaScript",
                description: "",
                slug: "enterprise-javascript"
            },
            {
                title: "RESTful APIs",
                description: "",
                slug: "restful-apis"
            },
            {
                title: "DevOps",
                description: "",
                slug: "devops"
            }
        ];
    }
    QuizSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getUser();
        this.quizService.getAllQuizzes(function (quizzes) { return _this.quizzes = quizzes; });
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
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
        });
    };
    QuizService.prototype.getAllQuizzesWithAnswers = function (callback) {
        var quizzes$;
        quizzes$ = this.http.get("/api/quizzes/with-answers");
        quizzes$.subscribe({
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
        });
    };
    QuizService.prototype.getQuizBySlug = function (slug, callback) {
        var quiz$;
        quiz$ = this.http.get("/api/quizzes/" + slug);
        quiz$.subscribe({
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
        });
    };
    QuizService.prototype.getQuizDescriptionBySlug = function (slug, callback) {
        var quiz$;
        quiz$ = this.http.get("/api/quizzes/description/" + slug);
        quiz$.subscribe({
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
        });
    };
    QuizService.prototype.submitQuizAnswers = function (userId, quizId, answers, score, callback) {
        var quizResult$;
        quizResult$ = this.http.patch("api/users", {
            userId: userId,
            quizId: quizId,
            answers: answers,
            score: score
        });
        quizResult$.subscribe({
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
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



/***/ }),

/***/ "./src/app/home/quiz/quiz.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 800px;\r\n    max-width: 95%;\r\n    margin: 30px 0px;\r\n}\r\n\r\nmat-card-content {\r\n    min-height: 300px;\r\n}\r\n\r\nmat-card-content label {\r\n    font-size: 1.4em;\r\n    font-weight: 500;\r\n}\r\n\r\nmat-radio-group {\r\n    margin-top: 20px;\r\n}\r\n\r\nmat-radio-button {\r\n    margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9xdWl6L3F1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQgbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/quiz/quiz.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <mat-card\r\n    *ngIf=\"quiz\"\r\n  >\r\n    <mat-card-title>{{ quiz.title }} Quiz</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <mat-progress-bar\r\n        [value]=\"getProgress()\"\r\n      ></mat-progress-bar>\r\n    </mat-card-subtitle>\r\n    <mat-card-content\r\n      fxLayout=\"column\"\r\n      fxLayoutAlign=\"center center\"\r\n    >\r\n      <label id=\"answers-radio-group\">{{ questions[questionIndex].question }}</label>\r\n      <mat-radio-group\r\n        aria-labelledby=\"answers-radio-group\"\r\n        [(ngModel)]=\"selectedAnswers[questionIndex]\"\r\n        fxLayout=\"column\"\r\n      >\r\n        <mat-radio-button\r\n          *ngFor=\"let answer of questions[questionIndex].answers; let i = index\"\r\n          [value]=\"i\"\r\n        >\r\n          <span class=\"i-hate-angular\">{{ answer }}</span>\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </mat-card-content>\r\n    <mat-card-actions\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"space-between start\"\r\n    >\r\n      <button\r\n        mat-flat-button\r\n        color=\"accent\"\r\n        (click)=\"prevQuestion()\"\r\n        [disabled]=\"questionIndex <= 0\"\r\n      >\r\n        Previous Question\r\n      </button>\r\n      <button\r\n        mat-flat-button\r\n        color=\"primary\"\r\n        (click)=\"submitQuiz()\"\r\n        [disabled]=\"selectedAnswers.includes(null)\"\r\n      >\r\n        Submit Quiz\r\n      </button>\r\n      <button\r\n        mat-flat-button\r\n        color=\"accent\"\r\n        (click)=\"nextQuestion()\"\r\n        [disabled]=\"questionIndex >= questions.length - 1\"\r\n      >\r\n        Next Question\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n  <div fxFlex></div>\r\n  <style>\r\n    .i-hate-angular {\r\n      white-space: normal;\r\n    }\r\n  </style>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/quiz/quiz.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/quiz/quiz.component.ts ***!
  \*********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/home/quiz.service.ts");
/* harmony import */ var src_app_session_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/session/user.service */ "./src/app/session/user.service.ts");





var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, quizService, userService, router) {
        var _this = this;
        this.route = route;
        this.quizService = quizService;
        this.userService = userService;
        this.router = router;
        this.questionIndex = 0;
        this.selectedAnswers = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ];
        this.slug = this.route.snapshot.paramMap.get("slug");
        this.quizService.getQuizBySlug(this.slug, function (quiz) {
            _this.quiz = quiz;
            _this.questions = quiz.questions;
        });
        this.user = this.userService.getUser();
    }
    QuizComponent.prototype.nextQuestion = function () {
        if (this.questionIndex >= this.questions.length - 1)
            return;
        this.questionIndex++;
    };
    QuizComponent.prototype.prevQuestion = function () {
        if (this.questionIndex <= 0)
            return;
        this.questionIndex--;
    };
    QuizComponent.prototype.getProgress = function () {
        var answerCount = 0;
        for (var _i = 0, _a = this.selectedAnswers; _i < _a.length; _i++) {
            var sa = _a[_i];
            if (sa != null)
                answerCount++;
        }
        return answerCount * 10;
    };
    QuizComponent.prototype.submitQuiz = function () {
        var _this = this;
        var score = 0;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].correctAnswerIndex == this.selectedAnswers[i])
                score += 10;
        }
        this.quizService.submitQuizAnswers(this.user.userId, this.quiz["_id"], this.selectedAnswers, score, function (qr) {
            console.log(qr);
            _this.userService.loginUser(_this.user.userId, function (success) {
                if (success)
                    _this.router.navigate(["/quiz-results/" + _this.slug]);
            });
        });
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/home/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/home/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"], src_app_session_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map