import { Component } from '@angular/core';
import { ChildOutputParentComponent } from './child-output-parent/child-output-parent-component';

@Component({
  selector: 'output-parent',
  templateUrl: './output-parent-component.html',
  imports: [ChildOutputParentComponent],
})
export class OutputParentComponent {
  receivedItem = '';

  handleNewItem(item: string): void {
    this.receivedItem = item;
  }
}
