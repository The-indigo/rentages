import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user!: User
  errorMessage?:String

  constructor(private authService:AuthService, private router:Router) { }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  
  
  login(): void {
    if (!!this.username?.value.trim() && !!this.password?.value.trim()) {
      this.user.username = this.username.value
      this.user.password = this.password.value
      console.log("username is",this.username)
      this.authService.authenticate(this.user).subscribe({
        next:( data) => {
                    console.log('data is',data)
          if (data.success) {
            this.authService.storeUserData(data.token, data.user)
            this.router.navigateByUrl('home');
            window.location.reload()

        } else {
          this.errorMessage="Authentication Error. Try again"
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
    this.user= new User()
    if (this.authService.isloggedIn()) {
     this.router.navigateByUrl('home');
   }
  }

}
