import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form_user/form_user.component';
import { FormLocationComponent } from './components/form_location/form_location.component';
import { BoardsComponent } from './components/boards/boards.component';
import { LocationsComponent } from './components/locations/locations.component';
import { IndexComponent } from './components/index/index.component';

import { AutocompleteOverviewExample } from './components/autocomplete-overview-example/autocomplete-overview-example';


//Routes array
const appRoutes : Routes = [
  {path: '', component: IndexComponent},
  {path: 'users', component: UsersComponent},
  {path: 'form_user/:id', component: FormUserComponent},
  {path: 'form_location/:id', component: FormLocationComponent},
  {path: 'boards/:id', component: BoardsComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'index', component: IndexComponent}
];

//Export Routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
