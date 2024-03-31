import { Component } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'template-directive-forms',
  templateUrl: './template-directive-forms.component.html',
  styleUrl: './template-directive-forms.component.scss'
})
export class TemplateDirectiveFormsComponent {
  languages = ['C++', 'C', 'JS', 'TS'];
  isSelect = true;
  userModel = new User(
    'TOM',
    'user@com.ua',
    1234567898,
    'default',
    'radio-value 1',
    false
    );

  validateSelect(value: string) {
    if (value === 'default'){
      this.isSelect = true;
    }
    else {
      this.isSelect = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
  }
}
