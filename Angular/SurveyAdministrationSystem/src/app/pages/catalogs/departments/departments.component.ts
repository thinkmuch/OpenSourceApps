import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  inputNameDisabled: boolean;
  newButtonHidden: boolean;
  departments: Array<Department>;
  departmentSelected: Department;

  constructor(
    private _departmentsServices: DepartmentsServices
  ) { }

  ngOnInit() {
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;

    this.departments = this._departmentsServices.getAll();
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
    this.departmentSelected = new Department();
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;

    let row = document.getElementsByClassName("selected");
    if(row.length > 0) {
      row[0].classList.remove("selected");
    }
  }

  edit(department: Department, row: HTMLElement) {
    this.departmentSelected = department;
    this.enableEditControls();

    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
    row.classList.add("selected");
  }
}
