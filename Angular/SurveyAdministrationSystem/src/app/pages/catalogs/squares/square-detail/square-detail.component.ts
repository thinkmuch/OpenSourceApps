import { Component, OnInit } from '@angular/core';
import { SquareServices } from 'src/app/services/square-services';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import { Site } from 'src/app/models/site';
import { SitesServices } from 'src/app/services/sites-service';

@Component({
  selector: 'app-square-detail',
  templateUrl: './square-detail.component.html',
  styleUrls: ['./square-detail.component.css']
})
export class SquareDetailComponent implements OnInit {

  hotels: Array<Hotel>;
  sites: Array<Site>;

  constructor(
    private _squareServices: SquareServices,
    private _hotelServices: HotelServices,
    private _sitesServices: SitesServices
  ) { }

  ngOnInit() {
    this.hotels = new Array<Hotel>();
    this.sites = new Array<Site>();

    this._squareServices.squareSelectedEvent.subscribe(squareId => {
      this.hotels = this._hotelServices.getAll();
      //this.sites = this._sitesServices.getAll();
    });
  }

  onClickSite(site: Site, checked: boolean) {
    if(checked) {
      this._squareServices.addSite(site);
    }
    else {
      this._squareServices.removeSite(site);
    }
  }

  onClickHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this._squareServices.addHotel(hotel);
    }
    else {
      this._squareServices.removeHotel(hotel);
    }
  }
}
