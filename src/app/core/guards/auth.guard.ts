import { inject } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
export const authGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);
  return true;
  if (userService.estaLogado()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
