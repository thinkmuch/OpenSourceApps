import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { QuestionServices } from 'src/app/services/question-services';

@Component({
  selector: 'app-square-hotel-catalog-modal',
  templateUrl: './square-hotel-catalog-modal.component.html',
  styleUrls: ['./square-hotel-catalog-modal.component.css']
})
export class SquareHotelCatalogModalComponent implements OnInit {

  public squares: Array<Square>;
  public hotels: Array<Hotel>;
  public squareCatalog: boolean;
  public allSquares: boolean;
  public allHotels: boolean;

  constructor(
    private _squareServices: SquareServices,
    private _questionServices: QuestionServices,
    public dialogRef: MatDialogRef<SquareHotelCatalogModalComponent>,
  ) { 
    this.squares = this._squareServices.getAllSquares();
    this.squareCatalog = true;
    this.allSquares = false;
    this.allHotels = false;
    this.hotels = new Array<Hotel>();
  }

  ngOnInit() {
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
    this._questionServices.addSquare(square);
    this.filterHotels();
  }

  filterHotels() {
    if(this._questionServices.squares.length == 0) {
      this.hotels = [];
    }
    else {
      this._questionServices.squares.forEach(square => {
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
    this._questionServices.removeSquare(square);
    this.filterHotels();
  }

  onChangeHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this._questionServices.addHotel(hotel);
    }
    else {
      this._questionServices.removeHotel(hotel);
    }
  }

  onClickTabSquares() {
    this.squareCatalog = true;
  }

  onClickTabHotels() {
    this.squareCatalog = false;
  }

  onClickAllSquares() {
    this.allSquares = !this.allSquares;
    
    if(!this.allSquares) {
      this._questionServices.removeAllSquares();
      this.filterHotels();
    }
    else {
      this._squareServices.getAllSquares().forEach(square => {
        this._questionServices.addSquare(square);
      });
      
      this.filterHotels();
    }
  }

  isSquareSelected(square: Square): boolean {
    return ((this._questionServices.squares.find(p => p.id == square.id)) != undefined);
  }

  onClickAllHotels() {
    this.allHotels = !this.allHotels;

    if(!this.allHotels) {
      this._questionServices.removeAllHotels();
    }
    else {
      this.hotels.forEach(hotel => {
        this._questionServices.addHotel(hotel);
      });
    }
  }
}
