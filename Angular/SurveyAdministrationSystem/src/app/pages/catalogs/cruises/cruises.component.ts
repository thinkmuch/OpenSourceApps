import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';
import Swal from 'sweetalert2';
import { Alerts } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-cruises',
  templateUrl: './cruises.component.html',
  styleUrls: ['./cruises.component.css']
})
export class CruisesComponent implements OnInit {

  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  newButtonHidden: boolean;
  cruiseExist: boolean;
  cruiseNameDisabled: boolean;
  cruises: Array<Cruise>;
  cruiseSelected: Cruise;
  @ViewChild("cruiseName", { read: ElementRef }) cruiseName: ElementRef;

  constructor(
    private _cruisesServices: CruisesService,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.cruises = this._cruisesServices.getAll();
  }

  enableEditControls() {
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.newButtonHidden = true;
    this.cruiseNameDisabled = false;
  }

  cancel() {
    this.restartScreen();
  }

  restartScreen() {
    this.cruiseSelected = new Cruise();
    this.newButtonHidden = false;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.cruiseNameDisabled = true;
    this.cruiseExist = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  onClickCruiseName() {
    this._renderer.removeClass(this.cruiseName.nativeElement, Alerts.Danger);
  }

  edit(cruise: Cruise, row: HTMLElement) {
    this.cruiseSelected = JSON.parse(JSON.stringify(cruise));
    
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

  save(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.cruiseName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del crucero',
        icon: 'warning'
      });
    }
    else {
      if(this.cruiseSelected.id > 0) {
        this._cruisesServices.update(this.cruiseSelected);
      }
      else {
        this._cruisesServices.save(name);
      }

      this.cruises = this._cruisesServices.getAll();
      this.restartScreen();

      Swal.fire({
        title: 'Crucero registrado',
        icon: 'success'
      });
    }
  }
}