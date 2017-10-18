"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var quick_table_component_1 = require("./components/quick-table/quick-table.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var quick_table_column_directive_1 = require("./components/quick-table/quick-table-column.directive");
var badge_component_1 = require("./components/badge/badge.component");
var quick_select_component_1 = require("./components/quick-select/quick-select.component");
var quick_select_item_directive_1 = require("./components/quick-select/quick-select-item.directive");
var repeat_module_1 = require("ngrepeat/repeat.module");
var pagination_component_1 = require("./components/pagination/pagination.component");
var smart_table_component_1 = require("./components/smart-table/smart-table.component");
var loader_component_1 = require("./components/loader/loader.component");
var router_1 = require("@angular/router");
var quick_form_component_1 = require("./components/quick-form/components/quick-form/quick-form.component");
var quick_form_input_component_1 = require("./components/quick-form/components/quick-form-input/quick-form-input.component");
var quick_form_select_component_1 = require("./components/quick-form/components/quick-form-select/quick-form-select.component");
var quick_form_textarea_component_1 = require("./components/quick-form/components/quick-form-textarea/quick-form-textarea.component");
var quick_form_buttons_component_1 = require("./components/quick-form/components/quick-form-buttons/quick-form-buttons.component");
var BNGModule = (function () {
    function BNGModule() {
    }
    return BNGModule;
}());
BNGModule = __decorate([
    core_1.NgModule({
        declarations: [
            quick_table_component_1.QuickTableComponent,
            quick_table_column_directive_1.QuickTableColumnDirective,
            badge_component_1.BadgeComponent,
            quick_select_component_1.QuickSelectComponent,
            quick_select_item_directive_1.QuickSelectItemDirective,
            pagination_component_1.PaginationComponent,
            smart_table_component_1.SmartTableComponent,
            loader_component_1.LoaderComponent,
            quick_form_component_1.QuickFormComponent,
            quick_form_input_component_1.QuickFormInputComponent,
            quick_form_select_component_1.QuickFormSelectComponent,
            quick_form_textarea_component_1.QuickFormTextareaComponent,
            quick_form_buttons_component_1.QuickFormButtonsComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            forms_1.ReactiveFormsModule,
            repeat_module_1.RepeatModule,
            router_1.RouterModule
        ],
        exports: [
            quick_table_component_1.QuickTableComponent,
            quick_table_column_directive_1.QuickTableColumnDirective,
            badge_component_1.BadgeComponent,
            quick_select_component_1.QuickSelectComponent,
            quick_select_item_directive_1.QuickSelectItemDirective,
            pagination_component_1.PaginationComponent,
            smart_table_component_1.SmartTableComponent,
            quick_form_component_1.QuickFormComponent,
            quick_form_input_component_1.QuickFormInputComponent,
            quick_form_select_component_1.QuickFormSelectComponent,
            quick_form_textarea_component_1.QuickFormTextareaComponent,
            quick_form_buttons_component_1.QuickFormButtonsComponent
        ]
    })
], BNGModule);
exports.BNGModule = BNGModule;
