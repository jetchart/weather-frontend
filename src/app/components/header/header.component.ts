import { Component, DoCheck } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck{
  public auth_user : String;
  public auth_userId : String;
  constructor( public _authService : AuthService, public _router: Router){
  }

  ngDoCheck(){
    this.login();
  }

  login(){
    this.auth_userId =  localStorage.getItem('auth_userId')!=null?localStorage.getItem('auth_userId'):"0";
    this.auth_user =  localStorage.getItem('auth_user');
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/form_login']);
  }
}
