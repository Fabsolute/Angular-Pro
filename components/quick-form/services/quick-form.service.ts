import 'rxjs/add/operator/toPromise';
import * as Rx from 'rxjs/Rx';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export class QuickFormService {

    quickFromSubject: Rx.Subject<any> = new Rx.Subject<any>();
    quickFrom: Rx.Observable<any>;

    constructor() {
        this.quickFrom = this.quickFromSubject.asObservable();
    }

    formGroup: FormGroup = new FormGroup({});

    toFormControl(control: FormControl) {
        this.formGroup.addControl(control.value, control);
        this.quickFromSubject.next(this.formGroup);
    }
}
