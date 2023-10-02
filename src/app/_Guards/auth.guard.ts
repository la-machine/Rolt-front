import { ɵɵinject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/user.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(UserService);
  if (authService.isLoggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
