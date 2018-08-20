import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./../users/user";
import { Board } from "./board";
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class BoardsService{
    public url: string;

    constructor(
        public http: HttpClient,
        public _authService : AuthService
    ){
        this.url = 'http://localhost:8080/api';
    }

    getBoardById(id): Observable<any>{
  		return this.http.get(this.url+ '/boards/'+ id , {headers: this._authService.getHeaders()});
  	}

    saveBoard(board: Board): Observable<any>{
  		let params = JSON.stringify(board);
  		return this.http.post(this.url+'/boards', params, {headers: this._authService.getHeaders()});
  	}

  	getBoardsByUserId(id): Observable<any>{
  		return this.http.get(this.url+ '/users/'+id+'/boards/' , {headers: this._authService.getHeaders()});
  	}

    getBoardsByUsername(username): Observable<any>{
      return this.http.get(this.url+ '/users/username/'+username+'/boards/' , {headers: this._authService.getHeaders()});
    }

  	deleteBoardById(id): Observable<any>{
  		return this.http.delete(this.url+ '/boards/' + id , {headers: this._authService.getHeaders()});
  	}

}
