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
var BoardLocationsService = /** @class */ (function () {
    function BoardLocationsService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api';
    }
    BoardLocationsService.prototype.getBoardLocationsByBoardId = function (boardId) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/boards/' + boardId + "/locations", { headers: headers });
    };
    BoardLocationsService.prototype.saveBoard = function (boardLocation) {
        var params = JSON.stringify(boardLocation);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + '/boards/locations/', params, { headers: headers });
    };
    BoardLocationsService.prototype.deleteBoardLocationByBoardId = function (boardId) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http["delete"](this.url + '/boards/locations/' + boardId, { headers: headers });
    };
    BoardLocationsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BoardLocationsService);
    return BoardLocationsService;
}());
exports.BoardLocationsService = BoardLocationsService;
