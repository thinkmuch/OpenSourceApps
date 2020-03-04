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

  public squares: Array<Square>;
  public hotels: Array<Hotel>;
  public cruises: Array<Cruise>;
  public squareHidden: boolean;
  public hotelsHidden: boolean;
  public cruisesHidden: boolean;
  public allSquares: boolean;
  public allHotels: boolean;

  constructor(
    private _squareServices: SquareServices,
    private _surveyCaprureServices: SurveyCaptureServices,
    public dialogRef: MatDialogRef<SquareHotelCatalogModalComponent>,
    private _cruisesServices: CruisesService
  ) { }

  ngOnInit() {
    this.squares = this._squareServices.getAllSquares();
    this.cruises = this._cruisesServices.getAll();
    this.squareCatalog = true;
    this.cruisesCatalog = false;
    this.hotelsCatalog = false;
    this.allSquares = false;
    this.allHotels = false;
    this.hotels = new Array<Hotel>();

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
    console.log(`checked = ${checked}`);
    console.log(cruise);
  }

  onClickTabSquares() {
    this.squareCatalog = true;
    this.hotelsCatalog = false;
    this.cruisesCatalog = false;
  }

  onClickTabHotels() {
    this.hotelsCatalog = true;
    this.squareCatalog = false;
    this.cruisesCatalog = false;
  }

  onClickTabCruises() {
    this.cruisesCatalog = true;
    this.squareCatalog = false;
    this.hotelsCatalog = false;
  }

  onClickAllSquares() {
    this.allSquares = !this.allSquares;
    
    if(!this.allSquares) {
      this._surveyCaprureServices.removeAllSquares();
      this.filterHotels();
    }
    else {
      this._squareServices.getAllSquares().forEach(square => {
        this._surveyCaprureServices.addSquare(square);
      });
      
      this.filterHotels();
    }
  }

  onClickAllCruises() {
    console.log('onClickAllCruises');
  }

  isSquareSelected(square: Square): boolean {
    return ((this._surveyCaprureServices.squares.find(p => p.id == square.id)) != undefined);
  }

  isHotelSelected(hotel: Hotel) {
    return ((this._surveyCaprureServices.hotels.find(p => p.id == hotel.id)) != undefined);
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
}
