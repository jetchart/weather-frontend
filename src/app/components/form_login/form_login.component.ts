import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";

import { User } from "../users/user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {LoginData} from './../auth/loginData';

@Component({
  selector: 'form_login',
  templateUrl: './form_login.component.html'
})
export class FormLoginComponent implements OnInit{
  public title : String;
  public error : String;
  public user : User;
  constructor(public _authService: AuthService,
              public _router: Router, public _route: ActivatedRoute){
    this.user = new User;
    this.title = "Login";

  }

  ngOnInit(){
  };

  onSubmit(form){
    this.login()
  };

  login(){
    this._authService.login(this.user.username,this.user.password).subscribe(
    (result:LoginData) => {
        console.log("LOGIN OK!");
        this._router.navigate(['/index']);
    },
    (error:any) => {
        console.log("LOGIN FAIL!");
        if (error.status == 401){
          this.error = 'Username or password incorrect';
        }else{
          this.error = error.message;
        }
    });
  }

  }
