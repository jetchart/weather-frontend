"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//import { Location } from '../models/location';
var LocationsService = /** @class */ (function () {
    function LocationsService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/';
    }
    LocationsService.prototype.saveLocation = function (location) {
        var params = JSON.stringify(location);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + 'locations', params, { headers: headers });
    };
    LocationsService.prototype.getLocations = function () {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'locations', { headers: headers });
    };
    LocationsService.prototype.getLocation = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'locations/' + id, { headers: headers });
    };
    LocationsService.prototype.deleteLocation = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http["delete"](this.url + 'locations/' + id, { headers: headers });
    };
    LocationsService.prototype.updateLocation = function (location) {
        var params = JSON.stringify(location);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'locations/' + location.id, params, { headers: headers });
    };
    LocationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocationsService);
    return LocationsService;
}());
exports.LocationsService = LocationsService;
