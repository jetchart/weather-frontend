import { Component, OnInit } from '@angular/core';
import { BoardsService } from "./boards.service";
import { UsersService } from "./../users/users.service";
import { User } from "./../users/user";
import { Board } from "./board";
import { Location } from "./../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  public boards : Board[];
  public userId : Number;
  public user : User;
  public title : String;
  public boardIdDelete : String;
  constructor(public _errorService: ErrorService,
              public _usersService: UsersService,
              public _boardsService: BoardsService,
              public _route: ActivatedRoute,
              public _router: Router) {
    this.userId = this._route.snapshot.params['id'];
    console.log("Estoy en BOARDS: " + this.userId);
    this.getBoardsByUserId();
    this.getUser();
  }

  ngOnInit() {
  }


  openBoard(boardId){
    this._router.navigate(["/form_board", boardId, this.userId]);
  }

  getBoardsByUserId() {
    this._boardsService.getBoardsByUserId(this.userId).subscribe(
      result => {
          console.log(result);
          this.boards = result;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  getUser() {
    this._usersService.getUser(this.userId).subscribe(
      result => {
          this.user = result;
          this.title = "Boards of " + this.user.name + " " + this.user.surname;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  deleteBoardById(boardId) {
    this._boardsService.deleteBoardById(boardId).subscribe(
      result => {
          this.getBoardsByUserId();
      },
      error => {
          this._errorService.handleError(error);;
      });
    };

    setBoardIdDelete(boardId){
      this.boardIdDelete = boardId;
    }

}
