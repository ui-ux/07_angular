import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InitialsPipe } from './initials.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes-component.html',
  imports: [CommonModule, InitialsPipe],
})
export class PipesComponent {
  readonly date = new Date();
  readonly testText = 'TestTexT TestTexT';
  readonly pi = Math.PI;
  readonly cars = [
    { name: 'Ford', color: 'red' },
    { name: 'Audi', color: 'blue' },
    { name: 'MBW', color: 'brown' },
    { name: 'FIAT', color: 'green' },
    { name: 'Mazda', color: 'red' },
  ];
  readonly json = [
    { id: 1, name: 'jone' },
    { id: 2, name: 'mari' },
    { id: 3, name: 'rydi' },
  ];
}
