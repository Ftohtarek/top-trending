import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(): boolean | Observable<boolean> {
    let token = localStorage.getItem('acessToken');
    if (token) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false
  }
}