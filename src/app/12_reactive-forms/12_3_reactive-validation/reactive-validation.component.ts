import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  imports: [ReactiveFormsModule, JsonPipe],
})
export class ReactiveValidationComponent {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group(
    {
      userName: [
        '',
        [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/i)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      subscribe: false,
      email: '',
    },
    { validators: PasswordValidator },
  );
  submittedValue: {
    userName: string;
    password: string;
    confirmPassword: string;
    subscribe: boolean;
    email: string;
  } | null = null;

  get userNameRequiredError(): boolean {
    const control = this.form.controls.userName;
    return control.touched && control.hasError('required');
  }

  get userNameMinLengthError(): boolean {
    const control = this.form.controls.userName;
    return control.touched && control.hasError('minlength');
  }

  get userNameForbiddenError(): boolean {
    const control = this.form.controls.userName;
    return control.touched && control.hasError('forbiddenName');
  }

  get passwordHasVisibleError(): boolean {
    const control = this.form.controls.password;
    return control.touched && control.invalid;
  }

  get confirmPasswordHasVisibleError(): boolean {
    const control = this.form.controls.confirmPassword;
    return control.touched && control.invalid;
  }

  get passwordMismatchVisible(): boolean {
    return this.form.controls.confirmPassword.touched && this.form.hasError('misMatch');
  }

  get emailHasVisibleError(): boolean {
    const control = this.form.controls.email;
    return control.touched && control.invalid;
  }

  constructor() {
    this.form.controls.subscribe.valueChanges.subscribe((subscribed) => {
      const email = this.form.controls.email;
      email.setValidators(subscribed ? [Validators.required, Validators.email] : []);
      email.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submittedValue = this.form.getRawValue();
  }
}
