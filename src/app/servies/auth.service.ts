import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(data: object): Observable<any> {
    return this.http.post("https://routeegypt.herokuapp.com/signup", data)
  }

  signin(data: object): Observable<any> {
    return this.http.post("https://routeegypt.herokuapp.com/signin", data)
      .pipe(
        map(response => response),
        catchError(this.handelError)
      )
  }
  handelError(error: any) {
    return throwError(error)
  }
}
