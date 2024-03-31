import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent implements OnInit {
  registrationForm!: FormGroup;
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Test name'),
  //   password: new FormControl('123'),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['12', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([]),
    }, { validator: PasswordValidator } as AbstractControlOptions);

    this.registrationForm.get('subscribe')?.valueChanges
    .subscribe(checkedValue => {
      const email = this.registrationForm?.get('email');
      if (checkedValue) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });

  }


  get userName() {
    return this.registrationForm?.get('userName');
  }

  get email() {
    return this.registrationForm?.get('email');
  }

  get alternateEmails() {
    return this.registrationForm?.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }


  loadAPIData() {

    // setValue or patchValue (whith out address)
    // this.registrationForm?.patchValue({
    //   userName: 'Test Name 2',
    //   password: '12345',
    //   confirmPassword: 'test',
    //   address: {
    //     city: 'City',
    //     state: 'State',
    //     postalCode: '123456789'
    //   }
    // });
    this.registrationForm?.patchValue({
      userName: 'Test User name',
      password: 'test',
      confirmPassword: 'test'
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
