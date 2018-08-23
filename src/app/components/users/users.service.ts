import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";
import { User } from "./user";
import { AuthService } from './../auth/auth.service';
import { GlobalErrorHandlerService } from './../auth/globalErrorHandlerService';
import {map, catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import {AppService} from './../../app.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService extends AppService {

    constructor(
        public http: HttpClient,
        public _authService : AuthService,
        public _globalErrorHandlerService : GlobalErrorHandlerService,
    ){
      super();
    }

    saveUser(user: User): Observable<any>{
  		let params = JSON.stringify(user);
  		return this.http.post(this.urlBackend+'users', params, {headers: this._authService.getHeaders()});
  	}

  	getUsers(): Observable<any>{
  		return this.http.get(this.urlBackend+'users', {headers: this._authService.getHeaders()});

  	}

  	getUser(id): Observable<any>{
  		return this.http.get(this.urlBackend+'users/'+id, {headers: this._authService.getHeaders()});
  	}

  	deleteUser(id): Observable<any>{
  		return this.http.delete(this.urlBackend+'users/'+id, {headers: this._authService.getHeaders()});
  	}

  	updateUser(user): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.put(this.urlBackend+'users/'+user.id, params, {headers: this._authService.getHeaders()});
  	}

}
