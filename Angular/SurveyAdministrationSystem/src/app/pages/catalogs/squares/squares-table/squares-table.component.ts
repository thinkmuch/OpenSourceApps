import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { SquareEmitter } from 'src/app/models/emitters/square-emitter';

@Component({
  selector: 'app-squares-table',
  templateUrl: './squares-table.component.html',
  styleUrls: ['./squares-table.component.css']
})
export class SquaresTableComponent implements OnInit {

  @Input("squaresInpue") squares: Array<Square>;
  @Output() editEvent: EventEmitter<SquareEmitter> = new EventEmitter<SquareEmitter>();
  @Output() clickRowEvent: EventEmitter<SquareEmitter> = new EventEmitter<SquareEmitter>();
  
  constructor(
    private _squareServices: SquareServices
  ) { }

  ngOnInit() { }

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
        this._squareServices.update(square).subscribe(
          data => {
            Swal.fire({
              title: 'Plaza desactivada',
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
        this._squareServices.update(square).subscribe(
          data => {
            Swal.fire({
              title: 'Plaza activada',
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

  edit(square: Square, row: HTMLElement) {
    let squareSelected = new SquareEmitter(square, row);
    this.editEvent.emit(squareSelected);
  }

  onClickRow(square, row) {
    let squareSelected = new SquareEmitter(square, row);
    this.clickRowEvent.emit(squareSelected);
  }
}
