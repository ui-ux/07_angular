import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signals-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './signals-page.component.html',
  styleUrl: './signals-page.component.scss',
})
export class SignalsPageComponent {}
