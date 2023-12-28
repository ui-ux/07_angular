import { Component, Input } from '@angular/core';
import { Test1 } from '../../models/modelTest-1';

@Component({
  selector: 'child-input-decorator',
  templateUrl: './child-input-decorator.component.html',
  styleUrl: './child-input-decorator.component.scss'
})
export class ChildInputDecoratorComponent {
  @Input() title!: Test1;
  // @Input({ required: true }) title!: Test1;
  // by default - required: false
  @Input() hasTitle!: boolean;
}
