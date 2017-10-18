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
var quick_select_item_directive_1 = require("./quick-select-item.directive");
var forms_1 = require("@angular/forms");
var QuickSelectComponent = QuickSelectComponent_1 = (function (_super) {
    __extends(QuickSelectComponent, _super);
    function QuickSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name_selector = 'name';
        _this.item_selected = new core_1.EventEmitter();
        _this.is_disabled = false;
        return _this;
    }
    QuickSelectComponent.prototype.ngOnInit = function () {
        this.selected_item = "all";
    };
    Object.defineProperty(QuickSelectComponent.prototype, "value", {
        get: function () {
            return this.selected_item;
        },
        set: function (value) {
            if (value !== this.selected_item) {
                this.selected_item = value;
                this.changed();
            }
        },
        enumerable: true,
        configurable: true
    });
    QuickSelectComponent.prototype.writeValue = function (obj) {
        this.selected_item = obj;
        this.changed();
    };
    QuickSelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    QuickSelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    QuickSelectComponent.prototype.setDisabledState = function (is_disabled) {
        this.is_disabled = is_disabled;
    };
    QuickSelectComponent.prototype.changed = function () {
        this.item_selected.emit(this.selected_item);
        this.onChange(this.selected_item);
        // console.log('selected_item', this.selected_item);
    };
    return QuickSelectComponent;
}(base_component_1.ComponentBase));
__decorate([
    core_1.Input()
], QuickSelectComponent.prototype, "source", void 0);
__decorate([
    core_1.Input('name-selector')
], QuickSelectComponent.prototype, "name_selector", void 0);
__decorate([
    core_1.Input('value')
], QuickSelectComponent.prototype, "default_value", void 0);
__decorate([
    core_1.Output('item-selected')
], QuickSelectComponent.prototype, "item_selected", void 0);
__decorate([
    core_1.ContentChildren(quick_select_item_directive_1.QuickSelectItemDirective)
], QuickSelectComponent.prototype, "item_list", void 0);
QuickSelectComponent = QuickSelectComponent_1 = __decorate([
    core_1.Component({
        selector: 'quick-select',
        templateUrl: 'quick-select.component.html',
        providers: [
            {
                provide: base_component_1.ComponentBase,
                useExisting: QuickSelectComponent_1
            },
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: QuickSelectComponent_1,
                multi: true
            }
        ]
    })
], QuickSelectComponent);
exports.QuickSelectComponent = QuickSelectComponent;
var QuickSelectComponent_1;
