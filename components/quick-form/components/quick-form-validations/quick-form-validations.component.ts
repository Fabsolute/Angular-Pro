import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {QuickFormValidationService} from './quick-form-validations.service';

@Component({
    selector: 'quick-form-validation',
    templateUrl: './quick-form-validations.component.html',
    styleUrls: ['./quick-form-validations.component.css']
})
export class QuickFormValidationComponent {


    @Input() control: FormControl;

    constructor(private  validation_service: QuickFormValidationService) {


    }


    get errorMessage() {

        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return this.validation_service.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }

}
