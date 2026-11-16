import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class-component.html',
  styleUrl: './ng-class-component.scss',
  imports: [NgClass],
})
export class NgClassComponent {
  highlighted = false;

  toggleHighlight(): void {
    this.highlighted = !this.highlighted;
  }
}
