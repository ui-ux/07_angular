import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-custom-service',
  templateUrl: './custom-service-component.component.html',
  styleUrls: ['./custom-service-component.component.scss'],
  imports: [RouterLink],
})
export class CustomServiceComponent {}
