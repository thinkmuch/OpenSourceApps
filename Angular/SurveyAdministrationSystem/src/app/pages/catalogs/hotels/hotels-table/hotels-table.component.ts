import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { Department } from 'src/app/models/department';
import { HotelEmitter } from 'src/app/models/emitters/hotel-emitter';

@Component({
  selector: 'app-hotels-table',
  templateUrl: './hotels-table.component.html',
  styleUrls: ['./hotels-table.component.css']
})
export class HotelsTableComponent implements OnInit {

  @Input('hotelsInput') hotels: Array<Hotel>;
  @Output() editEvent: EventEmitter<HotelEmitter> = new EventEmitter<HotelEmitter>();
  @Output() clickRowEvent: EventEmitter<HotelEmitter> = new EventEmitter<HotelEmitter>();
  @Output() deleteEvent: EventEmitter<HotelEmitter> = new EventEmitter<HotelEmitter>();
  departments: Array<Department> = new Array<Department>();
  
  constructor(
    private _hotelServices: HotelServices,
  ) { }

  ngOnInit() {
  }

  disable(hotel: Hotel) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el hotel ${hotel.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        hotel.statusId = Status.Inactive;
        this._hotelServices.update(hotel).subscribe(
          () => {
            Swal.fire({
              title: 'Hotel desactivado',
              icon: 'success'
            });
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  enable(hotel: Hotel) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea activar el hotel ${hotel.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        hotel.statusId = Status.Active;
        this._hotelServices.update(hotel).subscribe(
          () => {
            Swal.fire({
              title: 'Hotel activado',
              icon: 'success'
            });
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  delete(hotel: Hotel, row: HTMLElement) {
    let hotelSelected = new HotelEmitter(hotel, row);
    this.deleteEvent.emit(hotelSelected);
  }

  edit(hotel: Hotel, row: HTMLElement) {
    let hotelSelected = new HotelEmitter(hotel, row);
    this.editEvent.emit(hotelSelected);
  }

  onClickRow(hotel: Hotel, row: HTMLElement) {
    let hotelSelected = new HotelEmitter(hotel, row);
    this.clickRowEvent.emit(hotelSelected);
  }
}
