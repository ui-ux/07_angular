import { Component } from '@angular/core';
import { TESTS } from '../data-test/data-test';

@Component({
  selector: 'if-element',
  templateUrl: './if-element.component.html',
  styleUrl: './if-element.component.scss'
})
export class IfElementComponent {
  testData = TESTS;

  methodIf() {
    return this.testData.length;
  }
}
