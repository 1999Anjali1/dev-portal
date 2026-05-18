import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'developers',
    canActivate: [authGuard], // 🆕 protected!
    loadComponent: () => import('./pages/developers/developers').then(m => m.Developers)
  },
  {
    path: 'developers/:id',
    canActivate: [authGuard], // 🆕 protected!
    loadComponent: () => import('./pages/developer-detail/developer-detail').then(m => m.DeveloperDetail)
  },
  {
    path: 'add-developer',
    canActivate: [authGuard], // 🆕 protected!
    loadComponent: () => import('./pages/add-developer/add-developer').then(m => m.AddDeveloper)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.Register)
  }
];
