import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector : 'index',
  templateUrl : './index.component.html'
})
export class IndexComponent implements OnInit, DoCheck{
  public titulo : string;

  constructor(){
      this.titulo = 'Index page';
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
