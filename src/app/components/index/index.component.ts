import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'index',
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit {
  public title : String;

  constructor(){
  }

  ngOnInit(){
    this.title = "Welcome to WeatherApp!";
  }
}
