// import {
//     Component, DoCheck, Input, IterableDiffer, IterableDiffers, KeyValueDiffers, OnInit,
//     SimpleChanges
// } from '@angular/core';
// import {QuickTableComponent} from '../quick-table/quick-table.component';
// import {GeneralAPIServiceBase} from '../../services/general-api.service';
// import 'nglinq/linq';
// import {QuickTableColumnDirective} from '../quick-table/quick-table-column.directive';
//
// @Component({
//     selector: 'smart-table',
//     templateUrl: '../quick-table/quick-table.component.html',
//     providers: [{provide: QuickTableComponent, useExisting: SmartTableComponent}]
// })
// export class SmartTableComponent extends QuickTableComponent implements OnInit, DoCheck {
//
//     public key_value_differ: any;
//
//     public constructor(private differs: KeyValueDiffers) {
//         super();
//         this.key_value_differ = this.differs.find(this.query_parameters).create(null);
//     }
//
//     @Input('api-source')
//     public api_source: GeneralAPIServiceBase<any>;
//
//     @Input('query-parameters')
//     public query_parameters = new Map<string, string>();
//
//     @Input()
//     public tag: string = 'all';
//
//     @Input('source-selector')
//     public source_selector = null;
//
//     public changePage(page: number) {
//         super.changePage(page);
//         this.refresh();
//     }
//
//     public changeSortType(column: QuickTableColumnDirective) {
//         super.changeSortType(column);
//         this.refresh();
//     }
//
//     public changePerPage(per_page) {
//         super.changePerPage(per_page);
//         this.refresh();
//     }
//
//     public getSourceFromAPI() {
//         this.is_request_loading = true;
//         this.api_source
//             .getResponseModel(this.current_page, this.per_page, this.query_parameters, this.tag, this.sort_by, this.is_column_sort_by_descending)
//             .then(source_response => {
//                 this.is_request_loading = false;
//                 let source = source_response.getBody();
//                 if (this.source_selector != null) {
//                     this.source = [];
//                     for (let content of source) {
//                         const selected_contents = this.source_selector(content);
//                         this.source = this.source.concat(selected_contents);
//                     }
//                 } else {
//                     this.source = source;
//                 }
//                 this.total_count = parseInt(source_response.getHeaders().get('x-total-count'), 10);
//             });
//     }
//
//     refresh(): void {
//         this.getSourceFromAPI();
//     }
//
//     ngOnInit() {
//         this.refresh();
//     }
//
//     ngDoCheck(): void {
//         const key_value_changed = this.key_value_differ.diff(this.query_parameters);
//         if (key_value_changed) {
//             this.refresh();
//         }
//     }
// }

import {
    Component, DoCheck, Input, IterableDiffer, IterableDiffers, OnChanges, OnInit,
    SimpleChanges
} from '@angular/core';
import {QuickTableComponent} from '../quick-table/quick-table.component';
import {GeneralAPIServiceBase} from '../../services/general-api.service';
import 'nglinq/linq';
import {QuickTableColumnDirective} from '../quick-table/quick-table-column.directive';

@Component({
    selector: 'smart-table',
    templateUrl: '../quick-table/quick-table.component.html',
    providers: [{provide: QuickTableComponent, useExisting: SmartTableComponent}]
})
export class SmartTableComponent extends QuickTableComponent implements OnInit, OnChanges, DoCheck {

    private key_iterable_differ: IterableDiffer<string>;
    private value_iterable_differ: IterableDiffer<string>;

    public constructor(private iterable_differs: IterableDiffers) {
        super();
        this.key_iterable_differ = this.iterable_differs.find([]).create(null);
        this.value_iterable_differ = this.iterable_differs.find([]).create(null);
    }

    @Input('api-source')
    public api_source: GeneralAPIServiceBase<any>;

    @Input('query-parameters')
    public query_parameters = new Map<string, string>();

    @Input()
    public tag: string = 'all';

    @Input('source-selector')
    public source_selector = null;

    public changePage(page: number) {
        super.changePage(page);
        this.getSourceFromAPI();
    }

    public changeSortType(column: QuickTableColumnDirective) {
        super.changeSortType(column);
        this.getSourceFromAPI();
    }

    public changePerPage(per_page) {
        super.changePerPage(per_page);
        this.getSourceFromAPI();
    }

    public getSourceFromAPI() {
        this.is_request_loading = true;
        this.api_source
            .getResponseModel(this.current_page, this.per_page, this.query_parameters, this.tag, this.sort_by, this.is_column_sort_by_descending)
            .then(source_response => {
                this.is_request_loading = false;
                let source = source_response.getBody();
                if (this.source_selector != null) {
                    this.source = [];
                    for (let content of source) {
                        const selected_contents = this.source_selector(content);
                        this.source = this.source.concat(selected_contents);
                    }
                } else {
                    this.source = source;
                }
                this.total_count = parseInt(source_response.getHeaders().get('x-total-count'), 10);
            });
    }

    refresh(): void {
        this.getSourceFromAPI();
    }

    ngOnInit(): void {
        this.refresh();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('api_source' in changes || 'query_parameters' in changes) {
            this.refresh();
        }
    }

    ngDoCheck(): void {
        const key_changes = this.key_iterable_differ.diff(this.query_parameters.keys());
        const value_changes = this.value_iterable_differ.diff(this.query_parameters.values());

        if (key_changes || value_changes) {
            // console.log('key_changes', key_changes);
            // console.log('value_changes', value_changes);
            // this.current_page = 1;todo
            this.refresh();
        }
    }
}