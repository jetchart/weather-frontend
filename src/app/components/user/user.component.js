"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var UserComponent = /** @class */ (function () {
    function UserComponent(userService, _router) {
        this.userService = userService;
        this._router = _router;
        this.titulo = "Usuarios";
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit ejecutado');
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (result) {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            _this.usuarios = result;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UserComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.deleteUser(id).subscribe(function (response) {
            console.log('eliminado');
            _this.getUsers();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            templateUrl: './user.component.html'
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
