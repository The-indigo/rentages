import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {
  public user = new User()
  errorMessage?:string
  constructor(private authService:AuthService) { }

  signupForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    email: new FormControl(null,Validators.required)
  })
  get username() { return this.signupForm.get('username'); }
  get password() { return this.signupForm.get('password'); }
  get email() { return this.signupForm.get('email'); }
  
  
  signup(): void {  
    if (!!this.username?.value.trim() && !!this.password?.value.trim() && !!this.email?.value.trim()) {
      this.user.username = this.username.value
      this.user.password = this.password.value
      this.user.email=this.email.value
    this.authService.register (this.user).subscribe(users=>console.log(users))
    }
    
  }
  ngOnInit(): void {
  }

}
