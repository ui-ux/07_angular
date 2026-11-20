import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor = '';

  @HostBinding('style.color')
  color = '';

  @HostBinding('style.borderColor')
  borderColor = '';

  @HostListener('mouseenter')
  @HostListener('focus')
  highlight(): void {
    this.backgroundColor = '#dbeafe';
    this.color = '#1e40af';
    this.borderColor = '#2563eb';
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  reset(): void {
    this.backgroundColor = '';
    this.color = '';
    this.borderColor = '';
  }
}
