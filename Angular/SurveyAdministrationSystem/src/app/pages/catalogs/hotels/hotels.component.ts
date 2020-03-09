import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelsService } from '../../../services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: Array<Hotel>;
  cancelButtonHidden: boolean;
  saveButtonHidden: boolean;
  hotelExist: boolean;

  constructor(
    private _hotelsServices: HotelsService
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.hotels = this._hotelsServices.getAll();
  }

  restartScreen() {
    this.cancelButtonHidden = true;
    this.saveButtonHidden = true;
    this.hotelExist = false;
  }
}
