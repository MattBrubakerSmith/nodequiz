(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~session-session-module"],{

/***/ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js ***!
  \*****************************************************************************/
/*! exports provided: BaseStorageService, InMemoryStorageService, ProxyStorageService, sessionStorageFactory, localStorageFactory, SESSION_STORAGE, LOCAL_STORAGE, StorageServiceModule, JsonStorageTranscoder, StringStorageTranscoder, BooleanStorageTranscoder, NumberStorageTranscoder, StorageTranscoders, isStorageAvailable, WebStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseStorageService", function() { return BaseStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryStorageService", function() { return InMemoryStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyStorageService", function() { return ProxyStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionStorageFactory", function() { return sessionStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageFactory", function() { return localStorageFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_STORAGE", function() { return SESSION_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE", function() { return LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageServiceModule", function() { return StorageServiceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonStorageTranscoder", function() { return JsonStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringStorageTranscoder", function() { return StringStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanStorageTranscoder", function() { return BooleanStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberStorageTranscoder", function() { return NumberStorageTranscoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageTranscoders", function() { return StorageTranscoders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStorageAvailable", function() { return isStorageAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebStorageService", function() { return WebStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A storage service implementation that is used as a proxy for another storage service. This is used to create storage services with a
 * different default transcoder.
 * @template T
 */
var  /**
 * A storage service implementation that is used as a proxy for another storage service. This is used to create storage services with a
 * different default transcoder.
 * @template T
 */
ProxyStorageService = /** @class */ (function () {
    /**
     * Creates a new `ProxyStorageService` instance that uses the specified transcoder by default for read and write operations. Actual
     * read and writes are delegated to given storage service.
     *
     * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
     * @param subject           Storage service which should handle to actual storage of data.
     */
    function ProxyStorageService(defaultTranscoder, subject) {
        this.defaultTranscoder = defaultTranscoder;
        this.subject = subject;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    ProxyStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.subject.has(key);
    };
    /*
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param   key     Identifier of the entry whose value is to be retrieved.
     * @param   decoder Decoder to use for converting the stored value to the desired return type.
     * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    /*
         * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
         * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
         * `undefined` will be returned.
         *
         * @param   key     Identifier of the entry whose value is to be retrieved.
         * @param   decoder Decoder to use for converting the stored value to the desired return type.
         * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
         *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
         */
    /**
     * @param {?} key
     * @param {?=} decoder
     * @return {?}
     */
    ProxyStorageService.prototype.get = /*
         * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
         * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
         * `undefined` will be returned.
         *
         * @param   key     Identifier of the entry whose value is to be retrieved.
         * @param   decoder Decoder to use for converting the stored value to the desired return type.
         * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
         *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
         */
    /**
     * @param {?} key
     * @param {?=} decoder
     * @return {?}
     */
    function (key, decoder) {
        return this.subject.get(key, decoder || this.defaultTranscoder);
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param key     Identifier of the entry which is to be created or updated.
     * @param value   Value which is to be stored.
     * @param encoder Encoder used to convert the given value into a format that can be used for storage.
     */
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    ProxyStorageService.prototype.set = /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    function (key, value, encoder) {
        this.subject.set(key, value, encoder || this.defaultTranscoder);
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    ProxyStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.subject.remove(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    ProxyStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.subject.clear();
    };
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @returns            A new storage service that uses the specified transcoder by default.
     */
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    ProxyStorageService.prototype.withDefaultTranscoder = /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    function (transcoder) {
        return new ProxyStorageService(transcoder, this.subject);
    };
    return ProxyStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Base implementation for storage services.
 * @abstract
 * @template T
 */
var  /**
 * Base implementation for storage services.
 * @abstract
 * @template T
 */
BaseStorageService = /** @class */ (function () {
    /**
     * Creates a new `BaseStorageService` that uses the specified transcoder by default for read and write operations.
     *
     * @param defaultTranscoder Transcoder which is to be used by default for storage read and write operations.
     */
    function BaseStorageService(defaultTranscoder) {
        this.defaultTranscoder = defaultTranscoder;
    }
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param   key     Identifier of the entry whose value is to be retrieved.
     * @param   decoder Decoder to use for converting the stored value to the desired return type.
     * @returns         Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param {?} key     Identifier of the entry whose value is to be retrieved.
     * @param {?=} decoder Decoder to use for converting the stored value to the desired return type.
     * @return {?} Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    BaseStorageService.prototype.get = /**
     * Retrieves the value stored for the entry that is associated with the specified key. The given decoder is used to convert the stored
     * value to the desired type. If no entry for the specified key exists or if the decoder is unable to decode the stored value, then
     * `undefined` will be returned.
     *
     * @param {?} key     Identifier of the entry whose value is to be retrieved.
     * @param {?=} decoder Decoder to use for converting the stored value to the desired return type.
     * @return {?} Value of the entry that is identified by the specified key. In case the entry does not exist or if it cannot be
     *                  loaded (due to a decoding issue), then `undefined` will be returned by this function.
     */
    function (key, decoder) {
        /** @type {?} */
        var value = this.getItem(key);
        return value !== undefined ? (decoder || this.defaultTranscoder).decode(value) : undefined;
    };
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param key     Identifier of the entry which is to be created or updated.
     * @param value   Value which is to be stored.
     * @param encoder Encoder used to convert the given value into a format that can be used for storage.
     */
    /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    BaseStorageService.prototype.set = /**
     * Creates or updates the entry identified by the specified key with the given value. The specified encoder is used to convert the given
     * value into a format that can be stored by the storage service's underlying storage.
     *
     * Storing a value into the storage service will ensure that an equivalent of the value can be read back, i.e. the data and structure of
     * the value will be the same. It, however, does not necessarily return the same reference.
     *
     * @param {?} key     Identifier of the entry which is to be created or updated.
     * @param {?} value   Value which is to be stored.
     * @param {?=} encoder Encoder used to convert the given value into a format that can be used for storage.
     * @return {?}
     */
    function (key, value, encoder) {
        this.setItem(key, (encoder || this.defaultTranscoder).encode(value));
    };
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @param   transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @returns            A new storage service that uses the specified transcoder by default.
     */
    /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    BaseStorageService.prototype.withDefaultTranscoder = /**
     * Creates a new storage service that uses the specified transcoder by default for read and write operations. The new storage service
     * uses the storage service on which this function is invoked as underlying storage. Both storage services will thus be able to access
     * the same data.
     *
     * The default transcoder will not be changed for the storage service on which this function is invoked.
     *
     * @template X
     * @param {?} transcoder Transcoder that should be used by default for read and write operations by the new storage service.
     * @return {?} A new storage service that uses the specified transcoder by default.
     */
    function (transcoder) {
        return new ProxyStorageService(transcoder, this);
    };
    return BaseStorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transcoder that encodes values as JSON strings.
 */
var  /**
 * Transcoder that encodes values as JSON strings.
 */
JsonStorageTranscoder = /** @class */ (function () {
    function JsonStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    JsonStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JSON.stringify(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    JsonStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return JSON.parse(value);
        }
        catch (error) {
            return undefined;
        }
    };
    return JsonStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
 */
var  /**
 * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
 */
StringStorageTranscoder = /** @class */ (function () {
    function StringStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    StringStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StringStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value;
    };
    return StringStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes `boolean` values.
 */
var  /**
 * Transcoder that encodes/decodes `boolean` values.
 */
BooleanStorageTranscoder = /** @class */ (function () {
    function BooleanStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        return undefined;
    };
    return BooleanStorageTranscoder;
}());
/**
 * Transcoder that encodes/decodes `number` values.
 */
var  /**
 * Transcoder that encodes/decodes `number` values.
 */
NumberStorageTranscoder = /** @class */ (function () {
    function NumberStorageTranscoder() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberStorageTranscoder.prototype.encode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberStorageTranscoder.prototype.decode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var parsedNumber = Number(value);
        return Number.isFinite(parsedNumber) ? parsedNumber : undefined;
    };
    return NumberStorageTranscoder;
}());
/**
 * A set of storage transcoders.
 * @type {?}
 */
var StorageTranscoders = {
    /**
     * Transcoder that encodes values as JSON strings.
     */
    JSON: (/** @type {?} */ (new JsonStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes strings **as is**, i.e. values are not modified in any way.
     */
    STRING: (/** @type {?} */ (new StringStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes `boolean` values.
     */
    BOOLEAN: (/** @type {?} */ (new BooleanStorageTranscoder())),
    /**
     * Transcoder that encodes/decodes `number` values.
     */
    NUMBER: (/** @type {?} */ (new NumberStorageTranscoder()))
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A volatile `StorageService` implementation. This service guarantees that data stored will remain available as long as the application
 * instance is active. After the application is terminated all data will be lost.
 */
var  /**
 * A volatile `StorageService` implementation. This service guarantees that data stored will remain available as long as the application
 * instance is active. After the application is terminated all data will be lost.
 */
InMemoryStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryStorageService, _super);
    /**
     * Creates a new `InMemoryStorageService` instance.
     */
    function InMemoryStorageService() {
        var _this = _super.call(this, StorageTranscoders.JSON) || this;
        /**
         * A map that serves as the underlying backing storage for this service.
         */
        _this.storage = new Map();
        return _this;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    InMemoryStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.storage.has(key);
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    InMemoryStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.storage.delete(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    InMemoryStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.storage.clear();
    };
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    InMemoryStorageService.prototype.getItem = /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    function (key) {
        if (!this.storage.has(key)) {
            return undefined;
        }
        return (/** @type {?} */ (this.storage.get(key)));
    };
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @param key   Identifier of the entry for which the value is to be stored.
     * @param value The value that is to be stored.
     */
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    InMemoryStorageService.prototype.setItem = /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    function (key, value) {
        this.storage.set(key, value);
    };
    return InMemoryStorageService;
}(BaseStorageService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An implementation of `StorageService` interface that uses an underlying (web) `Storage` object, such as `localStorage` and
 * `sessionStorage`, as backing data store. This class basically wraps the `Storage` object so it can be accessed through the
 * `StorageService` interface.
 */
var  /**
 * An implementation of `StorageService` interface that uses an underlying (web) `Storage` object, such as `localStorage` and
 * `sessionStorage`, as backing data store. This class basically wraps the `Storage` object so it can be accessed through the
 * `StorageService` interface.
 */
WebStorageService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebStorageService, _super);
    /**
     * Creates a new `WebStorageService` instance that uses the specified (web) storage object as underlying backing storage.
     *
     * @param storage Storage object which is to be wrapped in a class that implements the `StorageService` interface.
     */
    function WebStorageService(storage) {
        var _this = _super.call(this, StorageTranscoders.JSON) || this;
        _this.storage = storage;
        return _this;
    }
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param   key Identifier of the entry for which its presence in the storage is to be checked.
     * @returns     `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    WebStorageService.prototype.has = /**
     * Checks whether an entry with the specified key exists in the storage.
     *
     * @param {?} key Identifier of the entry for which its presence in the storage is to be checked.
     * @return {?} `true` if an entry with the specified key exists in the storage, `false` if not.
     */
    function (key) {
        return this.storage.getItem(key) !== null;
    };
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param key Identifier of the entry which is to be removed.
     */
    /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    WebStorageService.prototype.remove = /**
     * Removes the entry that is identified by the specified key. Attempting to remove an entry for an unknown key will have no effect.
     * Attempting to retrieve an entry via the `get` method after it has been removed will result in `undefined`.
     *
     * @param {?} key Identifier of the entry which is to be removed.
     * @return {?}
     */
    function (key) {
        this.storage.removeItem(key);
    };
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     */
    /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    WebStorageService.prototype.clear = /**
     * Clears the storage by removing all entries. Subsequent `get(x)` calls for a key *x* will return `undefined`, until a new value is set
     * for key *x*.
     * @return {?}
     */
    function () {
        this.storage.clear();
    };
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @param   key Identifier of the entry whose value is to be retrieved.
     * @returns     The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    WebStorageService.prototype.getItem = /**
     * Performs the actual retrieval of a value from storage.
     *
     * @protected
     * @param {?} key Identifier of the entry whose value is to be retrieved.
     * @return {?} The value that is stored for the specified entry or `undefined` if no entry exists for the specified key.
     */
    function (key) {
        /** @type {?} */
        var value = this.storage.getItem(key);
        return value !== null ? value : undefined;
    };
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @param key   Identifier of the entry for which the value is to be stored.
     * @param value The value that is to be stored.
     */
    /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    WebStorageService.prototype.setItem = /**
     * Stores the provided value using specified key in the storage.
     *
     * @protected
     * @param {?} key   Identifier of the entry for which the value is to be stored.
     * @param {?} value The value that is to be stored.
     * @return {?}
     */
    function (key, value) {
        return this.storage.setItem(key, value);
    };
    return WebStorageService;
}(BaseStorageService));
/**
 * Checks whether the specified (web) storage is available and functional. This might not be the case for older browsers. However even
 * certain browsers that do support the web storage API can, under some circumstances, have non functional storage objects. For example,
 * Safari is known to have `localStorage` and `sessionStorage` throw exceptions in private mode.
 *
 * @param {?} storage Storage object which is to be tested for availability.
 * @return {?} `true` if the specified storage can be used, `false` if not.
 */
function isStorageAvailable(storage) {
    // Check if storage is available.
    if (!storage) {
        return false;
    }
    // Check if the storage can actually be accessed.
    try {
        /** @type {?} */
        var now = Date.now();
        /** @type {?} */
        var testItemKey = "storage-test-entry-" + now;
        /** @type {?} */
        var testItemValue = "storage-test-value-" + now;
        storage.setItem(testItemKey, testItemValue);
        /** @type {?} */
        var retrievedItemValue = storage.getItem(testItemKey);
        storage.removeItem(testItemKey);
        return retrievedItemValue === testItemValue;
    }
    catch (error) {
        return false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function sessionStorageFactory() {
    try {
        if ((/** @type {?} */ (typeof sessionStorage)) !== 'undefined' && isStorageAvailable(sessionStorage)) {
            return new WebStorageService(sessionStorage);
        }
    }
    catch (_a) { }
    return new InMemoryStorageService();
}
/**
 * Injection token for the session storage service.
 * @type {?}
 */
var SESSION_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SESSION_STORAGE', { providedIn: 'root', factory: sessionStorageFactory });
/**
 * @return {?}
 */
function localStorageFactory() {
    try {
        if ((/** @type {?} */ (typeof localStorage)) !== 'undefined' && isStorageAvailable(localStorage)) {
            return new WebStorageService(localStorage);
        }
    }
    catch (_a) { }
    return new InMemoryStorageService();
}
/**
 * Injection token for the local storage service.
 * @type {?}
 */
var LOCAL_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('LOCAL_STORAGE', { providedIn: 'root', factory: localStorageFactory });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated You no longer need to import the `StorageServiceModule`, since the `SESSION_STORAGE` and `LOCAL_STORAGE` injection tokens are
 * now 'self providing' in the root injector.
 */
var StorageServiceModule = /** @class */ (function () {
    function StorageServiceModule() {
    }
    StorageServiceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"] }
    ];
    return StorageServiceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-webstorage-service.js.map

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
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm5/ngx-webstorage-service.js");




var UserService = /** @class */ (function () {
    function UserService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.storageKey = "nodequiz_user";
    }
    UserService.prototype.loginUser = function (userId, callback) {
        var _this = this;
        this.userData$ = this.http.post("/api/users", { userId: userId }, { headers: { 'Content-Type': 'application/json' } });
        this.userData$.subscribe({
            next: function (data) {
                console.log(data);
                _this.storeInLocalStorage(data);
                callback(true);
            },
            error: function (err) {
                console.error(err);
                callback(false);
            }
        });
    };
    UserService.prototype.storeInLocalStorage = function (user) {
        this.storage.set(this.storageKey, user);
    };
    UserService.prototype.getUser = function () {
        return this.storage.get(this.storageKey);
    };
    UserService.prototype.getAllUsers = function (callback) {
        var users$ = this.http.get("/api/users", { headers: { 'Content-Type': 'application/json' } });
        users$.subscribe({
            next: function (data) { return callback(data); },
            error: function (err) { return console.error(err); }
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~session-session-module.js.map