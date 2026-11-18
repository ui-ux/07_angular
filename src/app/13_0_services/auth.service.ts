import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';

  constructor(private router: Router) { }

  login(username: string, password: string, returnUrl?: string | null): boolean {
    const validUsername = 'user@test99.com';
    const validPassword = 'passwordTest99';

    if (username === validUsername && password === validPassword) {
      const token = 'fake token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ';
      localStorage.setItem(this.tokenKey, token);
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
