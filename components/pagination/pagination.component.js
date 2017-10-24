"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.current_page_changed = new core_1.EventEmitter();
        this.total_item_count = 0;
        this.max_shown_page_count = 11;
        this.internal_item_count_per_page = 20;
        this.internal_current_page = 1;
    }
    Object.defineProperty(PaginationComponent.prototype, "item_count_per_page", {
        get: function () {
            return this.internal_item_count_per_page;
        },
        set: function (value) {
            if (value > 0) {
                this.internal_item_count_per_page = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "current_page", {
        get: function () {
            return this.internal_current_page;
        },
        set: function (value) {
            if (value > 0) {
                this.internal_current_page = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "total_page_count", {
        get: function () {
            var total_page_count = Math.ceil(this.total_item_count / this.item_count_per_page);
            if (total_page_count > 0) {
                return total_page_count;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "shown_page_count", {
        get: function () {
            if (this.total_page_count > this.max_shown_page_count) {
                return this.max_shown_page_count;
            }
            return this.total_page_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "start_page_index", {
        get: function () {
            var center_number_index_of_pages = Math.ceil(this.max_shown_page_count / 2);
            var center_of_pages = center_number_index_of_pages;
            if (this.current_page > center_of_pages) {
                center_of_pages = this.current_page;
            }
            if (center_of_pages + center_number_index_of_pages > this.total_page_count) {
                center_of_pages = this.total_page_count - center_number_index_of_pages + 1;
            }
            var start_page_index = center_of_pages - center_number_index_of_pages + 1;
            if (start_page_index < 1) {
                start_page_index = 1;
            }
            return start_page_index;
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.fireOnPageChanged = function (params) {
        this.current_page_changed.emit(params);
    };
    __decorate([
        core_1.Output('onPageChanged')
    ], PaginationComponent.prototype, "current_page_changed", void 0);
    __decorate([
        core_1.Input('total-item-count')
    ], PaginationComponent.prototype, "total_item_count", void 0);
    __decorate([
        core_1.Input('max-shown-page-count')
    ], PaginationComponent.prototype, "max_shown_page_count", void 0);
    __decorate([
        core_1.Input('item-count-per-page')
    ], PaginationComponent.prototype, "item_count_per_page", null);
    __decorate([
        core_1.Input('current-page')
    ], PaginationComponent.prototype, "current_page", null);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
