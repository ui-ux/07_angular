import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-focus-target',
  templateUrl: './focus-target.component.html',
  styleUrl: './focus-target.component.scss',
})
export class FocusTargetComponent {
  @ViewChild('input') private input!: ElementRef<HTMLInputElement>;

  focusInput(): void {
    this.input.nativeElement.focus();
  }
}
