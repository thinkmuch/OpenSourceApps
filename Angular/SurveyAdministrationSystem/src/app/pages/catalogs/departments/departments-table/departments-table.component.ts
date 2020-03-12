import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private _departmentsServices: DepartmentsServices
  ) { }

  ngOnInit() {
  }

  onClickRow(row: HTMLElement, department: Department) {

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

  }
}
