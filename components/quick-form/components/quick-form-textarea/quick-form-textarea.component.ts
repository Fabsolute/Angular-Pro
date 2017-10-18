import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../base.component';
import {QuickFormTextarea} from './quick-form-textarea';
import {QuickFormService} from '../../services/quick-form.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'quick-form-textarea',
    templateUrl: './quick-form-textarea.component.html',
    styleUrls: ['./quick-form-textarea.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormTextareaComponent}]
})

export class QuickFormTextareaComponent extends ComponentBase implements OnInit {


    @Input() protected options: QuickFormTextarea;


    constructor(public quick_form_service: QuickFormService) {
        super();
    }


    control: FormControl;

    ngOnInit() {
        console.log(this.options);
        if (this.options) {
            this.control = new FormControl(this.options.form_control_name,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(10)
                ]);
            this.quick_form_service.toFormControl(this.control);
        }

    }
}
