import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'child-output-parent',
  templateUrl: './child-output-parent.component.html',
  styleUrl: './child-output-parent.component.scss'
})
export class ChildOutputParentComponent {
  @Input() title: any;
  @Output() newItemEvent = new EventEmitter<string>();

  sendNewItem() {
    // this.newItemEvent.emit('Hello from the child!');
    this.newItemEvent.emit(this.title);
  }


  @ViewChild('myElement') myElement!: ElementRef;
  addTextToElement() {
    if (this.myElement) {
      this.myElement.nativeElement.textContent = 'New Text Added!';
    }
  }
}
