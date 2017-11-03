import {Component, Input, OnInit} from '@angular/core';
import {ComponentBase} from '../../../base.component';
import {QuickFormButton} from './quick-form-button';
import {QuickFormService} from '../../services/quick-form.service';


@Component({
    selector: 'quick-form-buttons',
    templateUrl: './quick-form-buttons.component.html',
    styleUrls: ['./quick-form-buttons.component.css'],
    providers: [{provide: ComponentBase, useExisting: QuickFormButtonsComponent}]
})
export class QuickFormButtonsComponent extends ComponentBase implements OnInit {

    @Input() protected text: string;
    @Input() protected class: string;

    constructor(public quick_form_service: QuickFormService) {
        super();
    }

    ngOnInit() {
        // console.log(this.options);
        // if (this.options) {
        //     this.control = new FormControl(this.options.form_control_name,
        //         [Validators.required,
        //             Validators.minLength(3),
        //             Validators.maxLength(10)
        //         ]);
        //     this.quick_form_service.toFormControl(this.control);
        //
        // }

    }
}
