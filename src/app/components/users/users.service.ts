import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";
import { User } from "./user";
//import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api/';
    }

    saveUser(user: User): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.url+'users', params, {headers: headers});
  	}

  	getUsers(): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+'users', {headers: headers});
  	}

  	getUser(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+'users/'+id, {headers: headers});
  	}

  	deleteUser(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.url+'users/'+id, {headers: headers});
  	}

  	updateUser(user): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.put(this.url+'users/'+user.id, params, {headers: headers});
  	}

}
