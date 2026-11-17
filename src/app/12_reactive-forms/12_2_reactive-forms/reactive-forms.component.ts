import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  imports: [ReactiveFormsModule, JsonPipe],
})
export class ReactiveFormsComponent {
  private fb = inject(FormBuilder);
  registrationForm = this.fb.nonNullable.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });
  submittedUser: { userName: string; email: string } | null = null;

  get userNameHasVisibleError(): boolean {
    const control = this.registrationForm.controls.userName;
    return control.invalid && control.touched;
  }

  get emailHasVisibleError(): boolean {
    const control = this.registrationForm.controls.email;
    return control.invalid && control.touched;
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.submittedUser = this.registrationForm.getRawValue();
  }
}
