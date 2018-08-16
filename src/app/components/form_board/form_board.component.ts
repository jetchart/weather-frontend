import { Component, OnInit } from '@angular/core';
import {BoardsService} from "../boards/boards.service";
import {UsersService} from "../users/users.service";
import { User } from "../users/user";
import { Board } from "./../boards/board";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form_board',
  templateUrl: './form_board.component.html'
})
export class FormBoardComponent implements OnInit{
  public titulo : String;
  public nombre : String;
  public boardNew : Board;
  public boardId : String;
  public userId : String;
  constructor(public _boardsService : BoardsService,
              public _usersService : UsersService, public _router: Router, public _route: ActivatedRoute){
    this.titulo = "Board";
    this.boardId = this._route.snapshot.params['boardId'];
    this.userId = this._route.snapshot.params['userId'];
    this.boardNew = new Board();
    this.getUser(this.userId);
    if (this.boardId != null && this.boardId != "0"){
      this.getBoard();
    }
  }

  ngOnInit(){
  };

  onSubmit(form){
    this.saveBoard();
    form.reset();
  };

  getBoard() {
    this._boardsService.getBoardById(this.boardId).subscribe(
      result => {
          console.log(result);
          this.boardNew = result;
      },
      error => {
          console.log(<any>error);
      });
    };

  saveBoard() {
    this._boardsService.saveBoard(this.boardNew).subscribe(
      result => {
          console.log(result);
          this._router.navigate(['/boards', this.userId]);
      },
      error => {
          console.log(<any>error);
      });
    };

    getUser(userId){
      this._usersService.getUser(userId)
      .subscribe(
        result => {
            this.boardNew.user = result;
            return result;
        },
        error => {
            console.log(<any>error);
        });
      };

  }
