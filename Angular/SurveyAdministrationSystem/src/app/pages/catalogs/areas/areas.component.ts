import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Area } from 'src/app/models/area';
import { AreasServices } from 'src/app/services/areas-services';
import Swal from 'sweetalert2';
import { Status, Alerts } from 'src/app/enums/class-enum';

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
  areaExist: boolean;
  @ViewChild('areaName', { read: ElementRef }) areaName: ElementRef;

  constructor(
    private _areasServices: AreasServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.areas = this._areasServices.getAll();
  }

  restartScreen() {
    this.areaSelected = new Area();
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;
    this.areaExist = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
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

  onKeyUpAreaName(name: string) {
    if(name.length > 0) {
      this.areaExist = this._areasServices.exist(name);
    }
    else {
      this.areaExist = false;
    }
  }

  edit(area: Area, row: HTMLElement) {
    this.areaSelected = JSON.parse(JSON.stringify(area));
    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
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

  onClickAreaName() {
    this._renderer.removeClass(this.areaName.nativeElement, Alerts.Danger);
  }

  save(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.areaName.nativeElement, Alerts.Danger);
      
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del área',
        icon: 'warning'
      });
    }
    else {
      if(this.areaSelected.id > 0) {
        this._areasServices.update(this.areaSelected);
      }
      else {
        this._areasServices.save(name);
      }
      
      this.areas = this._areasServices.getAll();
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
      text: `¿Seguro que desea activar el idioma ${area.name}?`,
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
      text: `¿Seguro que desea desactivar el área ${area.name}?`,
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