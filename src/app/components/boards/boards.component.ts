import { Component, OnInit } from '@angular/core';
import { UserLocation } from "./userLocation";
import { UserLocationsService } from "./userLocations.service";
import { UsersService } from "./../users/users.service";
import { User } from "./../users/user";
import { Location } from "./../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  public userLocations : UserLocation[];
  public userId : Number;
  public user : User;
  public userLocationInsertar : UserLocation;
  public titulo : String;
  constructor(public _usersService: UsersService,
              public _userLocationsService: UserLocationsService,
              public _route: ActivatedRoute,
              public _router: Router) {
    this.userLocationInsertar = new UserLocation();
    this.userLocationInsertar.location =  new Location();
    this.userId = this._route.snapshot.params['id'];
    this.getUserLocationsByUserId();
    this.getUser();
  }

  ngOnInit() {
  }

  onSubmit(form){
    this.saveLocation();
    form.reset();
  };

  saveLocation(){
    this._userLocationsService.saveLocation(this.userLocationInsertar).subscribe(
      result => {
        this.getUserLocationsByUserId();
      },
      error => {
          console.log(<any>error);
      });
  }

  getUserLocationsByUserId() {
    this._userLocationsService.getUserLocationsByUserId(this.userId).subscribe(
      result => {
          console.log(result);
          this.userLocations = result;
      },
      error => {
          console.log(<any>error);
      });
    };

  getUser() {
    this._usersService.getUser(this.userId).subscribe(
      result => {
          this.user = result;
          this.titulo = "Board de " + this.user.nombre + " " + this.user.apellido;
          this.userLocationInsertar.user = this.user;
      },
      error => {
          console.log(<any>error);
      });
    };

  deleteUserLocationByUserIdAndLocationId(userId, locationId) {
    this._userLocationsService.deleteUserLocationByUserIdAndLocationId(userId, locationId).subscribe(
      result => {
          console.log("Eliminado");
          this.getUserLocationsByUserId();
      },
      error => {
          console.log(<any>error);
      });
    };

}
