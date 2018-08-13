"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var user_1 = require("./user");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(_usersService, _router) {
        this._usersService = _usersService;
        this._router = _router;
        this.titulo = "Usuarios";
        this.userInsertar = new user_1.User();
    }
    UsersComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit ejecutado');
        this.getUsers();
    };
    ;
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._usersService.getUsers().subscribe(function (result) {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            _this.users = result;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UsersComponent.prototype.onSubmit = function (form) {
        this.saveUser();
        form.reset();
    };
    ;
    UsersComponent.prototype.saveUser = function () {
        var _this = this;
        this._usersService.saveUser(this.userInsertar).subscribe(function (result) {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            _this.getUsers();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UsersComponent.prototype.updateUser = function (id) {
        this._router.navigate(["/form_user", id]);
    };
    ;
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this._usersService.deleteUser(id).subscribe(function (response) {
            console.log('eliminado');
            _this.getUsers();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: './users.component.html'
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
