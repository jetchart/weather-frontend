import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../locations/locations.service";
import { Location } from "../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";

@Component({
  selector: 'form_location',
  templateUrl: './form_location.component.html'
})
export class FormLocationComponent implements OnInit{
  public title : String;
  public name : String;
  public locations : Location[];
  public locationInsert : Location;
  public id : String;
  constructor(public _errorService: ErrorService,
              public _locationsService: LocationsService,
              public _router: Router, public _route: ActivatedRoute){
    this.title = "Create location";
    this.id = this._route.snapshot.params['id'];
    this.locationInsert = new Location();
    if (this.id != null && this.id != "0"){
      this.title = "Edit location";
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
          this.locationInsert = result;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  saveLocation() {
    this._locationsService.saveLocation(this.locationInsert).subscribe(
      result => {
          console.log(result);
          this._router.navigate(['/locations']);
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  }
