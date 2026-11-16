import { Component, Input, input } from '@angular/core';
import { Test1 } from '../../000_models/modelTest-1';

@Component({
  selector: 'child-input-decorator',
  templateUrl: './child-input-decorator-component.html',
})
export class ChildInputDecoratorComponent {
  @Input() legacyTitle?: Test1;
  readonly title = input<Test1>();
}
