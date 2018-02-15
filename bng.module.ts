import {QuickTableComponent} from './components/quick-table/quick-table.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {QuickTableColumnDirective} from './components/quick-table/quick-table-column.directive';
import {BadgeComponent} from './components/badge/badge.component';
import {QuickSelectComponent} from './components/quick-select/quick-select.component';
import {QuickSelectItemDirective} from './components/quick-select/quick-select-item.directive';
import {RepeatModule} from 'ngrepeat/repeat.module';
import {PaginationComponent} from './components/pagination/pagination.component';
import {SmartTableComponent} from './components/smart-table/smart-table.component';
import {LoaderComponent} from './components/loader/loader.component';
import {RouterModule} from '@angular/router';
import {CardHeaderComponent} from './components/card/card-header/card-header.component';
import {CardContentComponent} from './components/card/card-content/card-content.component';
import {CardFooterComponent} from './components/card/card-footer/card-footer.component';
import {CardContentRowComponent} from './components/card/card-content-row/card-content-row.component';
import {CardComponent} from './components/card/card.component';
import {MultiSelectBoxComponent} from './components/multi-select-box/multi-select-box.component';

@NgModule({
    declarations: [
        QuickTableComponent,
        QuickTableColumnDirective,
        BadgeComponent,
        QuickSelectComponent,
        QuickSelectItemDirective,
        PaginationComponent,
        SmartTableComponent,
        MultiSelectBoxComponent,
        LoaderComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardFooterComponent,
        CardContentRowComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RepeatModule,
        RouterModule
    ],
    exports: [
        QuickTableComponent,
        QuickTableColumnDirective,
        BadgeComponent,
        QuickSelectComponent,
        QuickSelectItemDirective,
        PaginationComponent,
        SmartTableComponent,
        MultiSelectBoxComponent,
        LoaderComponent,
        CardHeaderComponent,
        CardContentComponent,
        CardFooterComponent,
        CardContentRowComponent,
        CardComponent
    ]
})
export class BNGModule {
}
