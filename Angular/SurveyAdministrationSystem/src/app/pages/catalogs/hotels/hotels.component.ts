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
  hotelExist: boolean;
  hotels: Array<Hotel>;
  hotelSelected: Hotel;
  @ViewChild("hotelName", { read: ElementRef }) hotelName: ElementRef;
  
  constructor(
    private _hotelServices: HotelServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.hotels = this._hotelServices.getAll();
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
    let hotel = $event['hotel'];
    let row = $event['row'];

    this.hotelSelected = JSON.parse(JSON.stringify(hotel));

    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  onClickRow($event) {
    let hotel: Hotel = $event['hotel'];
    let row: HTMLElement = $event['row'];

    this.restartScreen();
    this.selectRow(row);
    this._hotelServices.hotelSelectedEvent.emit(hotel.id);
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
      if(this.hotelSelected.id > 0) {
        this.hotelSelected.name = name;
        this._hotelServices.update(this.hotelSelected);
      }
      else {
        this._hotelServices.save(name);
      }

      this.hotels = this._hotelServices.getAll();
      this.restartScreen();

      Swal.fire({
        title: 'Hotel registrado',
        icon: 'success'
      });
    }
  }
}
