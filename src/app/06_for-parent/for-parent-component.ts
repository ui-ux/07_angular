import { Component, signal } from '@angular/core';
import { TESTS } from '../000_data-test/data-test';

interface ForItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-for-parent',
  templateUrl: './for-parent-component.html',
})
export class ForParentComponent {
  readonly testData = signal<ForItem[]>(TESTS);
  readonly emptyData = signal<ForItem[]>([]);

  addItem(): void {
    this.testData.update((items) => [
      ...items,
      { id: Math.max(0, ...items.map((item) => item.id)) + 1, name: 'New item' },
    ]);
  }
}
