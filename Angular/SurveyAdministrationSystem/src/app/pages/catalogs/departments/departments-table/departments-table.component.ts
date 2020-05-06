import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import Swal from 'sweetalert2';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { Status } from 'src/app/enums/class-enum';
import { DepartmentEmitter } from 'src/app/models/emitters/department-emitter';

@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {

  @Input("departmentsInput") departments: Array<Department> = new Array<Department>();
  @Output() editEvent: EventEmitter<DepartmentEmitter> = new EventEmitter<DepartmentEmitter>();
  @Output() clickRowEvent: EventEmitter<DepartmentEmitter> = new EventEmitter<DepartmentEmitter>();
  @Output() removeEvent: EventEmitter<DepartmentEmitter> = new EventEmitter<DepartmentEmitter>();

  constructor(
    private _departmentsServices: DepartmentsServices
  ) { }

  ngOnInit() {
  }

  onClickRow(row: HTMLElement, department: Department) {
    let departmentSelected = new DepartmentEmitter(department, row);
    this.clickRowEvent.emit(departmentSelected);
  }

  edit(department: Department, row: HTMLElement) {
    let departmentSelected = new DepartmentEmitter(department, row);
    this.editEvent.emit(departmentSelected);
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

        department.statusId = Status.Active;
        this._departmentsServices.update(department).subscribe(
          () => {
            Swal.fire({
              title: 'Departamento activado',
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

  remove(department: Department) {
    let departmentSelected = new DepartmentEmitter(department, null);
    this.removeEvent.emit(departmentSelected);
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

        department.statusId = Status.Inactive;
        this._departmentsServices.update(department).subscribe(
          () => {
            Swal.fire({
              title: 'Departamento desactivado',
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
