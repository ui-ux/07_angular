import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../13_0_services/auth.service';

@Component({
  standalone: false,
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss',
})
export class AuthenticationComponent {
  username: string = 'user@test99.com';
  password: string = 'passwordTest99';
  loginFailed: boolean = false;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}

  onSubmit(): void {
    this.loginFailed = !this.authService.login(
      this.username,
      this.password,
      this.route.snapshot.queryParamMap.get('returnUrl'),
    );
  }
}
