import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-squares-table',
  templateUrl: './squares-table.component.html',
  styleUrls: ['./squares-table.component.css']
})
export class SquaresTableComponent implements OnInit {

  @Input("squaresInpue") squares: Array<Square>;
  @Output() editEvent: EventEmitter<{square: Square, row: HTMLElement}>;
  @Output() clickRowEvent: EventEmitter<{square: Square, row: HTMLElement}>;
  
  constructor(
    private _squareServices: SquareServices
  ) { 
    this.editEvent = new EventEmitter<{square: Square, row: HTMLElement}>();
    this.clickRowEvent = new EventEmitter<{square: Square, row: HTMLElement}>();
  }

  ngOnInit() {
    
  }

  disable(square: Square) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar la plaza ${square.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        square.statusId = Status.Inactive;
        this._squareServices.update(square);
        
        Swal.fire({
          title: 'Plaza desactivada',
          icon: 'success'
        });
      }
    });
  }

  enable(square: Square) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea activar la plaza ${square.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        square.statusId = Status.Active;
        this._squareServices.update(square);
        
        Swal.fire({
          title: 'Plaza activada',
          icon: 'success'
        });
      }
    });
  }

  edit(square: Square, row: HTMLElement) {
    this.editEvent.emit({
      square: square,
      row: row
    });
  }

  onClickRow(square, row) {
    this.clickRowEvent.emit({
      square: square,
      row: row
    });
  }
}
