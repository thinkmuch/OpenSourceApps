import { Component, OnInit } from '@angular/core';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';

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
  originalName: string;

  constructor(
    private _cruisesServices: CruisesService
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
    if(this.cruiseSelected && this.cruiseSelected.id > 0) {
      this.cruiseSelected.name = this.originalName;
    }

    this.cruiseSelected = new Cruise();
    this.newButtonHidden = false;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.cruiseNameDisabled = true;
    this.originalName = "";
    this.cruiseExist = false;

    this.deselectAllRows();
  }

  edit(cruise: Cruise, row: HTMLElement) {
    this.enableEditControls();
    this.deselectAllRows();
    this.selectRow(row);
    
    this.cruiseSelected = cruise;
    this.originalName = cruise.name;
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
}
