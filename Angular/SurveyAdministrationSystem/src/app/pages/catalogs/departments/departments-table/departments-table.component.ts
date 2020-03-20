import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import Swal from 'sweetalert2';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { Status } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {

  @Input("departmentsInpud") departments: Array<Department>;
  @Output() editEvent: EventEmitter<{department: Department, row: HTMLElement}>;
  @Output() clickRowEvent: EventEmitter<{department: Department, row: HTMLElement}>;

  constructor(
    private _departmentsServices: DepartmentsServices
  ) { 
    this.editEvent = new EventEmitter<{department: Department, row: HTMLElement}>();
    this.clickRowEvent = new EventEmitter<{department: Department, row: HTMLElement}>();
  }

  ngOnInit() {
  }

  onClickRow(row: HTMLElement, department: Department) {
    this.clickRowEvent.emit({
      department: department,
      row: row
    });
  }

  edit(department: Department, row: HTMLElement) {
    this.editEvent.emit({
      department: department,
      row: row
    });
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
          data => {
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
          data => {
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
