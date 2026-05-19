import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  // private apiUrl = 'http://localhost:3000/auth';
  private apiUrl = 'https://dev-portal-backend.onrender.com/auth'; // real world API call

  // signals for auth state
  currentUser = signal<AuthResponse['user'] | null>(null);
  isLoggedIn = signal(false);
  isLoading = signal(false);
  error = signal('');

  constructor() {
    // check if user is already logged in
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.currentUser.set(JSON.parse(user));
      this.isLoggedIn.set(true);
    }
  }

  register(name: string, email: string, password: string) {
    this.isLoading.set(true);
    this.error.set('');

    this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
      name, email, password
    }).subscribe({
      next: (response) => {
        this.saveAuthData(response);
        this.router.navigate(['/developers']);
      },
      error: (err) => {
        this.error.set(err.error.message || 'Registration failed!');
        this.isLoading.set(false);
      }
    });
  }

  login(email: string, password: string) {
    this.isLoading.set(true);
    this.error.set('');

    this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email, password
    }).subscribe({
      next: (response) => {
        this.saveAuthData(response);
        this.router.navigate(['/developers']);
      },
      error: (err) => {
        this.error.set(err.error.message || 'Login failed!');
        this.isLoading.set(false);
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private saveAuthData(response: AuthResponse) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.currentUser.set(response.user);
    this.isLoggedIn.set(true);
    this.isLoading.set(false);
  }
}
