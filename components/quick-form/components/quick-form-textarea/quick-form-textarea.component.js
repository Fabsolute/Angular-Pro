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
var base_component_1 = require("../../../base.component");
var forms_1 = require("@angular/forms");
var QuickFormTextareaComponent = (function (_super) {
    __extends(QuickFormTextareaComponent, _super);
    function QuickFormTextareaComponent(quick_form_service) {
        var _this = _super.call(this) || this;
        _this.quick_form_service = quick_form_service;
        return _this;
    }
    QuickFormTextareaComponent_1 = QuickFormTextareaComponent;
    QuickFormTextareaComponent.prototype.ngOnInit = function () {
        if (this.required) {
            this.control = new forms_1.FormControl(this.form_control_name, [
                forms_1.Validators.required,
                forms_1.Validators.minLength((this.min_character) ? this.min_character : 0),
                forms_1.Validators.maxLength((this.max_character) ? this.max_character : 500)
            ]);
        }
        else {
            this.control = new forms_1.FormControl(this.form_control_name, [
                forms_1.Validators.minLength((this.min_character) ? this.min_character : 0),
                forms_1.Validators.maxLength((this.max_character) ? this.max_character : 500)
            ]);
        }
        this.quick_form_service.toFormControl(this.control);
    };
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "regex", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "min_character", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "max_character", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "control_class", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormTextareaComponent.prototype, "form_control_name", void 0);
    QuickFormTextareaComponent = QuickFormTextareaComponent_1 = __decorate([
        core_1.Component({
            selector: 'quick-form-textarea',
            templateUrl: './quick-form-textarea.component.html',
            styleUrls: ['./quick-form-textarea.component.css'],
            providers: [{ provide: base_component_1.ComponentBase, useExisting: QuickFormTextareaComponent_1 }]
        })
    ], QuickFormTextareaComponent);
    return QuickFormTextareaComponent;
    var QuickFormTextareaComponent_1;
}(base_component_1.ComponentBase));
exports.QuickFormTextareaComponent = QuickFormTextareaComponent;
