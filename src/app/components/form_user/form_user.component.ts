import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/users.service";
import { User } from "../users/user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";

@Component({
  selector: 'form_user',
  templateUrl: './form_user.component.html'
})
export class FormUserComponent implements OnInit{
  public title : String;
  public nombre : String;
  public users : User[];
  public userInsert : User;
  public id : String;
  constructor(public _errorService: ErrorService,
              public _usersService: UsersService,
              public _router: Router, public _route: ActivatedRoute){
    this.title = "Create user";
    this.id = this._route.snapshot.params['id'];
    this.userInsert = new User();
    if (this.id != null && this.id != "0"){
      this.title = "Edit user";
      this.getUser();
    }
  }

  ngOnInit(){
  };

  onSubmit(form){
    this.saveUser();
    form.reset();
  };

  getUser() {
    this._usersService.getUser(this.id).subscribe(
      result => {
          console.log(result);
          this.userInsert = result;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  saveUser() {
    this._usersService.saveUser(this.userInsert).subscribe(
      result => {
          console.log(result);
          this._router.navigate(['/users']);
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  }
