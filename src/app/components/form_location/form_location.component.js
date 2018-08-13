"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var location_1 = require("../locations/location");
var FormLocationComponent = /** @class */ (function () {
    function FormLocationComponent(_locationsService, _router, _route) {
        this._locationsService = _locationsService;
        this._router = _router;
        this._route = _route;
        this.titulo = "Alta location";
        this.id = this._route.snapshot.params['id'];
        this.locationInsertar = new location_1.Location();
        if (this.id != null && this.id > 0) {
            this.titulo = "Edición location";
            this.getLocation();
        }
    }
    FormLocationComponent.prototype.ngOnInit = function () {
    };
    ;
    FormLocationComponent.prototype.onSubmit = function (form) {
        this.saveLocation();
        form.reset();
    };
    ;
    FormLocationComponent.prototype.getLocation = function () {
        var _this = this;
        this._locationsService.getLocation(this.id).subscribe(function (result) {
            console.log(result);
            _this.locationInsertar = result;
        }, function (error) {
            console.log(error);
        });
    };
    ;
    FormLocationComponent.prototype.saveLocation = function () {
        var _this = this;
        this._locationsService.saveLocation(this.locationInsertar).subscribe(function (result) {
            console.log(result);
            _this._router.navigate(['/locations']);
        }, function (error) {
            console.log(error);
        });
    };
    ;
    FormLocationComponent = __decorate([
        core_1.Component({
            selector: 'form_location',
            templateUrl: './form_location.component.html'
        })
    ], FormLocationComponent);
    return FormLocationComponent;
}());
exports.FormLocationComponent = FormLocationComponent;
