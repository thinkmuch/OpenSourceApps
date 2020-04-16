import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';
import { MatDialogRef } from '@angular/material';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-square-hotel-catalog',
  templateUrl: './square-hotel-catalog.component.html',
  styleUrls: ['./square-hotel-catalog.component.css']
})
export class SquareHotelCatalogComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  cruises: Array<Cruise>;
  squareSelected: Square;
  loadingSquares: boolean = false;
  loadinghotels: boolean = false;
  
  constructor(
    private _squareServices: SquareServices,
    private _hotelServices: HotelServices,
    private _cruiseServices: CruisesService,
    private _surveyCaptureServices: SurveyCaptureServices,
    public dialogRef: MatDialogRef<SquareHotelCatalogComponent>
  ) { }

  ngOnInit() {
    this.hotels = new Array<Hotel>();
    this.getAllSquares();
    this.getAllCruises();
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

  getAllCruises() {
    this._cruiseServices.getAllActiveCruises().subscribe(
      data => {
        this.cruises = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickSquare(square: Square) {
    this.squareSelected = square;
    this.loadinghotels = true;
    this.hotels = new Array<Hotel>();

    this._hotelServices.getHotelsBySquareId(square.squareId).subscribe(
      data => {
        this.hotels = data;
        this.loadinghotels = false;
      },
      error => {
        console.log(error);
        this.loadinghotels = false;
      });
  }

  close() {
    this.dialogRef.close();
  }

  onClickHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this._surveyCaptureServices.addHotel(this.squareSelected, hotel);
    }
    else {
      this._surveyCaptureServices.removeHotel(this.squareSelected, hotel);
    }
  }

  isHotelSelected(hotel: Hotel): boolean {
    return (this._surveyCaptureServices.hotels.find(a => a.squareId == this.squareSelected.squareId && a.hotelId == hotel.hotelId) != undefined);
  }

  isCruiseSelected(cruise: Cruise) {
    return (this._surveyCaptureServices.cruises.find(c => c.cruiseId == cruise.cruiseId) != undefined);
  }

  onClickCruise(cruise: Cruise, checked: boolean) {
    if(checked) {
      this._surveyCaptureServices.addCruise(cruise);
    }
    else {
      this._surveyCaptureServices.removeCruise(cruise);
    }
  }
}
