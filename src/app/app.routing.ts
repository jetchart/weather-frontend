import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { UserComponent } from './components/user/user.component';
import { CityComponent } from './components/city/city.component';
import { IndexComponent } from './components/index/index.component';

//Routes array
const appRoutes : Routes = [
  {path: '', component: IndexComponent},
  {path: 'user', component: UserComponent},
  {path: 'city', component: CityComponent},
  {path: 'index', component: IndexComponent}
];

//Export Routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
