import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../base.component';
import {QuickFormInput} from './quick-form-input';
import {QuickFormService} from '../../services/quick-form.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'quick-form-input',
    templateUrl: './quick-form-input.component.html',
    styleUrls: ['./quick-form-input.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormInputComponent}]
})
export class QuickFormInputComponent extends ComponentBase implements OnInit {

    @Input() protected options: QuickFormInput;

    constructor(public quick_form_service: QuickFormService) {
        super();
    }

    control: FormControl;

    ngOnInit() {
        console.log(this.options);
        if (this.options) {
            this.control = new FormControl(this.options.form_control_name,
                [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(10)
                ]);
            this.quick_form_service.toFormControl(this.control);

        }

    }
}
