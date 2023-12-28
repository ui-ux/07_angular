import { Component } from '@angular/core';

@Component({
  selector: 'output-parent',
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.scss'
})
export class OutputParentComponent {
  receivedItem: string = '';

  handleNewItem(item: string) {
    console.log(item);
    this.receivedItem = item;
  }
}
