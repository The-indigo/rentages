import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Computer } from 'src/app/computers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private baseUrl = 'http://192.168.1.26:80/api/basket'

  constructor(private authService: AuthService,
    private http: HttpClient,
  ) { }


  addToBasket(computer: Computer, id:any,user:any): Observable<Computer>
 {
    this.authService.loadToken();
    let data = this.http.post<Computer>(`${this.baseUrl}/add/${id}`, { computer, user }, this.authService.httpOptions).pipe(
     
     catchError(err => { 
              console.log('err', err)
        return throwError(() => new Error(err.error.message || "Oops somethng went wrong But we can fix this."))
      })
   )
    return data
    
 }

  }

