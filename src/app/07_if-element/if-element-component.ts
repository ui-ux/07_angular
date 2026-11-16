import { Component } from '@angular/core';

@Component({
  selector: 'if-element',
  templateUrl: './if-element-component.html',
})
export class IfElementComponent {
  status: 'ready' | 'loading' | 'empty' = 'ready';
}
