"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var user_1 = require("../users/user");
var FormUserComponent = /** @class */ (function () {
    function FormUserComponent(_usersService, _router, _route) {
        this._usersService = _usersService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Alta usuario";
        this.id = this._route.snapshot.params['id'];
        this.userInsertar = new user_1.User();
        if (this.id != null && this.id > 0) {
            this.titulo = "Edición usuario";
            this.getUser();
        }
    }
    FormUserComponent.prototype.ngOnInit = function () {
    };
    ;
    FormUserComponent.prototype.onSubmit = function (form) {
        this.saveUser();
        form.reset();
    };
    ;
    FormUserComponent.prototype.getUser = function () {
        var _this = this;
        this._usersService.getUser(this.id).subscribe(function (result) {
            console.log(result);
            _this.userInsertar = result;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    FormUserComponent.prototype.saveUser = function () {
        var _this = this;
        this._usersService.saveUser(this.userInsertar).subscribe(function (result) {
            /*if(result.code != 200){
                console.log(result);
            }else{
                this.nombre = result.data[0].nombre;
            }*/
            console.log(result);
            _this._router.navigate(['/users']);
        }, function (error) {
            console.log(error);
        });
    };
    ;
    FormUserComponent = __decorate([
        core_1.Component({
            selector: 'form_user',
            templateUrl: './form_user.component.html'
        })
    ], FormUserComponent);
    return FormUserComponent;
}());
exports.FormUserComponent = FormUserComponent;
