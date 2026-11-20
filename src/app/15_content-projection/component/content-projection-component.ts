import { Component } from '@angular/core';
import { ProjectionCardComponent } from '../page/projection-card.component';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection-component.html',
  styleUrl: './content-projection-component.scss',
  imports: [ProjectionCardComponent],
})
export class ContentProjectionComponent {}
