import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uri = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  register = (data: any): Observable<any> => {
    return this.http.post(this.uri + '/register', data);
  };

  login = (data: any): Observable<any> => {
    return this.http.post(this.uri + '/login', data);
  };
}
