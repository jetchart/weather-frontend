import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./../users/user";
import { Board } from "./board";
//import { Location } from '../models/location';

@Injectable({
    providedIn: 'root'
})
export class BoardsService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api';
    }

    getBoardById(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+ '/boards/'+ id , {headers: headers});
  	}

    saveBoard(board: Board): Observable<any>{
  		let params = JSON.stringify(board);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.url+'/boards', params, {headers: headers});
  	}

  	getBoardsByUserId(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+ '/users/'+id+'/boards/' , {headers: headers});
  	}

  	deleteBoardById(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.url+ '/boards/' + id , {headers: headers});
  	}

}
