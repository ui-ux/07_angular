import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../13_client/services/auth.service';
import { NavigationComponent } from '../00_navigation/navigation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavigationComponent, RouterOutlet],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
