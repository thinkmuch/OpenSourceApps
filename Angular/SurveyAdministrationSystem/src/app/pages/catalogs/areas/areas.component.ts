import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Area } from 'src/app/models/area';
import { AreasServices } from 'src/app/services/areas-services';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  areas: Array<Area>;
  areaSelected: Area;
  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  inputNameDisabled: boolean;
  newButtonHidden: boolean;
  @ViewChild('areaName', { read: ElementRef }) areaName: ElementRef;

  constructor(
    private _areasServices: AreasServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;

    this.areaSelected = new Area();

    this.areas = this._areasServices.getAllAreas();
  }

  enableEditControls() {
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.inputNameDisabled = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restartScreen();
  }

  restartScreen() {
    this.areaSelected = new Area();
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;

    let row = document.getElementsByClassName("selected");
    if(row.length > 0) {
      row[0].classList.remove("selected");
    }
  }

  edit(area: Area, row: HTMLElement) {
    this.areaSelected = area;
    this.enableEditControls();

    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
    row.classList.add("selected");
  }

  onClickAreaName() {
    this._renderer.removeClass(this.areaName.nativeElement, "alert-danger");
  }

  save(name: string) {
    if(name == undefined) {
      this._renderer.addClass(this.areaName.nativeElement, "alert-danger");
      
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del área',
        icon: 'warning'
      });
    }
    else {
      this.restartScreen();

      Swal.fire({
        title: 'Area registrada',
        icon: 'success'
      });
    }
  }

  enable(area: Area) {

    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el idioma ${area.area}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        area.status = Status.Active;
        this._areasServices.update(area);

        Swal.fire({
          title: 'Area activada',
          icon: 'success'
        });
      }
    });
  }

  disable(area: Area) {

    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el área ${area.area}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        area.status = Status.Inactive;
        this._areasServices.update(area);
        
        Swal.fire({
          title: 'Area desactivada',
          icon: 'success'
        });
      }
    });
  }
}