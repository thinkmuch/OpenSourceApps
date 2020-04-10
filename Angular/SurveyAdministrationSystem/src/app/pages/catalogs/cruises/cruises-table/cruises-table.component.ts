import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cruise } from 'src/app/models/cruise';
import Swal from 'sweetalert2';
import { CruisesService } from 'src/app/services/cruises.service';
import { Status } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-cruises-table',
  templateUrl: './cruises-table.component.html',
  styleUrls: ['./cruises-table.component.css']
})
export class CruisesTableComponent implements OnInit {

  @Input("cruisesInput") cruises: Array<Cruise>;
  @Output() editEvent: EventEmitter<{ cruise: Cruise, row: HTMLElement }> = new EventEmitter<{cruise: Cruise, row: HTMLElement}>();
  @Output() clickRowEvent: EventEmitter<{ cruise: Cruise, row: HTMLElement }> = new EventEmitter<{cruise: Cruise, row: HTMLElement}>();

  constructor(
    private _cruisesServices: CruisesService
  ) { }

  ngOnInit() { }

  enable(cruise: Cruise) {
    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el crucero ${cruise.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        cruise.statusId = Status.Active;
        this._cruisesServices.update(cruise).subscribe(
          data => {
            Swal.fire({
              title: 'Crucero activado',
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

  disable(cruise: Cruise) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el crucero ${cruise.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        cruise.statusId = Status.Inactive;
        this._cruisesServices.update(cruise).subscribe(
          data => {
            Swal.fire({
              title: 'Crucero desactivado',
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

  edit(cruise: Cruise, row: HTMLElement) {
    this.editEvent.emit({ 
      cruise: cruise, 
      row: row
    });
  }

  onClickRow(cruise: Cruise, row: HTMLElement) {
    this.clickRowEvent.emit({
      cruise: cruise,
      row: row
    });
  }
}
