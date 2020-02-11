import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-square-hotel-catalog-modal',
  templateUrl: './square-hotel-catalog-modal.component.html',
  styleUrls: ['./square-hotel-catalog-modal.component.css']
})
export class SquareHotelCatalogModalComponent implements OnInit {

  public squares: Array<Square>;
  public hotels: Array<Hotel> = new Array<Hotel>();
  public squareCatalog: boolean;

  constructor(
    private _squareServices: SquareServices,
    public dialogRef: MatDialogRef<SquareHotelCatalogModalComponent>,
  ) { 
    this.squares = this._squareServices.getAllSquares();
    this.squareCatalog = true;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  onChangeSquare(square: Square, checked: boolean) {
    console.log(square);
    console.log(checked);
  }

  onChangeHotel(hotel: Hotel, checked: boolean) {
    console.log(hotel);
    console.log(checked);
  }

  onClickTabSquares() {
    this.squareCatalog = true;
  }

  onClickTabHotels() {
    this.squareCatalog = false;
  }
}
