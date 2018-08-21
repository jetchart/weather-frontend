import { Component, OnInit, DoCheck,AfterViewInit } from '@angular/core';
import { UsersService } from "./../users/users.service";
import { User } from "./../users/user";
import { Location } from "./../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, DoCheck {
  public error : String;
  constructor(public _route: ActivatedRoute,
              public _router: Router) {

  }

  ngOnInit() {
    this.error = localStorage.getItem("error");
    localStorage.removeItem("error");
  }

  ngDoCheck() {

  }


}
