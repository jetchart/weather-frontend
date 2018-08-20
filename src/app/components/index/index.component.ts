import { Component, OnInit, DoCheck } from '@angular/core';
import {AuthService} from "./../auth/auth.service";
import {LoginData} from "./../auth/loginData";

@Component({
  selector : 'index',
  templateUrl : './index.component.html'
})
export class IndexComponent implements OnInit, DoCheck{
  public title : string;
  public loginData : LoginData;

  constructor(public _authService : AuthService){
      this.title = 'Index page';

  }

  //Al iniciar el componente
  ngOnInit(){
    console.log('ngOnInit executed');
  }

  //Al cambiar el componente
  ngDoCheck(){
    console.log('ngDoCheck executed');
  }
}
