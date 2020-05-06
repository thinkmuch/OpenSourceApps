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
  cruiseDetailHidden: boolean;
  loading: boolean;
  @ViewChild("cruiseName", { read: ElementRef }) cruiseName: ElementRef;

  constructor(
    private _cruisesServices: CruisesService,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllCruises();
  }

  getAllCruises() {
    this.loading = true;
    this._cruisesServices.getAll().subscribe(
      data => {
        this.cruises = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
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
    this.cruiseDetailHidden = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  onClickCruiseName() {
    this._renderer.removeClass(this.cruiseName.nativeElement, Alerts.Danger);
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

  onClickRow($event) {
    let row = $event['Row'];
    let cruise = $event['Cruise'];

    this.restartScreen();
    this.selectRow(row);
    this.cruiseDetailHidden = true;
    this._cruisesServices.cruiseSelectedEvent.emit(cruise.cruiseId);
  }

  edit($event) {
    let cruise = $event['Cruise'];
    let row = $event['Row'];

    this.cruiseDetailHidden = true;
    this.cruiseSelected = JSON.parse(JSON.stringify(cruise));
    
    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
  }

  saveCruise(name: string) {
    this._cruisesServices.save(name).subscribe(
      () => {
        this.restartScreen();
        this.getAllCruises();
        Swal.fire({
          title: 'Crucero registrado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCruise(cruise: Cruise) {
    this._cruisesServices.update(cruise).subscribe(
      () => {
        this.restartScreen();
        this.getAllCruises();
        
        this._cruisesServices.cruiseSelectedEvent.emit(null);
        Swal.fire({
          title: 'Crucero actualizado',
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
      this._renderer.addClass(this.cruiseName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del crucero',
        icon: 'warning'
      });
    }
    else {
      if(this.cruiseSelected.cruiseId > 0) {
        this.updateCruise(this.cruiseSelected);
      }
      else {
        this.saveCruise(name);
      }
    }
  }
}
