import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { UserService } from './user.service';
import { TitleRequest } from '../classes/TitleRequest';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private userService : UserService) { }
  
  getLandTitileByTitleNum(titleNum:number): Observable<any>{
    const token = this.userService.getAuthToken();
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization": "Bearer " + token, // If you have authentication
      }),}

    const url =`http://localhost:8060/api/landtitle/${titleNum}`;
    return this.http.get<any>(url, httpOptions);
  }

  requestTitle(titlerequest : TitleRequest){
    const token = this.userService.getAuthToken();
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization": "Bearer " + token, // If you have authentication
    }),}

    return this.http.post("http://localhost:8060/user/citizen/title-request",titlerequest, httpOptions).pipe(
      catchError((error) => {
        // Handle authentication error here
        return throwError('Invalid credentials'); // Set your custom error message
      })
    );
  }

}
