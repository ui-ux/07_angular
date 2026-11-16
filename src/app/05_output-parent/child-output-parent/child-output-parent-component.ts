import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'child-output-parent',
  templateUrl: './child-output-parent-component.html',
})
export class ChildOutputParentComponent {
  @Input() title = 'test string';
  @Output() readonly newItemEvent = new EventEmitter<string>();

  sendNewItem(): void {
    this.newItemEvent.emit(this.title);
  }

  @ViewChild('myElement') myElement!: ElementRef<HTMLElement>;
  addTextToElement(): void {
    if (this.myElement) {
      this.myElement.nativeElement.textContent = 'New Text Added!';
    }
  }
}
