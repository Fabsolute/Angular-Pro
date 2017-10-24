"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var QuickFormValidationService = (function () {
    function QuickFormValidationService() {
    }
    QuickFormValidationService.prototype.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Boş bırakılamaz.',
            'EMAIL_REQUIRED': 'Email giriniz.',
            'PASSWORD_REQUIRED': 'Şifre en az 6 en fazla 16 karakter olmalıdır.',
            'PHONE_REQUIRED': 'Hatalı telefon numarası.',
            'NUMERIC_REQUIRED': 'Rakamsal veri giriniz.',
            'PASSWORD_CONFIRM_REQUIRED': 'Şifre tekrarı hatalı.',
            'IP_REQUIRED': 'Lütfen Ip formatında giriniz.',
            'minlength': 'Minimum karakter : ' + validatorValue.requiredLength,
            'maxlength': 'Maksimum karakter : ' + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    QuickFormValidationService.creditCardValidator = function (control) {
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    QuickFormValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value != null) {
            if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            }
            else {
                return { 'EMAIL_REQUIRED': true };
            }
        }
    };
    QuickFormValidationService.ipValidator = function (control) {
        if (control.value != null) {
            if (control.value.match(/^\d+\.\d+\.\d+\.\d+$/)) {
                return null;
            }
            else {
                return { 'IP_REQUIRED': true };
            }
        }
    };
    QuickFormValidationService.phoneValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value != null) {
            if (control.value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
                return null;
            }
            else {
                return { 'PHONE_REQUIRED': true };
            }
        }
    };
    QuickFormValidationService.numericValidator = function (control) {
        if (control.value.match(/[0-9]/) != null) {
            return null;
        }
        else {
            return {
                'NUMERIC_REQUIRED': true
            };
        }
    };
    QuickFormValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'PASSWORD_REQUIRED': true };
        }
    };
    QuickFormValidationService = __decorate([
        core_1.Injectable()
    ], QuickFormValidationService);
    return QuickFormValidationService;
}());
exports.QuickFormValidationService = QuickFormValidationService;
