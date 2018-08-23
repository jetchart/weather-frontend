import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class ErrorService{

    constructor(
        public _router: Router,
        public _authService : AuthService
    ){

    }

    handleError(error){
      localStorage.setItem("error",error.message);
      if (error instanceof HttpErrorResponse) {
          if (error.status == 401){
              localStorage.setItem("error","You don't have permission to access here");
          }
          if (error.status == 403){
              localStorage.setItem("error","You don't have permission. Please login.");
              this._authService.logout();
              this._router.navigate(["/index"]);
          }
      }
      this._router.navigate(["/error"]);
    }

}
