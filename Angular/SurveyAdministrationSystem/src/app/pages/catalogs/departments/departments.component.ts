import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import Swal from 'sweetalert2';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';
import { Alerts } from 'src/app/enums/class-enum';

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
  departmentExist: boolean;
  departments: Array<Department>;
  areasSelected: Array<Area>;
  departmentSelected: Department;
  @ViewChild('departmentName', { read: ElementRef }) departmentName: ElementRef;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _renderer: Renderer2,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.areasSelected = new Array<Area>();
    this.departmentSelected = new Department();
    this.departments = this._departmentsServices.getAll();
  }

  restartScreen() {
    this.departmentSelected = new Department();
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;
    this.departmentExist = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  onKeyUpDepartmentName(name: string) {
    if(name.length > 0) {
      this.departmentExist = this._departmentsServices.exist(name);
    }
    else {
      this.departmentExist = false;
    }
  }

  deselectAllRows() {
    let selected = document.getElementsByClassName("selected");
    if(selected.length > 0) {
      selected[0].classList.remove("selected");
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

  onClickRow($event) {
    let department = $event["department"];
    let row = $event["row"];
    
    this.restartScreen();
    this.selectRow(row);
    this.areasSelected = this._areasServices.getAreasByDepartmentId(department.id);
    this._departmentsServices.deparmentEvent.emit(department);
  }

  edit($event) {
    let department = $event["department"];
    let row = $event["row"];

    this.departmentSelected = JSON.parse(JSON.stringify(department));
    this.enableEditControls();
    this.selectRow(row);
  }

  selectRow(row: HTMLElement) {
    row.classList.add("selected");
  }

  onClickDepartmentName() {
    this._renderer.removeClass(this.departmentName.nativeElement, Alerts.Danger);
  }

  save(name: string) {
    if(name.length == 0) {
      this._renderer.addClass(this.departmentName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del departamento',
        icon: 'warning'
      });
    }
    else {
      if(this.departmentSelected.id > 0) {
        this._departmentsServices.update(this.departmentSelected);
      }
      else {
        this._departmentsServices.save(name);
      }
      
      this.departments = this._departmentsServices.getAll();
      this.restartScreen();
      
      Swal.fire({
        title: 'Departamento registrado',
        icon: 'success'
      });
    }
  }
}
