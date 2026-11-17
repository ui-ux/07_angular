import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-reactive-structure',
  templateUrl: './reactive-structure.component.html',
  imports: [ReactiveFormsModule, JsonPipe],
})
export class ReactiveStructureComponent {
  private fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    address: this.fb.nonNullable.group({
      city: '',
      state: '',
      postalCode: '',
    }),
    alternateEmails: this.fb.nonNullable.array<FormControl<string>>([]),
  });
  submittedValue: {
    address: { city: string; state: string; postalCode: string };
    alternateEmails: string[];
  } | null = null;

  get alternateEmails(): FormArray<FormControl<string>> {
    return this.form.controls.alternateEmails;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.nonNullable.control(''));
  }

  removeAlternateEmail(index: number) {
    this.alternateEmails.removeAt(index);
  }

  loadExample() {
    this.form.patchValue({
      address: {
        city: 'Kyiv',
        state: 'Kyiv region',
        postalCode: '01001',
      },
    });
  }

  onSubmit() {
    this.submittedValue = this.form.getRawValue();
  }
}
