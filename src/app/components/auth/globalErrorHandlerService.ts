import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
     private injector: Injector
  ) { }

    handleError(error: any) {
      const _router = this.injector.get(Router);

      if (error instanceof HttpErrorResponse) {
          if (error.status == 401){
              localStorage.setItem("error","You dont have permission");
          }
          if (error.status == 403){
              localStorage.setItem("error","You dont have permission");
          }
      } else {
          localStorage.setItem("error",error.message);

      }

          //_router.navigate(["/error"]);
          //setTimeout(() => _router.navigate(['/error']));
          //setTimeout(() => _router.navigate(['/error'], { skipLocationChange: true}));
          //return error.status;

    }
}
