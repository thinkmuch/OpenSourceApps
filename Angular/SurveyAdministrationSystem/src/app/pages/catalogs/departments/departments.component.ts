import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import Swal from 'sweetalert2';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';
import { Status, Alerts } from 'src/app/enums/class-enum';

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

    let selected = document.getElementsByClassName("selected");
    if(selected.length > 0) {
      selected[0].classList.remove("selected");
    }

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  onClickRow(row: HTMLElement, department: Department) {
    this.selectRow(row);
    this.areasSelected = this._areasServices.getAreasByDepartmentId(department.id);
    this.areas = this._areasServices.getAll();
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

  enable(department: Department) {
    
    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el departamento ${department.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        department.status = Status.Active;
        this._departmentsServices.update(department);
        
        Swal.fire({
          title: 'Departamento activado',
          icon: 'success'
        });
      }
    });
  }

  disabled(department: Department) {
    
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el departamento ${department.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        department.status = Status.Inactive;
        this._departmentsServices.update(department);
        
        Swal.fire({
          title: 'Departamento desactivado',
          icon: 'success'
        });
      }
    });
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
    this._renderer.removeClass(this.departmentName.nativeElement, Alerts.Danger);
  }

  save(departmentName: string) {
    if(departmentName.length == 0) {
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
