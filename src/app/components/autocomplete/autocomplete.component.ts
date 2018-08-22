import { Component } from '@angular/core';
import { UsersService } from './../users/users.service';
import { User } from './../users/user';

@Component({
selector: 'autocomplete-example',
templateUrl: 'autocomplete.html',
})
export class AutocompleteComponent  {

  protected searchStr: string;
  protected dataService: User[];
  protected searchData = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'cyan' },
    { color: 'magenta' },
    { color: 'yellow' },
    { color: 'black' },
  ];

  constructor(private _usersService: UsersService) {

  }
}
