import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:4000/api'; // Backend API URL

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
