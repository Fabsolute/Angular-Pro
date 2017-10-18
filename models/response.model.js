"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseModel = (function () {
    function ResponseModel(body, headers, status_code) {
        this.body = body;
        this.headers = headers;
        this.status_code = status_code;
    }
    ResponseModel.prototype.getBody = function () {
        return this.body;
    };
    ResponseModel.prototype.getHeaders = function () {
        return this.headers;
    };
    ResponseModel.prototype.getStatusCode = function () {
        return this.status_code;
    };
    return ResponseModel;
}());
exports.ResponseModel = ResponseModel;
