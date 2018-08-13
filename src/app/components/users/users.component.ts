import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import { User } from "./user";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{
  public titulo : String;
  public nombre : String;
  public users : User[];
  public userInsertar : User;
  constructor(public _usersService: UsersService,
              public _router: Router){
    this.titulo = "Usuarios";
    this.userInsertar = new User();
  }

  ngOnInit(){
    console.log ('ngOnInit ejecutado');
    this.getUsers();
  };

  getUsers() {
    this._usersService.getUsers().subscribe(
      result => {
          /*if(result.code != 200){
              console.log(result);
          }else{
              this.nombre = result.data[0].nombre;
          }*/
          console.log(result);
          this.users = result;
      },
      error => {
          console.log(<any>error);
      });
    };

    onSubmit(form){
      this.saveUser();
      form.reset();
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
