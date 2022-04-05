import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private authService:AuthService, private router:Router) { }

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
      this.authService.register(this.user).subscribe(
        {
        next:( data) => {
                    console.log('data is',data)
          if (data.success) {
            this.authService.storeUserData(data.token, data.user)
            this.router.navigateByUrl('login');
            window.location.reload()

        } else {
          this.errorMessage="There was an Error Signing you up."
     }
        },
        error: (error) => {
          console.log("error from comp", error)
         this.errorMessage=error
        } 
        
      } 
      )
    }
    
  }
  ngOnInit(): void {
  }

}
