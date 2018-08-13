import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "./usuario.ts";
//import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api/';
    }


    /*getUsers(): Observable<Usuario>{
        return this.http.get(this.url + 'usuarios');
    }*/

    saveUser(user: Usuario): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type','application/json');

  		return this.http.post(this.url+'usuarios', params, {headers: headers});
  	}

  	getUsers(): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this.http.get(this.url+'usuarios', {headers: headers});
  	}

  	getUser(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this.http.get(this.url+'usuarios/'+id, {headers: headers});
  	}

  	deleteUser(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this.http.delete(this.url+'usuarios/'+id, {headers: headers});
  	}

  	updateUser(user): Observable<any>{
  		let params = JSON.stringify(user);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');

  		return this.http.put(this.url+'usuarios/'+user.id, params, {headers: headers});
  	}

}
