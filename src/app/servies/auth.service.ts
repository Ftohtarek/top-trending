import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  }
}
