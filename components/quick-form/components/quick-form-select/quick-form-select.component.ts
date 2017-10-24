import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../../../base.component';
import {QuickFormSelect, QuickFormSelectOption} from './quick-form-select';
import {QuickFormService} from '../../services/quick-form.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'quick-form-select',
    templateUrl: './quick-form-select.component.html',
    styleUrls: ['./quick-form-select.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormSelectComponent}]
})

export class QuickFormSelectComponent extends ComponentBase implements OnInit {


    @Input() protected label: string;
    @Input() protected required: boolean;
    @Input() protected class: string;
    @Input() protected value: string;
    @Input() protected data: QuickFormSelectOption;
    @Input() protected form_control_name: string;


    constructor(public quick_form_service: QuickFormService) {
        super();
    }

    control: FormControl;

    ngOnInit() {

        if (this.required) {
            this.control = new FormControl(this.form_control_name,
                [
                    Validators.required,
                ]);
        } else {
            this.control = new FormControl(this.form_control_name);
        }

        this.quick_form_service.toFormControl(this.control);

    }
}
