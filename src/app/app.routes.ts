import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'developers',
    loadComponent: () =>
      import('./pages/developers/developers').then(m => m.Developers)
  },
  {
    path: 'developers/:id',
    loadComponent: () =>
      import('./pages/developer-detail/developer-detail').then(m => m.DeveloperDetail)
  },
   {
    path: 'add-developer',
    loadComponent: () =>
      import('./pages/add-developer/add-developer').then(m => m.AddDeveloper)
  }
];
