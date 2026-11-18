import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private router: Router) {}

  login(username: string, password: string, returnUrl?: string | null): boolean {
    const validUsername = 'user@test99.com';
    const validPassword = 'passwordTest99';

    if (username === validUsername && password === validPassword) {
      localStorage.setItem(this.tokenKey, 'demo-token');
      const destination = returnUrl?.startsWith('/home/')
        ? returnUrl
        : '/home/elements-model-view';
      void this.router.navigateByUrl(destination);
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    void this.router.navigate(['/login']);
  }
}
