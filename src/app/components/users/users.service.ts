import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";
import { User } from "./user";
import { AuthService } from './../auth/auth.service';
import { GlobalErrorHandlerService } from './../auth/globalErrorHandlerService';
import {map, catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UsersService{
    public url: string;

    constructor(
        public http: HttpClient,
        public _authService : AuthService,
        public _globalErrorHandlerService : GlobalErrorHandlerService,
    ){
        this.url = 'http://localhost:8080/api/';
    }

    saveUser(user: User): Observable<any>{
  		let params = JSON.stringify(user);
  		return this.http.post(this.url+'users', params, {headers: this._authService.getHeaders()});
  	}

  	getUsers(): Observable<any>{
  		return this.http.get(this.url+'users', {headers: this._authService.getHeaders()}).pipe(
        catchError(e => throwError(e))
      );
  	}

  	getUser(id): Observable<any>{
  		return this.http.get(this.url+'users/'+id, {headers: this._authService.getHeaders()});
  	}

  	deleteUser(id): Observable<any>{
  		return this.http.delete(this.url+'users/'+id, {headers: this._authService.getHeaders()});
  	}

  	updateUser(user): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.put(this.url+'users/'+user.id, params, {headers: this._authService.getHeaders()});
  	}

}
