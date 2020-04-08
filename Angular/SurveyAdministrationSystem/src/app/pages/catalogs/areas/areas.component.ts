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
  areaSelected: Area  = new Area();
  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  inputNameDisabled: boolean;
  newButtonHidden: boolean;
  areaExist: boolean;
  loading: boolean;
  @ViewChild('areaName', { read: ElementRef }) areaName: ElementRef;

  constructor(
    private _areasServices: AreasServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllAreas();
  }

  getAllAreas() {
    this.loading = true;

    this._areasServices.getAll().subscribe(
      data => {
        this.areas = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
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
    if(name.length > 0 && this.areas != undefined && this.areas.length > 0) {
      this.areaExist = (this.areas.find(a => a.name.trim().toLowerCase() == name.trim().toLowerCase()) != undefined);
    }
    else {
      this.areaExist = false;
    }
  }

  edit($event) {
    let area = $event['Area'];
    let row = $event['Row'];

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
    this._renderer.addClass(row, "selected");
  }

  onClickAreaName() {
    this._renderer.removeClass(this.areaName.nativeElement, Alerts.Danger);
  }

  update(area: Area) {
    this._areasServices.update(area).subscribe(
      data => {
        Swal.fire({
          title: 'Area actualizada',
          icon: 'success'
        });
        this.getAllAreas();
        this.restartScreen();
      },
      error => {
        console.log(error);
      }
    );
  }

  saveArea(name: string) {
    this._areasServices.save(name).subscribe(
      data => {
        this.restartScreen();
        this.getAllAreas();

        Swal.fire({
          title: 'Area registrada',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  save(name: string) {
    if(name == undefined || name.trim().length == 0 || this.areaExist) {
      this._renderer.addClass(this.areaName.nativeElement, Alerts.Danger);
      
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del área',
        icon: 'warning'
      });
    }
    else {
      if(this.areaSelected.areaId > 0) {
        this.update(this.areaSelected);
      }
      else {
        this.saveArea(name);
      }
    }
  }

  remove($event) {
    let area: Area = $event["Area"];
    
    Swal.fire({
      title: 'Eliminar',
      text: `¿Seguro que desea eliminar el área ${area.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        this._areasServices.remove(area).subscribe(
          data => {
            this.getAllAreas();

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
}