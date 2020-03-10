import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-hotels-table',
  templateUrl: './hotels-table.component.html',
  styleUrls: ['./hotels-table.component.css']
})
export class HotelsTableComponent implements OnInit {

  @Input('hotelsInput') hotels: Array<Hotel>;
  @Output() editEvent: EventEmitter<{hotel: Hotel, row: HTMLElement}>;
  @Output() clickRowEvent: EventEmitter<{hotel: Hotel, row: HTMLElement}>;
  departments: Array<Department>;
  
  constructor(
    private _hotelServices: HotelServices,
  ) { 
    this.editEvent = new EventEmitter<{hotel: Hotel, row: HTMLElement}>();
    this.clickRowEvent = new EventEmitter<{hotel: Hotel, row: HTMLElement}>();
  }

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

        hotel.status = Status.Inactive;
        this._hotelServices.update(hotel);
        
        Swal.fire({
          title: 'Hotel desactivado',
          icon: 'success'
        });
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

        hotel.status = Status.Active;
        this._hotelServices.update(hotel);
        
        Swal.fire({
          title: 'Hotel activado',
          icon: 'success'
        });
      }
    });
  }

  edit(hotel: Hotel, row: HTMLElement) {
    this.editEvent.emit({
      hotel: hotel,
      row: row
    });
  }

  onClickRow(hotel: Hotel, row: HTMLElement) {
    this.clickRowEvent.emit({
      hotel: hotel,
      row: row
    });
  }
}
