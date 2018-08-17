import { Component, OnInit } from '@angular/core';
import {BoardsService} from "../boards/boards.service";
import {UsersService} from "../users/users.service";
import {BoardLocation} from "../boardLocations/boardLocation";
import {BoardLocationsService} from "../boardLocations/boardLocations.service";
import { User } from "../users/user";
import { Board } from "./../boards/board";
import { Location } from "./../locations/location";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'form_board',
  templateUrl: './form_board.component.html'
})
export class FormBoardComponent implements OnInit{
  public title : String;
  public name : String;
  public boardNew : Board;
  public locationDeleteId : String;
  public boardId : String;
  public boardLocations : BoardLocation[];
  public userId : String;
  public locationIdNew : String;
  public action : String = "NEW";
  constructor(public _boardsService : BoardsService,
              public _boardLocationsService : BoardLocationsService,
              public _usersService : UsersService,
              public _router: Router,
              public _route: ActivatedRoute){
    this.title = "Board";
    this.boardId = this._route.snapshot.params['boardId'];
    this.userId = this._route.snapshot.params['userId'];
    this.boardNew = new Board();
    this.getUser(this.userId);
    if (this.boardId != null && this.boardId != "0"){
      this.action = "UPDATE";
      this.getBoard();
      this.getBoardLocationsByBoardId();
    }
  }

  ngOnInit(){
  };

  onSubmit(form){
    this.saveBoard();
    form.reset();
  };

  setLocationIdToDelete(locationId){
    this.locationDeleteId = locationId;
  }

  addLocation(locationIdNew){
    let boardLocation = new BoardLocation();
    boardLocation.board = new Board();
    boardLocation.board.id = this.boardId;
    boardLocation.location = new Location();
    boardLocation.location.id = locationIdNew;
    this.saveBoardLocation(boardLocation);
    this.locationIdNew = "";
    this.getBoardLocationsByBoardId();
  }

  saveBoardLocation(boardLocation : BoardLocation) {
    this._boardLocationsService.saveBoardLocation(boardLocation).subscribe(
      result => {
          console.log(result);
      },
      error => {
          console.log(<any>error);
      });
    };

  getBoardLocationsByBoardId() {
    this._boardLocationsService.getBoardLocationsByBoardId(this.boardId).subscribe(
      result => {
          console.log(result);
          this.boardLocations = result;
      },
      error => {
          console.log(<any>error);
      });
    };

    deleteBoardLocationByBoardLocationId(boardLocationId) {
      this._boardLocationsService.deleteBoardLocationByBoardLocationId(boardLocationId).subscribe(
        result => {
            this.getBoardLocationsByBoardId();
        },
        error => {
            console.log(<any>error);
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
          console.log(<any>error);
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

      setTitle(){
        this.title = "Board: " + this.boardNew.name;
      }

  }
