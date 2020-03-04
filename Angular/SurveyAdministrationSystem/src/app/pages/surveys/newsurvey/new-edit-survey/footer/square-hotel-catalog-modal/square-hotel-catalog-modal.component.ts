import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';

@Component({
  selector: 'app-square-hotel-catalog-modal',
  templateUrl: './square-hotel-catalog-modal.component.html',
  styleUrls: ['./square-hotel-catalog-modal.component.css']
})
export class SquareHotelCatalogModalComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  cruises: Array<Cruise>;
  squareHidden: boolean;
  hotelsHidden: boolean;
  cruisesHidden: boolean;
  allSquares: boolean;
  allHotels: boolean;
  allCruises: boolean;

  constructor(
    private _squareServices: SquareServices,
    private _surveyCaprureServices: SurveyCaptureServices,
    public dialogRef: MatDialogRef<SquareHotelCatalogModalComponent>,
    private _cruisesServices: CruisesService
  ) { }

  ngOnInit() {
    this.hotels = new Array<Hotel>();
    this.squares = this._squareServices.getAllSquares();
    this.cruises = this._cruisesServices.getAll();
    
    this.allSquares = false;
    this.allHotels = false;
    this.allCruises = false;

    this.squareHidden = false;
    this.cruisesHidden = true;
    this.hotelsHidden = true;

    this.filterHotels();
  }

  close() {
    this.dialogRef.close();
  }

  onChangeSquare(square: Square, checked: boolean) {
    if(checked) {
      this.addSquare(square);
    }
    else {
      this.removeSquare(square);
    }
  }

  addSquare(square: Square) {
    this._surveyCaprureServices.addSquare(square);
    this.filterHotels();
  }

  filterHotels() {
    if(this._surveyCaprureServices.squares.length == 0) {
      this.hotels = [];
    }
    else {
      this._surveyCaprureServices.squares.forEach(square => {
        square.hotels.forEach(hotel => {
          const hotelFound = this.hotels.find(item => item.id == hotel.id);
          if(hotelFound == undefined) {
            this.hotels.push(hotel);
          }
        });
      });
    }
  }

  removeSquare(square: Square) {
    this._surveyCaprureServices.removeSquare(square);
    this.filterHotels();
  }

  onChangeHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this._surveyCaprureServices.addHotel(hotel);
    }
    else {
      this._surveyCaprureServices.removeHotel(hotel);
    }
  }

  onChangeCruise(cruise: Cruise, checked: boolean) {
    if(checked) {
      this._surveyCaprureServices.addCruise(cruise);
    }
    else {
      this._surveyCaprureServices.removeCruise(cruise);
    }
  }

  onClickTabSquares() {
    this.squareHidden = false;
    this.hotelsHidden = true;
    this.cruisesHidden = true;
  }

  onClickTabHotels() {
    this.hotelsHidden = false;
    this.squareHidden = true;
    this.cruisesHidden = true;
  }

  onClickTabCruises() {
    this.cruisesHidden = false;
    this.squareHidden = true;
    this.hotelsHidden = true;
  }

  isSquareSelected(square: Square): boolean {
    return ((this._surveyCaprureServices.squares.find(p => p.id == square.id)) != undefined);
  }

  isHotelSelected(hotel: Hotel) {
    return ((this._surveyCaprureServices.hotels.find(p => p.id == hotel.id)) != undefined);
  }

  isCruiseSelected(cruise: Cruise) {
    return ((this._surveyCaprureServices.cruises.find(c => c.id == cruise.id)) != undefined);
  }

  onClickAllHotels() {
    this.allHotels = !this.allHotels;

    if(!this.allHotels) {
      this._surveyCaprureServices.removeAllHotels();
    }
    else {
      this.hotels.forEach(hotel => {
        this._surveyCaprureServices.addHotel(hotel);
      });
    }
  }

  onClickAllSquares() {
    this.allSquares = !this.allSquares;
    this._surveyCaprureServices.removeAllSquares();

    if(this.allSquares) {
      this.squares.forEach(square => {
        this._surveyCaprureServices.addSquare(square);
      });
      
      this.filterHotels();
    }
  }

  onClickAllCruises() {
    this.allCruises = !this.allCruises;
    this._surveyCaprureServices.removeAllCruises();

    if(this.allCruises) {
      this.cruises.forEach(cruise => {
        this._surveyCaprureServices.addCruise(cruise);
      });
    }
  }
}
