import { Component, OnInit, OnDestroy } from '@angular/core';
import {LocationsService} from "./locations.service";
import { Location } from "./location";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";
import { Subscription, timer, Observable } from "rxjs";

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit, OnDestroy{
  public title : String;
  public name : String;
  public locations : Location[];
  public locationInsertar : Location;
  public locationIdDelete : String;
  public getLocationsSubscription : Subscription;

  constructor(public _errorService: ErrorService, public _locationsService: LocationsService,
              public _router: Router){
    this.title = "Locations";
    this.locationInsertar = new Location();
  }

  ngOnInit(){
    this.getLocations();
    this.getLocationsSubscription = timer(60000,60000).subscribe(t => {
        this.getLocations();
    });
  };

  ngOnDestroy(){
    console.log("Destroyed: getLocationsSubscription");
    this.getLocationsSubscription.unsubscribe();
  };

  setLocationIdDelete(locationId){
    this.locationIdDelete = locationId;
  };

  getLocations() {
    this._locationsService.getLocations().subscribe(
      result => {
          console.log(result);
          this.locations = result;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

    saveLocation() {
      this._locationsService.saveLocation(this.locationInsertar).subscribe(
        result => {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.name = result.data[0].name;
            }*/
            console.log(result);
            this.getLocations();
        },
        error => {
          this._errorService.handleError(error);
        });
      };

      updateLocation(id) {
        this._router.navigate(["/form_location", id]);
      };

    deleteLocation(id){
    	this._locationsService.deleteLocation(id).subscribe(
    		response => {
            console.log('eliminado');
      			this.getLocations();
    		},
    		error => {
          this._errorService.handleError(error);
    		}
    	);
    };

  }
