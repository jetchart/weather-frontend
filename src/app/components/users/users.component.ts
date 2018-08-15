import { Component, OnInit, OnDestroy } from '@angular/core';
import {UsersService} from "./users.service";
import { User } from "./user";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from "rxjs";

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy{
  public titulo : String;
  public nombre : String;
  public users : User[];
  public userInsertar : User;
  public users$: Observable<User[]>
  constructor(public _usersService: UsersService,
              public _router: Router){
    this.titulo = "Users";
    this.userInsertar = new User();
  }

  ngOnInit(){
    //this.users$ = this._usersService.getUsers();
    console.log ('ngOnInit ejecutado');
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
          console.log(<any>error);
      });
    };

    saveUser() {
      this._usersService.saveUser(this.userInsertar).subscribe(
        result => {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            this.getUsers();
        },
        error => {
            console.log(<any>error);
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
            console.log('eliminado');
      			this.getUsers();
    		},
    		error => {
    			console.log(<any>error);
    		}
    	);
    };

  }
