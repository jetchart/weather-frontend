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
//import { User } from '../models/user';
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/';
    }
    /*getUsers(): Observable<User>{
        return this.http.get(this.url + 'users');
    }*/
    UsersService.prototype.saveUser = function (user) {
        var params = JSON.stringify(user);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url + 'users', params, { headers: headers });
    };
    UsersService.prototype.getUsers = function () {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'users', { headers: headers });
    };
    UsersService.prototype.getUser = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.url + 'users/' + id, { headers: headers });
    };
    UsersService.prototype.deleteUser = function (id) {
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http["delete"](this.url + 'users/' + id, { headers: headers });
    };
    UsersService.prototype.updateUser = function (user) {
        var params = JSON.stringify(user);
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url + 'users/' + user.id, params, { headers: headers });
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
