import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../base.component';
import {QuickFormSelect} from './quick-form-select';
import {QuickFormService} from '../../services/quick-form.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'quick-form-select',
    templateUrl: './quick-form-select.component.html',
    styleUrls: ['./quick-form-select.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormSelectComponent}]
})

export class QuickFormSelectComponent extends ComponentBase implements OnInit {


    @Input() protected options: QuickFormSelect;

    constructor(public quick_form_service: QuickFormService) {
        super();
    }

    control: FormControl;

    ngOnInit() {
        console.log(this.options);
        if (this.options) {
            this.control = new FormControl(this.options.form_control_name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10)
            ]);
            this.quick_form_service.toFormControl(this.control);
        }
    }
}
