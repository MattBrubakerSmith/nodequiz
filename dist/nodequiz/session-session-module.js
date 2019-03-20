(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "./src/app/session/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/session/login/login.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: calc(100vw - 16px);\r\n    height: calc(100vh - 16px);\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nmat-card {\r\n    width: 350px;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-card-content {\r\n    margin-top: 20px;\r\n}\r\n\r\nmat-card-actions {\r\n    text-align: right;\r\n    margin: unset;\r\n    padding: unset;\r\n}\r\n\r\n.error {\r\n    color: #f44336;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vzc2lvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNnB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2cHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZjQ0MzM2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/session/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/session/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>User Login</mat-card-title>\n    <mat-divider inset></mat-divider>\n    \n      <form\n        [formGroup]=\"form\"\n        (ngSubmit)=\"onSubmit()\"\n      >\n        <mat-card-content>\n          <mat-form-field>\n            <input matInput formControlName=\"userId\" placeholder=\"User ID\" />\n          </mat-form-field>\n          <div\n            class=\"error\"\n            *ngIf=\"form.controls.userId.invalid && (form.controls.userId.dirty || form.controls.userId.touched)\"\n          >\n            <div\n              *ngIf=\"form.controls.userId.errors.required\"\n            >\n              User ID is required.\n            </div>\n            <div\n              *ngIf=\"form.controls.userId.errors.minlength\"\n            >\n              User ID must be at least 5 characters.\n            </div>\n            <div\n              *ngIf=\"form.controls.userId.errors.pattern\"\n            >\n              User ID can only contain numbers.\n            </div>\n          </div>\n        </mat-card-content>\n        <mat-card-actions>\n          <button\n            mat-raised-button\n            color=\"primary\"\n            type=\"submit\"\n            [disabled]=\"form.invalid || !form.valid\"\n          >\n            Submit\n          </button>\n        </mat-card-actions>\n      </form>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/session/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/session/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/session/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'userId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[0-9]*$/)
            ])
        });
        this.user = {
            next: function (x) { return console.log(x); },
            error: function (err) { return console.error(err); },
            complete: function () { return console.log("complete"); }
        };
    }
    LoginComponent.prototype.onSubmit = function () {
        this.userService.loginUser(this.form.controls.userId.value);
        this.userService.getUser().subscribe(this.user);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/session/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/session/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/session/not-found/not-found.component.css":
/*!***********************************************************!*\
  !*** ./src/app/session/not-found/not-found.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/session/not-found/not-found.component.html":
/*!************************************************************!*\
  !*** ./src/app/session/not-found/not-found.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page not found...</h1>\r\n"

/***/ }),

/***/ "./src/app/session/not-found/not-found.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/session/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/session/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/session/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/session/not-found/not-found.component.ts");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session.routing */ "./src/app/session/session.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.service */ "./src/app/session/user.service.ts");











var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_8__["SessionRoutes"]),
            ],
            providers: [
                _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/session.routing.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.routing.ts ***!
  \********************************************/
/*! exports provided: SessionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/session/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
// Session component imports


var SessionRoutes = [
    {
        path: '',
        children: [
            {
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/session/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/session/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loginUser = function (userId) {
        this.user$ = this.http.post("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
    };
    UserService.prototype.getUser = function () {
        return this.user$;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=session-session-module.js.map