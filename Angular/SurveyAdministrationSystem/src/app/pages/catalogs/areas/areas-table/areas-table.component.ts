import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Area } from 'src/app/models/area';
import Swal from 'sweetalert2';
import { AreasServices } from 'src/app/services/areas-services';
import { Status } from 'src/app/enums/class-enum';
import { AreaEmitter } from 'src/app/models/emitters/area-emitter';

@Component({
  selector: 'app-areas-table',
  templateUrl: './areas-table.component.html',
  styleUrls: ['./areas-table.component.css']
})
export class AreasTableComponent implements OnInit {

  @Input("areasInput") areas: Array<Area>;
  @Output() editEvent: EventEmitter<AreaEmitter> = new EventEmitter<AreaEmitter>();
  @Output() removeEvent: EventEmitter<AreaEmitter> = new EventEmitter<AreaEmitter>();

  constructor(
    private _areasServices: AreasServices
  ) { }

  ngOnInit() { }

  enable(area: Area) {
    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el idioma ${area.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        area.statusId = Status.Active;
        this._areasServices.update(area).subscribe(
          () => {
            Swal.fire({
              title: 'Area activada',
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

  disable(area: Area) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el área ${area.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        area.statusId = Status.Inactive;
        this._areasServices.update(area).subscribe(
          () => {
            Swal.fire({
              title: 'Area desactivada',
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

  edit(area: Area, row: HTMLElement) {
    let areaSelected = new AreaEmitter(area, row);
    this.editEvent.emit(areaSelected);
  }

  remove(area: Area) {
    let areaSelected = new AreaEmitter(area, null);
    this.removeEvent.emit(areaSelected);
  }
}
