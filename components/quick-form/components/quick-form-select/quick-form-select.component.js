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
var QuickFormSelectComponent = (function (_super) {
    __extends(QuickFormSelectComponent, _super);
    function QuickFormSelectComponent(quick_form_service) {
        var _this = _super.call(this) || this;
        _this.quick_form_service = quick_form_service;
        return _this;
    }
    QuickFormSelectComponent_1 = QuickFormSelectComponent;
    QuickFormSelectComponent.prototype.ngOnInit = function () {
        if (this.required) {
            this.control = new forms_1.FormControl(this.form_control_name, [
                forms_1.Validators.required,
            ]);
        }
        else {
            this.control = new forms_1.FormControl(this.form_control_name);
        }
        this.quick_form_service.toFormControl(this.control);
    };
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "class", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input()
    ], QuickFormSelectComponent.prototype, "form_control_name", void 0);
    QuickFormSelectComponent = QuickFormSelectComponent_1 = __decorate([
        core_1.Component({
            selector: 'quick-form-select',
            templateUrl: './quick-form-select.component.html',
            styleUrls: ['./quick-form-select.component.css'],
            providers: [{ provide: base_component_1.ComponentBase, useExisting: QuickFormSelectComponent_1 }]
        })
    ], QuickFormSelectComponent);
    return QuickFormSelectComponent;
    var QuickFormSelectComponent_1;
}(base_component_1.ComponentBase));
exports.QuickFormSelectComponent = QuickFormSelectComponent;
