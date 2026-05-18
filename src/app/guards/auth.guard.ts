import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  // 🆕 check localStorage directly
  const token = localStorage.getItem('token');

  if (token) {
    return true; // ✅ has token — allow access
  }

  // ❌ no token — redirect to login
  router.navigate(['/login']);
  return false;
};