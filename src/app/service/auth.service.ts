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
      const formData : FormData = new FormData();
      formData.append("cardNum", userRequest.cardNum);
      formData.append("firstName", userRequest.firstName);
      formData.append("lastName", userRequest.lastName);
      formData.append("sex", userRequest.sex);
      formData.append("email",userRequest.email);
      formData.append("tel", userRequest.tel);
      formData.append("password", userRequest.password);
      formData.append("dob",userRequest.dob);
      formData.append("yourCard", userRequest.yourCard);
      formData.append("backCardImg", userRequest.backCardImg);
      formData.append("cardImg", userRequest.cardImg);
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      // "Authorization": "Bearer " + this.getAuthToken(), // If you have authentication
    }),}
    console.log("From the authService " + userRequest);
     return this.http.post('http://localhost:8060/api/auth/register', formData).pipe(
      catchError((error) => {
        // Handle authentication error here
        return throwError('Invalid credentials'); // Set your custom error message
      })
     );
    }

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
