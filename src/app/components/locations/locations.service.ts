import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./location";
//import { Location } from '../models/location';

@Injectable({
    providedIn: 'root'
})
export class LocationsService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api/';
    }

    saveLocation(location: Location): Observable<any>{
  		let params = JSON.stringify(location);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.url+'locations', params, {headers: headers});
  	}

  	getLocations(): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+'locations', {headers: headers});
  	}

  	getLocation(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+'locations/'+id, {headers: headers});
  	}

  	deleteLocation(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.url+'locations/'+id, {headers: headers});
  	}

  	updateLocation(location): Observable<any>{
  		let params = JSON.stringify(location);
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.put(this.url+'locations/'+location.id, params, {headers: headers});
  	}

}
