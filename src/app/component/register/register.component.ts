import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/servies/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

// template-driven forms , reactive forms

export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9]{7}/)])
  });

  constructor(private _authService: AuthService,private _Router:Router,private _toastr:ToastrService) {}

  public register() {
    if (this.registerForm.invalid) {
      return;
    }
    this._authService.signUp(this.registerForm.value).subscribe(data => {
      if (data.message == "success") {
        this._Router.navigateByUrl('/login')
      }
      
      else {
        this._toastr.error(data.message)
        this._Router.navigateByUrl('/register')
      }
    })
  }

  ngOnInit(): void {}

}
