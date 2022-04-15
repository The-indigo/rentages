import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Computer } from 'src/app/computers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  private baseUrl ='https://rentcomputers.herokuapp.com/api/computers'
    // 'http://192.168.1.9:80/api/computers'
  httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  }
  constructor(private authService: AuthService,
    private http: HttpClient,
  ) { }



  
  getComputers(): Observable<Computer[]>
  {
    let data = this.http.get<Computer[]>(`${this.baseUrl}`).pipe(
            catchError(err => { 
        return throwError(() => new Error(err.error.message || "Oops somethng went wrong But we can fix this."))
      })
    )
    return data
  }
  getAComputer(id:string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`)
  }

  addComputers(computer:Computer): Observable<Computer>{
    this.authService.loadToken();
    return this.http.post<Computer>(`${this.baseUrl}/add`,computer,this.httpOptions )
  }

  updateComputer(computer: Computer): Observable<Computer>
  {
    this.authService.loadToken();
    return this.http.post<Computer>(`${this.baseUrl}/edit/${computer._id}`, computer, this.httpOptions);
  }

  deleteBook(id: any): Observable<Computer>
  {
    this.authService.loadToken();
    return this.http.get<Computer>(`${this.baseUrl}/delete/${id}`, this.httpOptions);
  }

  

}
