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
var quick_table_column_directive_1 = require("./quick-table-column.directive");
var base_component_1 = require("../base.component");
var QuickTableComponent = QuickTableComponent_1 = (function (_super) {
    __extends(QuickTableComponent, _super);
    function QuickTableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.per_page = 20;
        _this.current_page = 1;
        _this.show_index_number = false;
        _this.current_page_changed = new core_1.EventEmitter();
        _this.index_list = [];
        return _this;
    }
    Object.defineProperty(QuickTableComponent.prototype, "renderFilter", {
        get: function () {
            return this.columns.some(function (column) {
                return column.filter_template != null;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuickTableComponent.prototype, "renderPagination", {
        get: function () {
            return this.total_count > this.per_page;
        },
        enumerable: true,
        configurable: true
    });
    QuickTableComponent.prototype.changePage = function (page) {
        this.current_page = page;
        this.current_page_changed.emit(page);
        this.getIndexNumberList(page);
    };
    QuickTableComponent.prototype.changePerPage = function (selected_item) {
        var query_value = selected_item.value;
        this.per_page = parseInt(query_value);
        this.getIndexNumberList(this.current_page);
    };
    QuickTableComponent.prototype.getIndexNumberList = function (current_page) {
        this.index_list = [];
        for (var index = 0; index < this.per_page; index++) {
            this.index_list.push((current_page * this.per_page) - (this.per_page - 1) + index);
        }
    };
    QuickTableComponent.prototype.ngAfterViewInit = function () {
        this.getIndexNumberList(this.current_page);
    };
    return QuickTableComponent;
}(base_component_1.ComponentBase));
__decorate([
    core_1.Input()
], QuickTableComponent.prototype, "title", void 0);
__decorate([
    core_1.Input()
], QuickTableComponent.prototype, "source", void 0);
__decorate([
    core_1.Input('total-count')
], QuickTableComponent.prototype, "total_count", void 0);
__decorate([
    core_1.Input('per-page')
], QuickTableComponent.prototype, "per_page", void 0);
__decorate([
    core_1.Input('current-page')
], QuickTableComponent.prototype, "current_page", void 0);
__decorate([
    core_1.Input('show-index-number')
], QuickTableComponent.prototype, "show_index_number", void 0);
__decorate([
    core_1.Output('onPageChanged')
], QuickTableComponent.prototype, "current_page_changed", void 0);
__decorate([
    core_1.ContentChildren(quick_table_column_directive_1.QuickTableColumnDirective)
], QuickTableComponent.prototype, "columns", void 0);
QuickTableComponent = QuickTableComponent_1 = __decorate([
    core_1.Component({
        selector: 'quick-table',
        templateUrl: 'quick-table.component.html',
        providers: [
            {
                provide: base_component_1.ComponentBase,
                useExisting: QuickTableComponent_1
            }
        ]
    })
], QuickTableComponent);
exports.QuickTableComponent = QuickTableComponent;
var QuickTableComponent_1;
