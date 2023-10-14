import { Injectable } from '@angular/core';
import { userResponse } from '../classes/userResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }

  setAuthUser(auth: userResponse | null){
    if(auth!== null){
      window.localStorage.setItem("auth_name",auth.firstName);
      window.localStorage.setItem("auth_role", auth.role);
    }else{
      window.localStorage.removeItem("auth_name");
      window.localStorage.removeItem("auth_role");
    }
  }

  // public setRoles(roles: []) {
  //   localStorage.setItem('roles', JSON.stringify(roles));
  // }

  public getRole(): any {
    const UserRole = window.localStorage.getItem('auth_role');
    console.log("User service testing getRole  ", UserRole);
    if(UserRole !== null){
      // return JSON.parse(UserRole);
      return UserRole;
    }
    return null;
  }

  public getUserName():any{
    return window.localStorage.getItem('auth_name');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRole() && this.getAuthToken();
  }

}
