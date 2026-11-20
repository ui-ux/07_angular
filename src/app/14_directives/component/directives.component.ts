import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  imports: [HighlightDirective],
  styleUrl: './directives.component.scss',
})
export class DirectivesComponent {}
