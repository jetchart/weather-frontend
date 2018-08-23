import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) { }

    handleError(error: any) {
      const _router = this.injector.get(Router);
      localStorage.setItem("error",error.message);
    }
}
