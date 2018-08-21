import { Component, OnInit } from '@angular/core';
import {BoardsService} from "../boards/boards.service";
import {UsersService} from "../users/users.service";
import {BoardLocation} from "../boardLocations/boardLocation";
import {BoardLocationsService} from "../boardLocations/boardLocations.service";
import { User } from "../users/user";
import { Board } from "./../boards/board";
import { Location } from "./../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";
import { Subscription, timer, Observable } from "rxjs";

@Component({
  selector: 'form_board',
  templateUrl: './form_board.component.html'
})
export class FormBoardComponent implements OnInit{
  public title : String;
  public name : String;
  public boardNew : Board;
  public locationBoardDeleteId : String;
  public boardId : String;
  public boardLocations : BoardLocation[];
  public userId : String;
  public locationIdNew : String;
  public action : String = "NEW";
  public getBoardLocationsByBoardIdSubscription : Subscription;

  constructor(public _errorService: ErrorService,
              public _boardsService : BoardsService,
              public _boardLocationsService : BoardLocationsService,
              public _usersService : UsersService,
              public _router: Router,
              public _route: ActivatedRoute){
    this.title = "Board";
    this.boardId = this._route.snapshot.params['boardId'];
    this.userId = this._route.snapshot.params['userId'];
    this.boardNew = new Board();
    this.getUser(this.userId);
  }

  ngOnInit(){
    if (this.boardId != null && this.boardId != "0"){
      this.action = "UPDATE";
      this.getBoard();
      this.getBoardLocationsByBoardId();
      this.getBoardLocationsByBoardIdSubscription = timer(60000,60000).subscribe(t => {
          this.getBoardLocationsByBoardId();
      });
    }
  };

  onSubmit(form){
    this.saveBoard();
    form.reset();
  };

  setBoardLocationIdToDelete(boardLocationId){
    this.locationBoardDeleteId = boardLocationId;
  }

  addLocation(locationIdNew){
    let boardLocation = new BoardLocation();
    boardLocation.board = new Board();
    boardLocation.board.id = this.boardId;
    boardLocation.location = new Location();
    boardLocation.location.id = locationIdNew;
    this.saveBoardLocation(boardLocation);
    this.locationIdNew = "";
  }

  saveBoardLocation(boardLocation : BoardLocation) {
    this._boardLocationsService.saveBoardLocation(boardLocation).subscribe(
      result => {
          console.log(result);
          this.getBoardLocationsByBoardId();
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  getBoardLocationsByBoardId() {
    this._boardLocationsService.getBoardLocationsByBoardId(this.boardId).subscribe(
      result => {
          console.log(result);
          this.boardLocations = result;
      },
      error => {
          this._errorService.handleError(error);
      });
    };

    deleteBoardLocationByBoardLocationId(boardLocationId) {
      this._boardLocationsService.deleteBoardLocationByBoardLocationId(boardLocationId).subscribe(
        result => {
            this.getBoardLocationsByBoardId();
        },
        error => {
          this._errorService.handleError(error);
        });
        return true;
      };

  getBoard() {
    this._boardsService.getBoardById(this.boardId).subscribe(
      result => {
          console.log(result);
          this.boardNew = result;
          this.setTitle();
      },
      error => {
          this._errorService.handleError(error);
      });
    };

  saveBoard() {
    this._boardsService.saveBoard(this.boardNew).subscribe(
      result => {
          if (this.action == "NEW"){
            this.action = "UPDATE";
            this.boardNew = result;
            this.boardId = this.boardNew.id
            this.setTitle();
            this._router.navigate(['/form_board',this.boardId,this.userId]);

          }else{
            this.getBoardLocationsByBoardId();
          }
      },
      error => {
          this._errorService.handleError(error);
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
          this._errorService.handleError(error);
        });
      };

      setTitle(){
        this.title = "Board: " + this.boardNew.name;
      }

  }
