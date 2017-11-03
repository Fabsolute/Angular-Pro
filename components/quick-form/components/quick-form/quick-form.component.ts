import {Component, Input, OnDestroy} from '@angular/core';
import {ComponentBase} from '../../../base.component';
import {FormGroup} from '@angular/forms';
import * as Rx from 'rxjs/Rx';
import {QuickFormService} from '../../services/quick-form.service';

@Component({
    selector: 'quick-form',
    templateUrl: './quick-form.component.html',
    styleUrls: ['./quick-form.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormComponent}]
})
export class QuickFormComponent extends ComponentBase implements OnDestroy {
    private subscriptions: Rx.Subscription[] = [];
    quick_form: FormGroup;
    @Input() protected clearButton: boolean = true;

    constructor(private quick_form_service: QuickFormService) {
        super();
        this.subscriptions.push(this.quick_form_service.quickFrom.subscribe(response => {
            console.log(response);
            this.quick_form = response as FormGroup;
        }));
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.quick_form.dirty && this.quick_form.valid) {
            console.log(this.quick_form);
        }
    }

    ngOnDestroy() {
        for (const subs of this.subscriptions) {
            subs.unsubscribe();
        }
        this.subscriptions.length = 0;
    }
}
