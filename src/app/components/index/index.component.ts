import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { UsersService } from './../users/users.service';
import { User } from './../users/user';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'index',
  templateUrl: 'index.component.html'
})
export class IndexComponent implements OnInit {
  public myControl : FormControl;
  //options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<User[]>;
  public options : User[];
  //public filteredOptions: Observable<any[]>;

  /*public options: any[] = [
      { "id": 1, "name": "colour", "cat": "red" },
      { "id": 2, "name": "colour", "cat": "blue" },
      { "id": 3, "name": "colour", "cat": "green" }
  ];*/

  constructor(public _usersService : UsersService){
    this.getUsers();
  }

  ngOnInit() {
    this.myControl = new FormControl();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val) {
     if(this.options){
     return this.options.filter(option=>
      option.name.toLowerCase().includes(val.toLowerCase()));
    }
  }

  findOption(val: string) {
      return this.options.filter((s) => new RegExp(val, 'gi').test(s.name));
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();
    console.log("Buscando: " + value);
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getUsers(){
    this._usersService.getUsers()
    .subscribe(
      result => {
            console.log(result);
          this.options = result;
      },
      error => {

      });
  }
}
