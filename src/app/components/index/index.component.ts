import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'index',
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit {
  public title : String;
  public welcome : String;
  public user : String;

  constructor(){
  }

  ngOnInit(){
    this.title = "Welcome to WeatherApp!";
    this.welcome = localStorage.getItem("welcome");
    this.user = localStorage.getItem("auth_user");
    localStorage.removeItem("welcome");
  }
}
