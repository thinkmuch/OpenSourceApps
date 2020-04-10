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

  hotels: Array<Hotel> = new Array<Hotel>();
  hotelsBySquare: Array<Hotel> = new Array<Hotel>();
  sites: Array<Site> = new Array<Site>();
  squareIdSelected: number = 0;
  loadingHotels: boolean = false;

  constructor(
    private _squareServices: SquareServices,
    private _hotelServices: HotelServices,
    private _sitesServices: SitesServices
  ) { }

  ngOnInit() {
    this.hotels = new Array<Hotel>();
    this.sites = new Array<Site>();

    this._squareServices.squareSelectedEvent.subscribe(squareId => {
      this.squareIdSelected = squareId;
      this.getHotels();
      this.getAllSites();
    });
  }

  getAllHotels() {
    this._hotelServices.getAll().subscribe(
      data => {
        this.hotels = data;
        this.loadingHotels = false;
      },
      error => {
        console.log(error);
        this.loadingHotels = false;
      }
    );
  }

  getHotels() {
    this.loadingHotels = true;
    this.hotelsBySquare = new Array<Hotel>();
    this.hotels = new Array<Hotel>();

    this._hotelServices.getHotelsBySquareId(this.squareIdSelected).subscribe(
      data => {
        this.hotelsBySquare = data;
        this.getAllHotels();
      },
      error => {
        console.log(error);
        this.loadingHotels = false;
      }
    );
  }

  isHotelContained(hotel: Hotel) {
    return ((this.hotelsBySquare.find(h => h.hotelId == hotel.hotelId)) != undefined);
  }

  getAllSites() {
    this._sitesServices.getAll().subscribe(
      data => {
        this.sites = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onClickSite(site: Site, checked: boolean) {
    if(checked) {
      this._squareServices.addSite(site);
    }
    else {
      this._squareServices.removeSite(site);
    }
  }

  addHotel(squareId: number, hotelId: number) {
    this._squareServices.addHotel(squareId, hotelId).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeHotel(squareId: number, hotelId: number) {
    this._squareServices.removeHotel(squareId, hotelId).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickHotel(hotel: Hotel, checked: boolean) {
    if(checked) {
      this.addHotel(this.squareIdSelected, hotel.hotelId);
    }
    else {
      this.removeHotel(this.squareIdSelected, hotel.hotelId);
    }
  }
}
