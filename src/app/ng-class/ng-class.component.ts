import { Component } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  addClass() {
    return { 'bg-tomato': true, 'color-white': true };
  }
}
