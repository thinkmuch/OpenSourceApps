import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Area } from 'src/app/models/area';
import { AreasServices } from 'src/app/services/areas-services';
import Swal from 'sweetalert2';

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
  }

  edit(area: Area, row: HTMLElement) {
    this.areaSelected = area;
    this.enableEditControls();
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
}
