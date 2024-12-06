import { CanActivateFn, Router } from '@angular/router';
import { UsrService } from '../services/usr.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const usrService = inject(UsrService);
  const router = inject(Router);

  if (usrService.getUser() == null) {
    router.navigate(['/login']);
    return false;
  } else {
    return true;
  }

};
