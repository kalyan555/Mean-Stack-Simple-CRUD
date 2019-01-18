import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http:HttpClient) { }

  url="http://localhost:3000/data/";
  getUsers():any{
    return this.http.get(this.url)
  }

  deleteUser(id):any{
    console.log(id);
    return this.http.delete(this.url+""+id)
  }

  addUser(username,password){
    let body = new URLSearchParams();
    body.set('username',username);
    body.set('password',password);
    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    this.http
        .post(this.url, body.toString(), options)
        .subscribe(response => {
            console.log(response);
        });
  }

  updateUser(id,username,password){
    let body = new URLSearchParams();
    body.set('id',id);    
    body.set('username',username);
    body.set('password',password);
    
    let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    this.http
        .post(this.url, body.toString(), options)
        .subscribe(response => {
            console.log(response);
        });
  }

}
