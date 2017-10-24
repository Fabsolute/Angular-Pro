import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../../../base.component';
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


    @Input() protected label: string;
    @Input() protected required: boolean;
    @Input() protected regex: string;
    @Input() protected min_character: number;
    @Input() protected max_character: number;
    @Input() protected class: string;
    @Input() protected value: string;
    @Input() protected control_class: string;
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
                    Validators.minLength((this.min_character) ? this.min_character : 0),
                    Validators.maxLength((this.max_character) ? this.max_character : 500)
                ]);
        } else {
            this.control = new FormControl(this.form_control_name,
                [
                    Validators.minLength((this.min_character) ? this.min_character : 0),
                    Validators.maxLength((this.max_character) ? this.max_character : 500)
                ]);
        }


        this.quick_form_service.toFormControl(this.control);

    }
}
