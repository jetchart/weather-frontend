"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
//Components
var users_component_1 = require("./components/users/users.component");
var form_user_component_1 = require("./components/form_user/form_user.component");
var form_location_component_1 = require("./components/form_location/form_location.component");
var locations_component_1 = require("./components/locations/locations.component");
var index_component_1 = require("./components/index/index.component");
//Routes array
var appRoutes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'form_user/:id', component: form_user_component_1.FormUserComponent },
    { path: 'form_location/:id', component: form_location_component_1.FormLocationComponent },
    { path: 'locations', component: locations_component_1.LocationsComponent },
    { path: 'index', component: index_component_1.IndexComponent }
];
//Export Routes
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
