import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import Swal from 'sweetalert2';
import { Alerts } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  cancelButtonHidden: boolean;
  saveButtonHidden: boolean;
  hotelNameDisabled: boolean;
  shortNameDisabled: boolean;
  newButtonHidden: boolean;
  hotelExist: boolean = false;
  hotels: Array<Hotel> = new Array<Hotel>();
  hotelSelected: Hotel = new Hotel();
  loading: boolean = true;
  @ViewChild("hotelName", { read: ElementRef }) hotelName: ElementRef;
  
  constructor(
    private _hotelServices: HotelServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllHotels();
  }

  getAllHotels() {
    this.loading = true;
    this._hotelServices.getAll().subscribe(
    data => {
      this.hotels = data;
      this.loading = false;
    },
    error => {
      console.log(error);
      this.loading = false;
    });
  }

  restartScreen() {
    this.cancelButtonHidden = true;
    this.saveButtonHidden = true;
    this.hotelNameDisabled = true;
    this.shortNameDisabled = true;
    this.newButtonHidden = false;
    this.hotelExist = false;
    this.hotelSelected = new Hotel();
    this.deselectAllRows();
    this._renderer.removeClass(this.hotelName.nativeElement, Alerts.Danger);
  }

  edit($event) {
    let hotel = $event['Hotel'];
    let row = $event['Row'];

    this.hotelSelected = JSON.parse(JSON.stringify(hotel));

    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  onClickRow($event) {
    let hotel: Hotel = $event['Hotel'];
    let row: HTMLElement = $event['Row'];

    this.restartScreen();
    this.selectRow(row);
    this._hotelServices.hotelSelectedEvent.emit(hotel.hotelId);
  }

  enableEditControls() {
    this.hotelNameDisabled = false;
    this.shortNameDisabled = false;
    this.cancelButtonHidden = false;
    this.saveButtonHidden = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restartScreen();
  }

  deselectAllRows() {
    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
  }

  selectRow(row: HTMLElement) {
    row.classList.add("selected");
  }

  onClickHotelName() {
    this._renderer.removeClass(this.hotelName.nativeElement, Alerts.Danger);
  }

  saveHotel(name: string) {
    this._hotelServices.save(name).subscribe(
      () => {
        this.restartScreen();
        this.getAllHotels();

        Swal.fire({
          title: 'Hotel registrado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  update(hotel: Hotel) {
    this._hotelServices.update(hotel).subscribe(
      () => {
        this.restartScreen();
        this.getAllHotels();

        Swal.fire({
          title: 'Hotel actualizado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  save(name: string) {
    if(name == undefined || name.length == 0) {
      this._renderer.addClass(this.hotelName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del hotel',
        icon: 'warning'
      });
    }
    else {
      if(this.hotelSelected.hotelId > 0) {
        this.update(this.hotelSelected);
      }
      else {
        this.saveHotel(name);
      }
    }
  }
}
