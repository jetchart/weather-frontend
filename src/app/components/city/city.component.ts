import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector : 'city',
  templateUrl : './city.component.html'
})
export class CityComponent implements OnInit, DoCheck{
  public titulo : string;

  constructor(){
      this.titulo = 'City page';
  }

  //Al iniciar el componente
  ngOnInit(){
    console.log('ngOnInit executed');
  }

  //Al cambiar el componente
  ngDoCheck(){
    console.log('ngDoCheck executed');
  }
}
