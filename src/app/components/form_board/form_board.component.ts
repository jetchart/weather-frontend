import { Component, OnInit, OnDestroy } from '@angular/core';
import {BoardsService} from "../boards/boards.service";
import {UsersService} from "../users/users.service";
import {BoardLocation} from "../boardLocations/boardLocation";
import {BoardLocationsService} from "../boardLocations/boardLocations.service";
import {LocationsService} from "../locations/locations.service";
import { User } from "../users/user";
import { Board } from "./../boards/board";
import { Location } from "./../locations/location";
import { Forecast } from "./../locations/forecast";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ErrorService} from "./../error/error.service";
import { Subscription, timer, Observable } from "rxjs";
//Autocomplete
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'form_board',
  templateUrl: './form_board.component.html'
})
export class FormBoardComponent implements OnInit, OnDestroy{
  public title : String;
  public name : String;
  public boardNew : Board;
  public forecasts : Forecast[];
  public locationBoardDeleteId : String;
  public locationExtended : Location;
  public boardId : String;
  public boardLocations : BoardLocation[];
  public userId : String;
  public locationIdNew : String;
  public action : String = "NEW";
  public getBoardLocationsByBoardIdSubscription : Subscription;

  //Autocomplete
  public autocompleteControl : FormControl;
  public filteredOptions: Observable<Location[]>;
  public options : Location[];

  constructor(public _errorService: ErrorService,
              public _boardsService : BoardsService,
              public _boardLocationsService : BoardLocationsService,
              public _locationsService : LocationsService,
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
    //Autocomplete
    this.getLocationsEnabled();
    this.initAutoComplete();
  };

  ngOnDestroy(){
    if (this.boardId != null && this.boardId != "0"){
      console.log("Destroyed: getBoardLocationsByBoardIdSubscription");
      this.getBoardLocationsByBoardIdSubscription.unsubscribe();
    }
  };


  onSubmit(form){
    this.saveBoard();
    form.reset();
  };

  initAutoComplete(){
    this.autocompleteControl = new FormControl();
    this.filteredOptions = this.autocompleteControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  setBoardLocationIdToDelete(boardLocationId){
    this.locationBoardDeleteId = boardLocationId;
  }

  addLocation(locationIdNew){
    if (locationIdNew != ""){
      let boardLocation = new BoardLocation();
      boardLocation.board = new Board();
      boardLocation.board.id = this.boardId;
      //boardLocation.board.user = new User();
      //boardLocation.board.user.id = this.userId;
      boardLocation.location = new Location();
      boardLocation.location.id = locationIdNew;
      this.saveBoardLocation(boardLocation);
      this.locationIdNew = "";
      this.initAutoComplete();
    }
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

      getLocationsEnabled(){
        this._locationsService.getLocationsEnabled()
        .subscribe(
          result => {
            console.log("Locations: " + result);
              this.options = result;
              return result;
          },
          error => {
            this._errorService.handleError(error);
          });
        };

        filter(val) {
          this.locationIdNew = "";
           if(this.options){
           return this.options.filter(option=>
            option.name.toLowerCase().includes(val.toLowerCase()));
          }
        }

    selectLocationToAdd(id){
      this.locationIdNew = id;
    }

    setForecasts(locationExtended : Location){
      this.locationExtended = locationExtended;
      this.forecasts = locationExtended.forecasts;
    }
  }
