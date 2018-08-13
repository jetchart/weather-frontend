"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var location_1 = require("./location");
var LocationsComponent = /** @class */ (function () {
    function LocationsComponent(_locationsService, _router) {
        this._locationsService = _locationsService;
        this._router = _router;
        this.titulo = "Locations";
        this.locationInsertar = new location_1.Location();
    }
    LocationsComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit ejecutado');
        this.getLocations();
    };
    ;
    LocationsComponent.prototype.ngOnDestroy = function () {
    };
    ;
    LocationsComponent.prototype.getLocations = function () {
        var _this = this;
        this._locationsService.getLocations().subscribe(function (result) {
            console.log(result);
            _this.locations = result;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    LocationsComponent.prototype.saveLocation = function () {
        var _this = this;
        this._locationsService.saveLocation(this.locationInsertar).subscribe(function (result) {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            _this.getLocations();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    LocationsComponent.prototype.updateLocation = function (id) {
        this._router.navigate(["/form_location", id]);
    };
    ;
    LocationsComponent.prototype.deleteLocation = function (id) {
        var _this = this;
        this._locationsService.deleteLocation(id).subscribe(function (response) {
            console.log('eliminado');
            _this.getLocations();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    LocationsComponent = __decorate([
        core_1.Component({
            selector: 'locations',
            templateUrl: './locations.component.html'
        })
    ], LocationsComponent);
    return LocationsComponent;
}());
exports.LocationsComponent = LocationsComponent;
