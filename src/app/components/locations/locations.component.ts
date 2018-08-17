import { Component, OnInit, OnDestroy } from '@angular/core';
import {LocationsService} from "./locations.service";
import { Location } from "./location";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'locations',
  templateUrl: './locations.component.html'
})
export class LocationsComponent implements OnInit, OnDestroy{
  public titulo : String;
  public name : String;
  public locations : Location[];
  public locationInsertar : Location;
  public locationIdDelete : String;

  constructor(public _locationsService: LocationsService,
              public _router: Router){
    this.titulo = "Locations";
    this.locationInsertar = new Location();
  }

  ngOnInit(){
    console.log ('ngOnInit ejecutado');
    this.getLocations();
  };

  ngOnDestroy(){

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
          console.log(<any>error);
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
            console.log(<any>error);
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
    			console.log(<any>error);
    		}
    	);
    };

  }
