import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { User } from './user';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
 authToken?: any;
  private authUrl = 'https://rentcomputers.herokuapp.com/api'
  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  }
  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.user=new User()
  }


  authenticate(user:User): Observable<any>{
    let data = this.http.post<any>(`${this.authUrl}/login`, user, this.httpOptions).pipe(
      catchError(err => { 
        console.log("Ah error i've catch you",err);
        return throwError(() => new Error(err.error.message || "Oops somethng went wrong."))
      })
   )
    return data
  }

  

  register(user: User): Observable<any>{
    return this.http.post<any>(`${this.authUrl}/register`,user,this.httpOptions)
  }

  storeUserData(token: any, user:User): void{
    localStorage.setItem('id_token', `Bearer ${token}`)
    localStorage.setItem('user', JSON.stringify(user));
       this.authToken = token;
       this.user = user;
  }

  logout(): Observable<any>{
        this.authToken = null;
       this.user = null!;
      localStorage.clear();
    return this.http.get<any>(`${this.authUrl}/logout`, this.httpOptions);
  }

   isloggedIn(): boolean
  {
    return !this.jwtService.isTokenExpired(this.authToken);
   }
  
    loadToken(): void
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}

  

 
 
