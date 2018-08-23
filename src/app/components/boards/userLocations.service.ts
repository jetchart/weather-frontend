import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./../locations/location";
import { UserLocation } from "./userLocation";
import {AppService} from './../../app.service';

@Injectable({
    providedIn: 'root'
})
export class UserLocationsService extends AppService{
    constructor(public http: HttpClient){
        super();
    }

    login(username: string, password: string) : Observable<any> {
      //let params =  JSON.stringify({ "username" : "andres", "password" : "12345" });
      let params =  JSON.stringify({ username : username, password : password });
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      return this.http.post(this.urlBackend + "login", params, {headers: headers});
    }

    saveLocation(userLocation: UserLocation): Observable<any>{
  		let params = JSON.stringify(userLocation);
  		let headers = new HttpHeaders().set('Content-Type','application/json');
  		return this.http.post(this.urlBackend+ 'users/locations/', params, {headers: headers});
  	}

  	getUserLocationsByUserId(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.get(this.urlBackend+ 'users/'+id+'/locations/' , {headers: headers});
  	}

  	deleteUserLocationById(id): Observable<any>{
  		let headers = new HttpHeaders().set('Content-Type', 'application/json');
  		return this.http.delete(this.urlBackend+ 'users/locations/' + id , {headers: headers});
  	}

}
