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
var BadgeComponent = BadgeComponent_1 = (function (_super) {
    __extends(BadgeComponent, _super);
    function BadgeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadgeComponent;
}(base_component_1.ComponentBase));
__decorate([
    core_1.Input('background-color')
], BadgeComponent.prototype, "background_color", void 0);
__decorate([
    core_1.Input()
], BadgeComponent.prototype, "color", void 0);
__decorate([
    core_1.Input()
], BadgeComponent.prototype, "href", void 0);
BadgeComponent = BadgeComponent_1 = __decorate([
    core_1.Component({
        selector: 'badge',
        templateUrl: 'badge.component.html',
        styleUrls: ['badge.component.css'],
        providers: [{ provide: base_component_1.ComponentBase, useExisting: BadgeComponent_1 }]
    })
], BadgeComponent);
exports.BadgeComponent = BadgeComponent;
var BadgeComponent_1;
