import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { FormUserComponent } from './components/form_user/form_user.component';
import { LocationsComponent } from './components/locations/locations.component';
import { FormLocationComponent } from './components/form_location/form_location.component';
import { FormBoardComponent } from './components/form_board/form_board.component';
import { FormLoginComponent } from './components/form_login/form_login.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoardsComponent } from './components/boards/boards.component';
import { GlobalErrorHandlerService } from './components/auth/globalErrorHandlerService';
import { ErrorHandler} from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
//Material
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormUserComponent,
    LocationsComponent,
    FormLocationComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    BoardsComponent,
    FormBoardComponent,
    FormLoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    //Material
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    appRoutingProviders,
    GlobalErrorHandlerService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
