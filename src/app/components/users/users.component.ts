import { Component, OnInit, OnDestroy } from '@angular/core';
import {UsersService} from "./users.service";
import {ErrorService} from "./../error/error.service";
import { User } from "./user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, timer, Observable } from "rxjs";
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
  public getUsersSubscription : Subscription;
  constructor(public _usersService: UsersService,
              public _errorService: ErrorService,
              public _router: Router){
    this.title = "Users";
    this.userInsert = new User();
  }

  ngOnInit(){
    this.getUsers();
    this.getUsersSubscription = timer(60000,60000).subscribe(t => {
        this.getUsers();
    });
  };

  ngOnDestroy(){
    console.log("Destroyed: getUsersSubscription");
    this.getUsersSubscription.unsubscribe();
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
