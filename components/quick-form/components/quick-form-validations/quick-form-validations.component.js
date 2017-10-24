"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuickFormValidationComponent = (function () {
    function QuickFormValidationComponent(validation_service) {
        this.validation_service = validation_service;
    }
    Object.defineProperty(QuickFormValidationComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return this.validation_service.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], QuickFormValidationComponent.prototype, "control", void 0);
    QuickFormValidationComponent = __decorate([
        core_1.Component({
            selector: 'quick-form-validation',
            templateUrl: './quick-form-validations.component.html',
            styleUrls: ['./quick-form-validations.component.css']
        })
    ], QuickFormValidationComponent);
    return QuickFormValidationComponent;
}());
exports.QuickFormValidationComponent = QuickFormValidationComponent;
