import { inject, ɵɵinject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';
import { map } from 'rxjs';
import { AuthService } from '../service/auth.service';


export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  return userService.isLoggedIn().pipe(
    map((status) => {
      console.log(status);
      if (status) {
        return true;
      }

      return router.createUrlTree(['/login']);
    })
  );
};
