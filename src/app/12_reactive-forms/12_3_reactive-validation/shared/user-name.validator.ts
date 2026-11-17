import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '');
    const forbidden = forbiddenName.test(value);
    return forbidden ? { forbiddenName: { value } } : null;
  };
}
