import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import { SquareServices } from 'src/app/services/square-services';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-hotels-catalog',
  templateUrl: './hotels-catalog.component.html',
  styleUrls: ['./hotels-catalog.component.css']
})
export class HotelsCatalogComponent implements OnInit {
  squareSelected: Square = new Square();
  loadingHotels: boolean = false;
  loadingSquares: boolean = false;
  hotels: Array<Hotel> = new Array<Hotel>();
  squares: Array<Square> = new Array<Square>();

  constructor(
    private _hotelServices: HotelServices,
    private _squareServices: SquareServices,
    private _surveyCaptureServices: SurveyCaptureServices
  ) { }

  ngOnInit() {
    this.getAllSquares();
  }

  onClickSquare(square: Square) {
    this.squareSelected = square;
    this.loadingHotels = true;
    this.hotels = new Array<Hotel>();

    this._hotelServices.getHotelsBySquareId(square.squareId).subscribe(
      data => {
        this.hotels = data;
        this.loadingHotels = false;
      },
      error => {
        console.log(error);
        this.loadingHotels = false;
      });
  }

  isHotelSelected(hotel: Hotel): boolean {
    return (this._surveyCaptureServices.hotels.find(a => a.squareId == this.squareSelected.squareId && a.hotelId == hotel.hotelId) != undefined);
  }

  getAllSquares() {
    this.loadingSquares = true;
    this._squareServices.getAllActiveSquares().subscribe(
      data => {
        this.squares = data;
        this.loadingSquares = false;
      },
      error => {
        console.log(error);
        this.loadingSquares = false;
      }
    );
  }

  onClickHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this._surveyCaptureServices.addHotel(this.squareSelected, hotel);
    }
    else {
      this._surveyCaptureServices.removeHotel(this.squareSelected, hotel);
    }
  }
}
