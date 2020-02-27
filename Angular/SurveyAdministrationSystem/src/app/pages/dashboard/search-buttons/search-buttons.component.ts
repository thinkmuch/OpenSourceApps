import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';
import { Area } from 'src/app/models/area';
import { SquareServices } from 'src/app/services/square-services';
import { AreasServices } from 'src/app/services/areas-services';

@Component({
  selector: 'app-search-buttons',
  templateUrl: './search-buttons.component.html',
  styleUrls: ['./search-buttons.component.css']
})
export class SearchButtonsComponent implements OnInit {

  squares: Array<Square>;
  hotels: Array<Hotel>;
  areas: Array<Area>;
  squareSelected: Square;
  hotelSelected: Hotel;
  areaSelected: Area;
  
  constructor(
    private _squaresServices: SquareServices,
    private _areasServices: AreasServices,
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
