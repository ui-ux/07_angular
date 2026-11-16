import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private active = false;

  @HostBinding('style.backgroundColor')
  get backgroundColor(): string {
    return this.active ? '#fff1b8' : 'transparent';
  }

  @HostBinding('style.outline')
  get outline(): string {
    return this.active ? '2px solid #805b00' : 'none';
  }

  @HostListener('mouseenter')
  @HostListener('focus')
  activate(): void {
    this.active = true;
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  deactivate(): void {
    this.active = false;
  }
}
