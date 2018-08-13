import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users/users.service";
import { User } from "../users/user";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form_user',
  templateUrl: './form_user.component.html'
})
export class FormUserComponent implements OnInit{
  public titulo : String;
  public nombre : String;
  public users : User[];
  public userInsertar : User;
  public id : Number;
  constructor(public _usersService: UsersService,
              public _router: Router, public _route: ActivatedRoute){
    this.titulo = "Alta usuario";
    this.id = this._route.snapshot.params['id'];
    this.userInsertar = new User();
    if (this.id != null && this.id > 0){
      this.titulo = "Edición usuario";
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
          this.userInsertar = result;
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
          this._router.navigate(['/users']);
      },
      error => {
          console.log(<any>error);
      });
    };

  }
