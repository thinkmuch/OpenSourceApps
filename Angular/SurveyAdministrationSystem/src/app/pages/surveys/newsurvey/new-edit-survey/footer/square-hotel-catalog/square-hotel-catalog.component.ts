import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';

@Component({
  selector: 'app-square-hotel-catalog',
  templateUrl: './square-hotel-catalog.component.html',
  styleUrls: ['./square-hotel-catalog.component.css']
})
export class SquareHotelCatalogComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  cruises: Array<Cruise>;
  
  constructor(
    private _squareServices: SquareServices,
    private _hotelServices: HotelServices,
    private _cruiseServices: CruisesService
  ) { }

  ngOnInit() {
    this.hotels = new Array<Hotel>();
    this.squares = this._squareServices.getAllSquares();
    this.cruises = this._cruiseServices.getAll();
  }

  onClickSquare(square: Square) {
    this.hotels = this._hotelServices.getHotelsBySquareId(square.id);
  }
}
