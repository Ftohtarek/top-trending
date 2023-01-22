import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servies/auth.service';
import { NavEventtService } from 'src/app/servies/nav-eventt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ErrorMassage: string = '' ;
  popup: boolean = false

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9]{7}/)])
  })

  constructor(private _navEvent: NavEventtService,private _auth:AuthService,private _router:Router) { }
  login() {
    let data = this.loginForm.value

    this._auth.signin(data).subscribe(resbonse => {
      if (resbonse.message == 'success') {
        localStorage.setItem('acessToken', resbonse.token)
        this._router.navigateByUrl('/home');
      } else {
        this.ErrorMassage = resbonse.message;
        this.popup = true
        this._router.navigateByUrl('/login')
      }
    })
  }

  ngOnInit(): void {
    this._navEvent.action.emit(false)
  }

}
