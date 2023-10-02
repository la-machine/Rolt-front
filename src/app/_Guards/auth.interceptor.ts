import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { UserService } from "../service/user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private userAuthService: UserService,
        private router: Router
      ) {}
    
      intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        if (req.headers.get('Content-type') === 'True') {
          return next.handle(req.clone());
        }
    
        const token = this.userAuthService.getAuthToken();
    
        req = this.addToken(req, token);
    
        // Set CORS headers here
        req = req.clone({
          setHeaders: {
            'Access-Control-Allow-Origin': 'http://localhost:4200', // Replace with your allowed frontend origin
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          },
        });
    
        return next.handle(req).pipe(
          catchError((err: HttpErrorResponse) => {
            console.log(err.status);
            if (err.status === 401) {
              this.router.navigate(['/login']);
            } else if (err.status === 403) {
              this.router.navigate(['/forbidden']);
            }
            return throwError('Something is wrong');
          })
        );
      }
    
      private addToken(req: HttpRequest<any>, token: string | null): HttpRequest<any> {
        if (token) {
          return req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        return req;
      }
}