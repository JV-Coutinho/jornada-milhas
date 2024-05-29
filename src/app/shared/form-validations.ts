import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations{

    static equalto(otherField: string): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const fieldValue = control.value
            const otherFieldValue = control.root.get(otherField)?.value

            if(fieldValue !== otherFieldValue){
                return { equalto: true}
            }


            return null
        }
    }
}