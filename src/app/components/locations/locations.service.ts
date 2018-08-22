import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./location";
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LocationsService{
    public url: string;

    constructor(
        public http: HttpClient,
        public _authService : AuthService
    ){
        this.url = 'http://localhost:8080/api/';
    }

    saveLocation(location: Location): Observable<any>{
  		let params = JSON.stringify(location);
  		return this.http.post(this.url+'locations', params, {headers: this._authService.getHeaders()});
  	}

  	getLocations(): Observable<any>{
  		return this.http.get(this.url+'locations', {headers: this._authService.getHeaders()});
  	}

    getLocationsEnabled(): Observable<any>{
      return this.http.get(this.url+'locations/enabled', {headers: this._authService.getHeaders()});
    }

    getLocationsByNombreContaining(nombre): Observable<any>{
      return this.http.get(this.url+'/locations/nombre/' + nombre, {headers: this._authService.getHeaders()});
    }

  	getLocation(id): Observable<any>{
  		return this.http.get(this.url+'locations/'+id, {headers: this._authService.getHeaders()});
  	}

  	deleteLocation(id): Observable<any>{
  		return this.http.delete(this.url+'locations/'+id, {headers: this._authService.getHeaders()});
  	}

  	updateLocation(location): Observable<any>{
  		let params = JSON.stringify(location);
  		return this.http.put(this.url+'locations/'+location.id, params, {headers: this._authService.getHeaders()});
  	}

}
