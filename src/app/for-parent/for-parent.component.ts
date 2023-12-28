import { Component } from '@angular/core';
import { TESTS } from '../data-test/data-test';

@Component({
  selector: 'app-for-parent',
  templateUrl: './for-parent.component.html',
  styleUrl: './for-parent.component.scss'
})
export class ForParentComponent {
  testData = TESTS;
  emptyData = [];
}
