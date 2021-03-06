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
  loading: boolean = false;
  squares: Array<Square> = new Array<Square>();
  squareSelected: Square = new Square();
  @ViewChild("squareName", {read: ElementRef}) squareName: ElementRef;
  
  constructor(
    private _squareServices: SquareServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restarScreen();
    this.getAllSquares();
  }

  getAllSquares() {
    this.loading = true;

    this._squareServices.getAll().subscribe(
      data => {
        this.squares = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
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
    let square = $event['Square'];
    let row = $event['Row'];

    this.squareSelected = JSON.parse(JSON.stringify(square));

    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  onClickRow($event) {
    let square: Square = $event["Square"];
    let row: HTMLElement = $event["Row"];

    this.restarScreen();
    this.selectRow(row);
    this._squareServices.squareSelectedEvent.emit(square.squareId);
  }

  deselectAllRows() {
    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
  }

  selectRow(row: HTMLElement) {
    this._renderer.addClass(row, "selected");
  }

  saveSquare(name: string) {
    this._squareServices.save(name).subscribe(
      () => {
        
        this.restarScreen();
        this.getAllSquares();
        
        Swal.fire({
          title: 'Plaza registrada',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
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
      if(this.squareSelected.squareId > 0) {
        this.squareSelected.name = name;
        this._squareServices.update(this.squareSelected);
      }
      else {
        this.saveSquare(name);
      }
    }
  }
}
