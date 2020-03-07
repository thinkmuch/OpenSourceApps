import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/app/models/department';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { DepartmentsServices } from 'src/app/services/departments.services';

@Component({
  selector: 'app-departments-table',
  templateUrl: './departments-table.component.html',
  styleUrls: ['./departments-table.component.css']
})
export class DepartmentsTableComponent implements OnInit {

  @Input("departmentsInput") departments: Array<Department>;
  @Output() editEvent: EventEmitter<{ department: Department, row: HTMLElement }>;
  @Output() clickRowEvent: EventEmitter<{ department: Department, row: HTMLElement }>;

  constructor(
    private _departmentsServices: DepartmentsServices
  ) { 
    this.editEvent = new EventEmitter<{department: Department, row: HTMLElement}>();
    this.clickRowEvent = new EventEmitter<{ department: Department, row: HTMLElement }>();
  }

  ngOnInit() {
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

  disable(department: Department) {
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
    this.editEvent.emit({ department: department, row: row });
  }

  onClickRow(row: HTMLElement, department: Department) {
    this.clickRowEvent.emit({ department: department, row: row });
  }
}
