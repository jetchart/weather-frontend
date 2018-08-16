import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./../locations/location";
import { BoardLocation } from "./../boardLocations/boardLocation";
//import { Location } from '../models/location';

@Injectable({
    providedIn: 'root'
})
export class BoardLocationsService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api';
    }

    getBoardLocationsByBoardId(boardId): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+ '/boards/'+ boardId + '/locations' , {headers: headers});
  	}

    saveBoardLocation(boardLocation: BoardLocation): Observable<any>{
  		let params = JSON.stringify(boardLocation);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.url+'/boards/locations/', params, {headers: headers});
  	}

  	deleteBoardLocationByBoardLocationId(boardLocationId): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.url+ '/boards/locations/' + boardLocationId , {headers: headers});
  	}

}
