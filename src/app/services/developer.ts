import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Developer {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dev-portal-backend.onrender.com/developers';

  developers = signal<Developer[]>([]);
  selectedDeveloper = signal<Developer | null>(null);
  isLoading = signal(false);
  error = signal('');

  fetchDevelopers() {
    this.isLoading.set(true);
    this.error.set('');

    this.http.get<Developer[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.developers.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Failed to load developers!');
        this.isLoading.set(false);
      }
    });
  }

  fetchDeveloperById(id: number) {
    this.isLoading.set(true);
    this.error.set('');
    this.selectedDeveloper.set(null);

    this.http.get<Developer>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.selectedDeveloper.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Developer not found!');
        this.isLoading.set(false);
      }
    });
  }

  addDeveloper(developer: Developer) {
    this.developers.update(current => [...current, developer]);
  }
}