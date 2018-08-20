import {Injectable} from '@angular/core';
//import {Headers, RequestOptions} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './../users/user';
import {LoginData} from './loginData';
//import {LoginData} from './logindata';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;
  loginData : LoginData;
   // Lo uso en el Observable y es el
                           // objeto en el que voy a cachar el
                           // resultado de la consulta REST.
                           //
                           // logindata.ts:
                           //
                           // import {User} from './../catalogs/catusers/user';
                           //
                           // export interface LoginData {
                           //   token: string;
                           //   expires: string;
                           //   user: User;
                           // }


  constructor (private http: HttpClient) {
    this.token = localStorage.getItem('id_token');
  }

  // La ruta al servidor con Node, en este caso es una ruta que no requiere
  // autenticación.

  login(username: String, password: String) : Observable<any> {
    //let params =  JSON.stringify({ "username" : "andres", "password" : "12345" });
    let params =  JSON.stringify({ username : username, password : password });
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/api/login', params, {headers: headers})
                    .pipe(map((loginData:LoginData) => {
                      console.log(loginData);
                        this.saveUser(loginData.user);
                        this.saveJwt(loginData.token);
                      })
                    );
    //return this.http.post('http://localhost:8080/api/login', params, {headers: headers});
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
      //localStorage.setItem("user", _usersService.getUserByUsername(user.username));
      localStorage.setItem('auth_user', user.username);
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('auth_user');
    //localStorage.removeItem('user');
  }

  isAuth() {
    if(localStorage.getItem('auth_user')) {
      return true;
    } else {
      return false;
    }
  }

}
