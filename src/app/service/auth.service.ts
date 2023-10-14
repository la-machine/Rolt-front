import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import axios from 'axios';
// import { map } from 'rxjs/internal/operators/map';
import { authrequest } from '../classes/authrequest';
import { userResponse } from '../classes/userResponse';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthRegister } from '../classes/authRegistration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(userRequest: authrequest){
    
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
    }),}
    console.log("From the authService" + userRequest.email)
     return this.http.post('http://localhost:8060/api/auth/authenticate', userRequest, httpOptions).pipe(
      catchError((error) => {
        // Handle authentication error here
        return throwError('Invalid credentials'); // Set your custom error message
      })
     );
    }

    signup(userRequest: AuthRegister){
      
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
    }),}
    console.log("From the authService " + userRequest);
     return this.http.post('http://localhost:8060/api/auth/register', userRequest, httpOptions).pipe(
      catchError((error) => {
        // Handle authentication error here
        return throwError('Invalid credentials'); // Set your custom error message
      })
     );
    }

    // getUsers()

  // request(method: string, url: string, data: any): Promise<any> {
  //     let headers: any = {"Content-Type":"application/json"};

  //     if (this.getAuthToken() !== null) {
  //         headers = {"Authorization": "Bearer " + this.getAuthToken()};
  //     }
  //     console.log(headers);
  //     return axios({
  //         method: method,
  //         url: url,
  //         data: data,
  //         headers: headers
  //     });
  // }


}
