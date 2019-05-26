import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: User) {
    return this.http.get('http://2me1y.mocklab.io/DSAController?json=json&method=Login&login=' + user.username + '&password=' + user.password);
    //localStorage.setItem('Authorization', "access_token");

  }

  public isLoggedIn() {
    return localStorage.getItem('Authorization') !== null;

  }

  public logout() {
    localStorage.removeItem('Authorization');
  }
}