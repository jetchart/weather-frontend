import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form_user/form_user.component';
import { CityComponent } from './components/city/city.component';
import { IndexComponent } from './components/index/index.component';

//Routes array
const appRoutes : Routes = [
  {path: '', component: IndexComponent},
  {path: 'users', component: UsersComponent},
  {path: 'form_user/:id', component: FormUserComponent},
  {path: 'city', component: CityComponent},
  {path: 'index', component: IndexComponent}
];

//Export Routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
