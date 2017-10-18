"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/toPromise");
var Rx = require("rxjs/Rx");
var forms_1 = require("@angular/forms");
var QuickFormService = (function () {
    function QuickFormService() {
        this.quickFromSubject = new Rx.Subject();
        this.formGroup = new forms_1.FormGroup({});
        this.quickFrom = this.quickFromSubject.asObservable();
    }
    QuickFormService.prototype.toFormControl = function (control) {
        this.formGroup.addControl(control.value, control);
        this.quickFromSubject.next(this.formGroup);
    };
    return QuickFormService;
}());
exports.QuickFormService = QuickFormService;
