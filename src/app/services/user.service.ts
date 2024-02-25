import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  signup(user:any){
    return this.http.post('http://localhost:4500/users/signup',user,({responseType:'json'}));
  }

  login(user:any){
    return this.http.post('http://localhost:4500/users/login',user,({responseType:'json'}));
  }
}
