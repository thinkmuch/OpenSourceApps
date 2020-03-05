import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import Swal from 'sweetalert2';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';
import { MatCheckbox } from '@angular/material';

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
  areas: Array<Area>;
  areasSelected: Array<Area>;
  departmentSelected: Department;
  originalName: string;
  @ViewChild('departmentName', { read: ElementRef }) departmentName: ElementRef;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _renderer: Renderer2,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this.originalName = "";
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;
    this.areas = new Array<Area>();
    this.areasSelected = new Array<Area>();
    this.departmentSelected = new Department();
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
    if(this.departmentSelected.id > 0) {
      this.departmentSelected.name = this.originalName;
    }

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

  onClickRow(row: HTMLElement, department: Department) {
    this.selectRow(row);
    this.areasSelected = this._areasServices.getAreasByDepartmentId(department.id);
    this.areas = this._areasServices.getAllAreas();
  }

  isAreaAssigned(area: Area) {
    for(let i = 0; i < this.areasSelected.length; i++) {
      if(this.areasSelected[i].id == area.id) {
        return true;
      }
    }

    return false;
  }

  onClickArea(area: Area, checked: boolean) {
    if(checked) {
      this._departmentsServices.addArea(area, this.departmentSelected);
    }
    else {
      this._departmentsServices.removeArea(area, this.departmentSelected);
    }
  }

  edit(department: Department, row: HTMLElement) {
    this.departmentSelected = department;
    this.enableEditControls();
    this.selectRow(row);
    this.originalName = this.departmentSelected.name;
  }

  selectRow(currentCow: HTMLElement) {
    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
    currentCow.classList.add("selected");
  }

  onClickDepartmentName() {
    this._renderer.removeClass(this.departmentName.nativeElement, "alert-danger");
  }

  save(departmentName: string) {
    if(departmentName.length == 0) {
      this._renderer.addClass(this.departmentName.nativeElement, "alert-danger");

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del departamento',
        icon: 'warning'
      });
    }
    else {

    }
  }
}
