import { Component, signal } from '@angular/core';
import { TESTS } from '../000_data-test/data-test';
import { ChildInputDecoratorComponent } from './child-input-decorator/child-input-decorator.component';

@Component({
  selector: 'app-input-decorator',
  imports: [ChildInputDecoratorComponent],
  templateUrl: './input-decorator-component.html',
})
export class InputDecoratorComponent {
  readonly testData1 = TESTS[0];
  readonly testData2 = TESTS[1];
  readonly testData3 = TESTS[2];
  readonly signalTitle = signal(TESTS[0]);

  changeSignalTitle(): void {
    this.signalTitle.set(this.signalTitle() === TESTS[0] ? TESTS[1] : TESTS[0]);
  }
}
