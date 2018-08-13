"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
//Components
var users_component_1 = require("./components/users/users.component");
var form_user_component_1 = require("./components/form_user/form_user.component");
var city_component_1 = require("./components/city/city.component");
var index_component_1 = require("./components/index/index.component");
//Routes array
var appRoutes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'form_user/:id', component: form_user_component_1.FormUserComponent },
    { path: 'city', component: city_component_1.CityComponent },
    { path: 'index', component: index_component_1.IndexComponent }
];
//Export Routes
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
