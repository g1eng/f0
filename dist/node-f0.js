/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n// @ts-ignore\nvar fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\nvar F0 = /** @class */ (function () {\n    function F0(conf) {\n        if (conf !== undefined) {\n            if (conf.options === undefined)\n                conf.options = this.genOptions();\n            this.config = conf;\n        }\n        else {\n            this.config = this.genConfig();\n        }\n        this.method = this.config.options.method;\n    }\n    /**\n     * Generate and return default configuration template\n     * @this F0\n     * @return {F0Config} config template object\n     */\n    F0.prototype.genConfig = function () {\n        return {\n            hostname: \"http://localhost\",\n            resource: \"/\",\n            options: this.genOptions()\n        };\n    };\n    /**\n     * Generate and return fetch option template with\n     * a default custom header.\n     * @this F0\n     * @return {FetchOption} option template object\n     */\n    F0.prototype.genOptions = function () {\n        return {\n            method: 'GET',\n            headers: {\n                cache: 'no-cache',\n                'Content-Type': 'application/json',\n                'X-Requested-With': 'Fetch'\n            },\n        };\n    };\n    /**\n     * Set hostname to fetch\n     * @this F0\n     * @param {String} hostname hostname to send a request (e.g. http://example.com:8080)\n     */\n    F0.prototype.setHost = function (hostname) {\n        this.config.hostname = hostname;\n    };\n    /**\n     * Set a header for the request\n     * @param headerName\n     * @param headerValue\n     */\n    F0.prototype.setHeader = function (headerName, headerValue) {\n        this.config.options.headers[headerName] = headerValue;\n    };\n    /**\n     * Set resource to fetch\n     * @this F0\n     * @param {undefined|String} resource path to access (e.g. /api/resource )\n     */\n    F0.prototype.setResource = function (resource) {\n        if (typeof resource !== \"undefined\") {\n            this.config.resource = resource;\n        }\n    };\n    /**\n     * Set method for the request\n     * @param {String} method GET, POST, PUT, DELETE, PATCH or OPTIONS\n     */\n    F0.prototype.setMethod = function (method) {\n        this.config.options.method = method;\n        this.method = method;\n    };\n    /**\n     * Set body for the request\n     * @this F0\n     * @param {Object} body request body object or a string\n     */\n    F0.prototype.setBody = function (body) {\n        if (body !== undefined) {\n            this.config.options.body = body;\n        }\n    };\n    /**\n     * Flush any previous request body, premise and past response object\n     * @this F0\n     */\n    F0.prototype.flush = function () {\n        if (this.config.options.body)\n            delete this.config.options.body;\n        if (this.fetch)\n            delete this.fetch;\n        if (this.response)\n            delete this.response;\n        if (this.jsonBody)\n            delete this.jsonBody;\n    };\n    /**\n     * make GET request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.get = function (resource) {\n        this.flush();\n        this.setResource(resource);\n        this.setMethod('GET');\n        return this.makeRequest();\n    };\n    /**\n     * make POST request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @param {Object|String} body object or string which is sent within the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.post = function (resource, body) {\n        this.flush();\n        this.setResource(resource);\n        this.setBody(body);\n        this.setMethod('POST');\n        return this.makeRequest();\n    };\n    /**\n     * make PUT request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @param {Object|String} body object or string which is sent within the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.put = function (resource, body) {\n        this.flush();\n        this.setResource(resource);\n        this.setBody(body);\n        this.setMethod('PUT');\n        return this.makeRequest();\n    };\n    /**\n     * make DELETE request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.delete = function (resource) {\n        this.flush();\n        this.setResource(resource);\n        this.setMethod('DELETE');\n        return this.makeRequest();\n    };\n    /**\n     * make PATCH request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @param {Object|String} body object or string which is sent within the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.patch = function (resource, body) {\n        this.flush();\n        this.setResource(resource);\n        this.setBody(body);\n        this.setMethod('PATCH');\n        return this.makeRequest();\n    };\n    /**\n     * make OPTIONS request with preset host and resources\n     * @this F0\n     * @param {String} resource string to send the request\n     * @return {this} this for method chaining\n     */\n    F0.prototype.options = function (resource) {\n        this.flush();\n        this.setMethod('OPTIONS');\n        return this.makeRequest();\n    };\n    /**\n     * Make a request with preset config\n     * @this F0\n     */\n    F0.prototype.makeRequest = function () {\n        this.fetch = fetch(this.config.hostname + this.config.resource, this.config.options);\n        return this.resolve();\n    };\n    /**\n     * Sends a request and resolves the promise on this.fetch. This method promises to assign the response in this.response\n     * @this F0\n     * @return this this for method chaining\n     */\n    F0.prototype.resolve = function () {\n        var _this = this;\n        var _a;\n        this.fetch = (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.then(function (e) {\n            _this.response = e;\n            return _this.response;\n        }).catch(function () { return _this.response = undefined; });\n        return this;\n    };\n    /**\n     * Similar to resolve(), but does not send request and returns response object promise\n     * @this F0\n     * @return {Promise<object>} a promise which is resolved to response raw object\n     */\n    F0.prototype.res = function () {\n        var _this = this;\n        var _a;\n        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.then(function () { return _this.response; }).catch(function (e) { return e; });\n    };\n    /**\n     * Get a response json and assign it to this.jsonBody\n     * @this F0\n     * @return {Promise<Object>} a promise which is resolved to response json body\n     */\n    F0.prototype.json = function () {\n        var _this = this;\n        var _a;\n        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.then(function (e) {\n            return e === null || e === void 0 ? void 0 : e.json();\n        }).then(function (e) { return _this.jsonBody = e; }).then(function () { return _this.jsonBody; }).catch(function () { return undefined; });\n    };\n    /**\n     * Return a promise to resolve a status code\n     * @this F0\n     * @return {Promise<Number>}\n     */\n    F0.prototype.status = function () {\n        var _this = this;\n        var _a;\n        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.then(function () { var _a; return (_a = _this.response) === null || _a === void 0 ? void 0 : _a.status; }).catch(function () { return undefined; });\n    };\n    /**\n     * Matches status for a response and returns Promise to resolve a boolean\n     * @this F0\n     * @param code status code corresponding to the response\n     * @return {Promise<Boolean>}\n     */\n    F0.prototype.hasStatus = function (code) {\n        var _this = this;\n        var _a;\n        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.then(function () {\n            var _a;\n            if (((_a = _this.response) === null || _a === void 0 ? void 0 : _a.status) !== code)\n                throw new Error(\"\");\n            return true;\n        });\n    };\n    /**\n     * @this F0\n     * Returns true when the status code is 200 ok\n     */\n    F0.prototype.ok = function () {\n        if (this.response === undefined)\n            return false;\n        return this.response.ok;\n    };\n    return F0;\n}());\nmodule.exports = F0;\n\n\n//# sourceURL=webpack://F0/./src/index.ts?");

/***/ }),

/***/ "node-fetch":
/*!****************************************************************************!*\
  !*** external {"commonjs":"node-fetch","amd":"node-fetch","root":"fetch"} ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = require("node-fetch");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	exports.F0 = __webpack_exports__;
/******/ 	
/******/ })()
;