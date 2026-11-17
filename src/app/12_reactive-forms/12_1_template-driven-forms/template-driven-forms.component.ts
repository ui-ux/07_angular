import { Component } from '@angular/core';
import { User } from '../../000_models/user';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'template-directive-forms',
  templateUrl: './template-driven-forms.component.html',
  imports: [FormsModule, JsonPipe],
})
export class TemplateDirectiveFormsComponent {
  languages = ['C++', 'C', 'JS', 'TS'];
  userModel = new User('TOM', 'user@com.ua', '1234567898', '', 'radio-value 1', false);
  submittedUser: User | null = null;

  onSubmit() {
    this.submittedUser = { ...this.userModel };
  }
}
