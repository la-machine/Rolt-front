import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from './user.service';
import { TitleTransfer } from '../classes/TitleTransfer';

@Injectable({
  providedIn: 'root'
})
export class TitlerequestService {

  constructor(private http: HttpClient, private userService : UserService) { }

  request(request: TitleTransfer){
      const token = this.userService.getAuthToken();
      const formData: FormData = new FormData();
    formData.append('titleNumber', request.titleNumber.toString());
    formData.append('prevOwner', request.prevOwner);
    formData.append('newOwner', request.newOwner);
    if(request.letter){formData.append('letter', request.letter, request.letter.name);}
    for (let i = 0; i < request.technicalDocuments.length; i++) {
      formData.append('technicalDocuments', request.technicalDocuments[i], request.technicalDocuments[i].name);
    }
    const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type":"application/json",
      "Authorization": "Bearer " + token // If you have authentication
    }),}
    console.log("From the authService " + request);
     return this.http.post('http://localhost:8060//api/landtitle/add', formData, httpOptions).pipe(
      catchError((error) => {
        // Handle authentication error here
        return throwError('Invalid credentials'); // Set your custom error message
      })
     );
    }
}
