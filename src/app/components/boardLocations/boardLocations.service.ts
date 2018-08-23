import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./../locations/location";
import { BoardLocation } from "./../boardLocations/boardLocation";
import { AuthService } from './../auth/auth.service';
import {AppService} from './../../app.service';

@Injectable({
    providedIn: 'root'
})
export class BoardLocationsService extends AppService{
    public url: string;

    constructor(
        public http: HttpClient,
        public _authService : AuthService
    ){
        super();
    }

    getBoardLocationsByBoardId(boardId): Observable<any>{
  		return this.http.get(this.urlBackend+ 'boards/'+ boardId + '/locations' , {headers: this._authService.getHeaders()});
  	}

    saveBoardLocation(boardLocation: BoardLocation): Observable<any>{
  		let params = JSON.stringify(boardLocation);
  		return this.http.post(this.urlBackend+'boards/locations/', params, {headers: this._authService.getHeaders()});
  	}

  	deleteBoardLocationByBoardLocationId(boardLocationId): Observable<any>{
  		return this.http.delete(this.urlBackend+ 'boards/locations/' + boardLocationId , {headers: this._authService.getHeaders()});
  	}

}
