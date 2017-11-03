import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RepeatModule} from 'ngrepeat/repeat.module';
import {QuickFormComponent} from './components/quick-form/quick-form.component';
import {QuickFormInputComponent} from './components/quick-form-input/quick-form-input.component';
import {RouterModule} from '@angular/router';
import {QuickFormSelectComponent} from './components/quick-form-select/quick-form-select.component';
import {QuickFormTextareaComponent} from './components/quick-form-textarea/quick-form-textarea.component';
import {QuickFormService} from './services/quick-form.service';
import {QuickFormButtonsComponent} from './components/quick-form-buttons/quick-form-buttons.component';
import {QuickFormValidationComponent} from './components/quick-form-validations/quick-form-validations.component';
import {QuickFormValidationService} from './components/quick-form-validations/quick-form-validations.service';


@NgModule({
    declarations: [
        QuickFormComponent,
        QuickFormInputComponent,
        QuickFormSelectComponent,
        QuickFormTextareaComponent,
        QuickFormButtonsComponent,
        QuickFormValidationComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RepeatModule,
        RouterModule
    ],
    providers: [QuickFormService, QuickFormValidationService],
    exports: [
        QuickFormComponent,
        QuickFormInputComponent,
        QuickFormSelectComponent,
        QuickFormTextareaComponent,
        QuickFormButtonsComponent,
        QuickFormValidationComponent,
    ]
})
export class QuickFormModule {
}
