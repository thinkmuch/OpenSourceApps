import { Component, OnInit } from '@angular/core';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  areas: Array<Area>;
  squareSelected: Square;
  hotelSelected: Hotel;
  areaSelected: Area;

  constructor(
    private _squaresServices: SquareServices,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this.squares = this._squaresServices.getAllSquares();
    this.hotels = this._squaresServices.getAllHotels();
    this.areas = this._areasServices.getAllAreas();
  }

  onClickSquare(square: Square) {
    this.squareSelected = square;
  }

  onClickHotel(hotel: Hotel) {
    this.hotelSelected = hotel;
  }

  onClickArea(area: Area) {
    this.areaSelected = area;
  }
}
