import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './../users/user';
import {LoginData} from './loginData';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {AppService} from './../../app.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends AppService {

  user: User;
  token: string;
  loginData : LoginData;

  constructor (private http: HttpClient) {
    super();
    this.token = localStorage.getItem('id_token');
  }

  login(username: String, password: String) : Observable<any> {
    let params =  JSON.stringify({ username : username, password : password });
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.urlBackend + 'login', params, {headers: headers})
                    .pipe(map((loginData:LoginData) => {
                      localStorage.setItem("welcome",loginData.message);
                      this.setUserOnLocalStorage(loginData);
                      })
                    );
  }

  public getHeaders() : HttpHeaders{
    return new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("id_token")
      }
    );
  }

  private saveJwt(jwt) {
    if(jwt) {
      localStorage.setItem('id_token', jwt);
    }
  }

  private saveUser(user) {
    if(user) {
      localStorage.setItem('auth_user', user.username);
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_userId');
  }

  setUserOnLocalStorage(loginData){
    localStorage.setItem('auth_user', loginData.user.username);
    localStorage.setItem('id_token', loginData.token);
    this.getUserByUsername(loginData.user.username)
    .subscribe(
      result => {
        localStorage.setItem("auth_userId", result.id);
      },
      error => {
        //throwError(error);
      });
  }

  getUserByUsername(username): Observable<any>{
    return this.http.get(this.urlBackend+'users/username/'+username, {headers: this.getHeaders()});
  }

}
