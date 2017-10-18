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
var quick_table_component_1 = require("../quick-table/quick-table.component");
var SmartTableComponent = SmartTableComponent_1 = (function (_super) {
    __extends(SmartTableComponent, _super);
    function SmartTableComponent(iterable_differs) {
        var _this = _super.call(this) || this;
        _this.iterable_differs = iterable_differs;
        _this.query_parameters = new Map();
        _this.key_iterable_differ = _this.iterable_differs.find([]).create(null);
        _this.value_iterable_differ = _this.iterable_differs.find([]).create(null);
        return _this;
    }
    SmartTableComponent.prototype.changePage = function (page) {
        _super.prototype.changePage.call(this, page);
        this.getSourceFromAPI();
    };
    SmartTableComponent.prototype.changePerPage = function (per_page) {
        _super.prototype.changePerPage.call(this, per_page);
        this.getSourceFromAPI();
    };
    SmartTableComponent.prototype.getSourceFromAPI = function () {
        var _this = this;
        this.is_request_loading = true;
        this.api_source
            .getResponseModel(this.current_page, this.per_page, this.query_parameters)
            .then(function (source_response) {
            _this.is_request_loading = false;
            _this.source = source_response.getBody();
            _this.total_count = parseInt(source_response.getHeaders().get('x-total-count'), 10);
        });
    };
    SmartTableComponent.prototype.refresh = function () {
        this.getSourceFromAPI();
    };
    SmartTableComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    SmartTableComponent.prototype.ngOnChanges = function (changes) {
        if ('api_source' in changes || 'query_parameters' in changes) {
            this.refresh();
        }
    };
    SmartTableComponent.prototype.ngDoCheck = function () {
        var key_changes = this.key_iterable_differ.diff(this.query_parameters.keys());
        var value_changes = this.value_iterable_differ.diff(this.query_parameters.values());
        if (key_changes || value_changes) {
            // console.log('key_changes', key_changes);
            // console.log('value_changes', value_changes);
            // this.current_page = 1;todo
            this.refresh();
        }
    };
    return SmartTableComponent;
}(quick_table_component_1.QuickTableComponent));
__decorate([
    core_1.Input('api-source')
], SmartTableComponent.prototype, "api_source", void 0);
__decorate([
    core_1.Input('query-parameters')
], SmartTableComponent.prototype, "query_parameters", void 0);
SmartTableComponent = SmartTableComponent_1 = __decorate([
    core_1.Component({
        selector: 'smart-table',
        templateUrl: '../quick-table/quick-table.component.html',
        providers: [{ provide: quick_table_component_1.QuickTableComponent, useExisting: SmartTableComponent_1 }]
    })
], SmartTableComponent);
exports.SmartTableComponent = SmartTableComponent;
var SmartTableComponent_1;
