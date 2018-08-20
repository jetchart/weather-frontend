import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./../locations/location";
import { UserLocation } from "./userLocation";
//import { Location } from '../models/location';

@Injectable({
    providedIn: 'root'
})
export class UserLocationsService{
    public url: string;

    constructor(
        public http: HttpClient
    ){
        this.url = 'http://localhost:8080/api';
    }

    login(username: string, password: string) : Observable<any> {
      //let params =  JSON.stringify({ "username" : "andres", "password" : "12345" });
      let params =  JSON.stringify({ username : username, password : password });
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post('http://localhost:8080/api/login', params, {headers: headers});
    }

    saveLocation(userLocation: UserLocation): Observable<any>{
  		let params = JSON.stringify(userLocation);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.url+ '/users/locations/', params, {headers: headers});
  	}

  	getUserLocationsByUserId(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.url+ '/users/'+id+'/locations/' , {headers: headers});
  	}

  	deleteUserLocationById(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.url+ '/users/locations/' + id , {headers: headers});
  	}

}
