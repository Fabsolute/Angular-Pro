export class QuickFormSelect {
    public label: string;
    public required: string;
    public class: string;
    public value: string;
    public data: QuickFormSelectOption[];
    public control_class: string;
    public form_control_name: string;
}

export class QuickFormSelectOption {
    public text: string;
    public value: string;
}