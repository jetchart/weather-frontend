import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ErrorService{

    constructor(
        public _router: Router
    ){

    }

    handleError(error){
      if (error instanceof HttpErrorResponse) {
          if (error.status == 401){
              localStorage.setItem("error","You dont have permission to access to page");
          }
          if (error.status == 403){
              localStorage.setItem("error","You dont have permission. Please login.");
          }
      } else {
          localStorage.setItem("error",error.message);
      }
      this._router.navigate(["/error"]);
    }

}