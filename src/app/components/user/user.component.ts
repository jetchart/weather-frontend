import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {Usuario} from "./usuario.ts";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{
  public titulo : String;
  public nombre : String;
  public usuarios:Usuario[];
  constructor(public userService: UserService,
              private _router: Router){
    this.titulo = "Usuarios";
  }

  ngOnInit(){
    console.log ('ngOnInit ejecutado');
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      result => {
          /*if(result.code != 200){
              console.log(result);
          }else{
              this.nombre = result.data[0].nombre;
          }*/
          console.log(result);
          this.usuarios = result;
      },
      error => {
          console.log(<any>error);
      }
    };

    deleteUser(id){
    	this.userService.deleteUser(id).subscribe(
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

}
