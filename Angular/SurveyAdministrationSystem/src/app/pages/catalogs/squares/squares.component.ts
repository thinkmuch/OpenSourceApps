import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import Swal from 'sweetalert2';
import { Alerts } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent implements OnInit {

  cancelButtonHidden: boolean;
  saveButonHidden: boolean;
  squareNameDisabled: boolean;
  squareExist: boolean;
  newButtonHidden: boolean;
  squares: Array<Square>;
  squareSelected: Square;
  @ViewChild("squareName", {read: ElementRef}) squareName: ElementRef;
  
  constructor(
    private _squareServices: SquareServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restarScreen();
  }

  restarScreen() {
    this.cancelButtonHidden = true;
    this.saveButonHidden = true;
    this.squareNameDisabled = true;
    this.newButtonHidden = false;
    this.squareExist = false;
    this.squareSelected = new Square();
    this._renderer.removeClass(this.squareName.nativeElement, Alerts.Danger);
    this.deselectAllRows();
    this.squares = this._squareServices.getAllSquares();
  }

  onClickSquareName() {
    this._renderer.removeClass(this.squareName.nativeElement, Alerts.Danger);
  }

  enableEditControls() {
    this.cancelButtonHidden = false;
    this.saveButonHidden = false;
    this.squareNameDisabled = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restarScreen();
  }

  edit($event) {
    let square = $event['square'];
    let row = $event['row'];

    this.squareSelected = JSON.parse(JSON.stringify(square));

    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  onClickRow($event) {
    let square: Square = $event["square"];
    let row: HTMLElement = $event["row"];

    this.restarScreen();
    this.selectRow(row);
    this._squareServices.squareSelectedEvent.emit(square.id);
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

  save(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.squareName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre de la plaza',
        icon: 'warning'
      });
    }
    else {
      if(this.squareSelected.id > 0) {
        this.squareSelected.name = name;
        this._squareServices.update(this.squareSelected);
      }
      else {
        this._squareServices.save(name);
      }

      this.squares = this._squareServices.getAllSquares();
      this.restarScreen();
    }
  }
}
