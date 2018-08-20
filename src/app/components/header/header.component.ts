import { Component, DoCheck } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html'
})
export class HeaderComponent implements DoCheck{
  public auth_user : String;
  constructor( public _authService : AuthService, public _router: Router){
  }

  ngDoCheck(){
    this.login();
  }

  login(){
    this.auth_user =  localStorage.getItem('auth_user');
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/form_login']);
  }
}
