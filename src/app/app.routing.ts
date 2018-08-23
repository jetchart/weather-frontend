import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form_user/form_user.component';
import { FormLocationComponent } from './components/form_location/form_location.component';
import { FormBoardComponent } from './components/form_board/form_board.component';
import { BoardsComponent } from './components/boards/boards.component';
import { LocationsComponent } from './components/locations/locations.component';
import { IndexComponent } from './components/index/index.component';
import { FormLoginComponent } from './components/form_login/form_login.component';
import { ErrorComponent } from './components/error/error.component';

//Routes array
const appRoutes : Routes = [
  {path: '', component: IndexComponent},
  {path: 'users', component: UsersComponent},
  {path: 'form_user/:id', component: FormUserComponent},
  {path: 'form_location/:id', component: FormLocationComponent},
  {path: 'form_board/:boardId/:userId', component: FormBoardComponent},
  {path: 'boards/:id', component: BoardsComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'index', component: IndexComponent},
  {path: 'form_login', component: FormLoginComponent},
  {path: 'error', component: ErrorComponent}
];

//Export Routes
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
