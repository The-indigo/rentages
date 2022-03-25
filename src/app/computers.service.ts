import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Computer } from 'src/app/computers';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  private baseUrl = '127.0.0.1:8200/api/computers'
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
    return this.http.get<Computer[]>(`${this.baseUrl}` );
  }

  addComputers(computer:Computer): Observable<Computer>{
    this.authService.loadToken();
    return this.http.post<Computer>(`${this.baseUrl}/add`,computer,this.httpOptions )
  }

  updateComputer(computer: Computer): Observable<Computer>
  {
    this.authService.loadToken();
    return this.http.post<Computer>(`${this.baseUrl}/edit/${computer.id}`, computer, this.httpOptions);
  }

  deleteBook(id: any): Observable<Computer>
  {
    this.authService.loadToken();
    return this.http.get<Computer>(`${this.baseUrl}/delete/${id}`, this.httpOptions);
  }

}
