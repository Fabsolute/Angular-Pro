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
var QuickFormComponent = (function (_super) {
    __extends(QuickFormComponent, _super);
    function QuickFormComponent(quick_form_service) {
        var _this = _super.call(this) || this;
        _this.quick_form_service = quick_form_service;
        _this.subscriptions = [];
        _this.clearButton = true;
        _this.subscriptions.push(_this.quick_form_service.quickFrom.subscribe(function (response) {
            console.log(response);
            _this.quick_form = response;
        }));
        return _this;
    }
    QuickFormComponent_1 = QuickFormComponent;
    QuickFormComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        if (this.quick_form.dirty && this.quick_form.valid) {
            console.log(this.quick_form);
        }
    };
    QuickFormComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subs = _a[_i];
            subs.unsubscribe();
        }
        this.subscriptions.length = 0;
    };
    __decorate([
        core_1.Input()
    ], QuickFormComponent.prototype, "clearButton", void 0);
    QuickFormComponent = QuickFormComponent_1 = __decorate([
        core_1.Component({
            selector: 'quick-form',
            templateUrl: './quick-form.component.html',
            styleUrls: ['./quick-form.component.css'],
            providers: [{ provide: base_component_1.ComponentBase, useExisting: QuickFormComponent_1 }]
        })
    ], QuickFormComponent);
    return QuickFormComponent;
    var QuickFormComponent_1;
}(base_component_1.ComponentBase));
exports.QuickFormComponent = QuickFormComponent;
