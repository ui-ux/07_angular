import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-features',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './angular-features.component.html',
  styleUrl: './angular-features.component.scss',
})
export class AngularFeaturesComponent {}
