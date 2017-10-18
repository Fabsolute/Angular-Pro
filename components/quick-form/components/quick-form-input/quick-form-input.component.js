"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_component_1 = require("../base.component");
var forms_1 = require("@angular/forms");
var QuickFormInputComponent = QuickFormInputComponent_1 = (function (_super) {
    __extends(QuickFormInputComponent, _super);
    function QuickFormInputComponent(quick_form_service) {
        var _this = _super.call(this) || this;
        _this.quick_form_service = quick_form_service;
        return _this;
    }
    QuickFormInputComponent.prototype.ngOnInit = function () {
        console.log(this.options);
        if (this.options) {
            this.control = new forms_1.FormControl(this.options.form_control_name, [forms_1.Validators.required,
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(10)
            ]);
            this.quick_form_service.toFormControl(this.control);
        }
    };
    return QuickFormInputComponent;
}(base_component_1.ComponentBase));
__decorate([
    core_1.Input()
], QuickFormInputComponent.prototype, "options", void 0);
QuickFormInputComponent = QuickFormInputComponent_1 = __decorate([
    core_1.Component({
        selector: 'quick-form-input',
        templateUrl: './quick-form-input.component.html',
        styleUrls: ['./quick-form-input.component.css'],
        providers: [{ provide: base_component_1.ComponentBase, useExisting: QuickFormInputComponent_1 }]
    })
], QuickFormInputComponent);
exports.QuickFormInputComponent = QuickFormInputComponent;
var QuickFormInputComponent_1;
