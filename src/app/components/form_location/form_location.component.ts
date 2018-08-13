import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../locations/locations.service";
import { Location } from "../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form_location',
  templateUrl: './form_location.component.html'
})
export class FormLocationComponent implements OnInit{
  public titulo : String;
  public nombre : String;
  public locations : Location[];
  public locationInsertar : Location;
  public id : Number;
  constructor(public _locationsService: LocationsService,
              public _router: Router, public _route: ActivatedRoute){
    this.titulo = "Alta location";
    this.id = this._route.snapshot.params['id'];
    this.locationInsertar = new Location();
    if (this.id != null && this.id > 0){
      this.titulo = "Edición location";
      this.getLocation();
    }
  }

  ngOnInit(){

  };

  onSubmit(form){
    this.saveLocation();
    form.reset();
  };

  getLocation() {
    this._locationsService.getLocation(this.id).subscribe(
      result => {
          console.log(result);
          this.locationInsertar = result;
      },
      error => {
          console.log(<any>error);
      });
    };

  saveLocation() {
    this._locationsService.saveLocation(this.locationInsertar).subscribe(
      result => {
          console.log(result);
          this._router.navigate(['/locations']);
      },
      error => {
          console.log(<any>error);
      });
    };

  }
