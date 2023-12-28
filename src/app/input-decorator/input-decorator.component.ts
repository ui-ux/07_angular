import { Component } from '@angular/core';
import { TESTS } from '../data-test/data-test';


@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrl: './input-decorator.component.scss'
})
export class InputDecoratorComponent {
  testData1 = TESTS[0];
  testData2 = TESTS[1];
  testData3 = TESTS[2];
}
