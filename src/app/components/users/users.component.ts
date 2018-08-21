import { Component, OnInit, OnDestroy } from '@angular/core';
import {UsersService} from "./users.service";
import {ErrorService} from "./../error/error.service";
import { User } from "./user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";
import {throwError} from 'rxjs';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy{
  public title : String;
  public name : String;
  public users : User[];
  public userInsert : User;
  public users$: Observable<User[]>;
  public userIdDelete : String;
  constructor(public _usersService: UsersService,
              public _errorService: ErrorService,
              public _router: Router){
    this.title = "Users";
    this.userInsert = new User();
  }

  ngOnInit(){
    this.getUsers();
  };

  ngOnDestroy(){

  };

  getUsers() {
    this._usersService.getUsers()
    .subscribe(
      result => {
          console.log(result);
          this.users = result;
      },
      error => {
        this._errorService.handleError(error);
      });
    };

    setUserIdDelete(userId){
      this.userIdDelete = userId;
    }

    saveUser() {
      this._usersService.saveUser(this.userInsert).subscribe(
        result => {
            console.log(result);
            this.getUsers();
        },
        error => {
          this._errorService.handleError(error);
        });
      };

      updateUser(id) {
        this._router.navigate(["/form_user", id]);
      };

      goToBoards(id) {
        this._router.navigate(["/boards/", id]);
      };

    deleteUser(id){
    	this._usersService.deleteUser(id).subscribe(
    		response => {
      			this.getUsers();
    		},
    		error => {
          this._errorService.handleError(error);
    		}
    	);
    };

  }
