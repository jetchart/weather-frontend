import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from "./location";
import { AuthService } from './../auth/auth.service';
import {AppService} from './../../app.service';

@Injectable({
    providedIn: 'root'
})
export class LocationsService extends AppService {

    constructor(
        public http: HttpClient,
        public _authService : AuthService
    ){
      super();
    }

    saveLocation(location: Location): Observable<any>{
  		let params = JSON.stringify(location);
  		return this.http.post(this.urlBackend+'locations', params, {headers: this._authService.getHeaders()});
  	}

  	getLocations(): Observable<any>{
  		return this.http.get(this.urlBackend+'locations', {headers: this._authService.getHeaders()});
  	}

    getLocationsEnabled(): Observable<any>{
      return this.http.get(this.urlBackend+'locations/enabled', {headers: this._authService.getHeaders()});
    }

    getLocationsByNombreContaining(nombre): Observable<any>{
      return this.http.get(this.urlBackend+'locations/nombre/' + nombre, {headers: this._authService.getHeaders()});
    }

  	getLocation(id): Observable<any>{
  		return this.http.get(this.urlBackend+'locations/'+id, {headers: this._authService.getHeaders()});
  	}

  	deleteLocation(id): Observable<any>{
  		return this.http.delete(this.urlBackend+'locations/'+id, {headers: this._authService.getHeaders()});
  	}

  	updateLocation(location): Observable<any>{
  		let params = JSON.stringify(location);
  		return this.http.put(this.urlBackend+'locations/'+location.id, params, {headers: this._authService.getHeaders()});
  	}

}
