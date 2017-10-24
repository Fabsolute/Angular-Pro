import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../../../base.component';
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
    @Input() protected form_control_name: string;
    @Input() protected label: string;
    @Input() protected required: boolean;
    @Input() protected min_character: number;
    @Input() protected max_character: number;
    @Input() protected class: string;
    @Input() protected value: string;

    constructor(public quick_form_service: QuickFormService) {
        super();
    }

    control: FormControl;

    ngOnInit() {

        // const options: QuickFormInput = {
        //     label: this.label,
        //     required: this.required,
        //     regex: this.regex,
        //     type: this.type,
        //     class: this.class,
        //     value: this.value,
        //     control_class: this.control_class,
        //     form_control_name: this.form_control_name,
        //     min_character: this.min_character,
        //     max_character: this.max_character
        // };

        if (this.required) {
            this.control = new FormControl(this.form_control_name,
                [
                    Validators.required,
                    Validators.minLength((this.min_character) ? this.min_character : 0),
                    Validators.maxLength((this.max_character) ? this.max_character : 100)
                ]);
        } else {
            this.control = new FormControl(this.form_control_name,
                [
                    Validators.minLength((this.min_character) ? this.min_character : 0),
                    Validators.maxLength((this.max_character) ? this.max_character : 100)
                ]);
        }


        this.quick_form_service.toFormControl(this.control);
    }
}
