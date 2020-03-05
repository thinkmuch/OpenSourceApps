import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import Swal from 'sweetalert2';

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
  originalName: string;
  @ViewChild('departmentName', { read: ElementRef }) departmentName: ElementRef;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;
    this.originalName = "";
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

  onClickRow(row: HTMLElement) {
    this.selectRow(row);
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
