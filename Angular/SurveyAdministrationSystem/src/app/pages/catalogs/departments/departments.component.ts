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
  departmentSelected: Department = new Department();
  loading: boolean;
  @ViewChild('departmentName', { read: ElementRef }) departmentName: ElementRef;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _renderer: Renderer2,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllDepartments();
  }

  getAllDepartments() {
    this.loading = true;

    this._departmentsServices.getAll().subscribe(
      data => {
        this.departments = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  restartScreen() {
    this.departmentSelected = new Department();
    this.areasSelected = new Array<Area>();
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
    if(name.length > 0 && this.departments != undefined && this.departments.length > 0) {
      this.departmentExist = ((this.departments.find(d => d.name.trim().toUpperCase() == name.trim().toUpperCase())) != undefined)
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
    let department = $event["Department"];
    let row = $event["Row"];
    
    this.restartScreen();
    this.selectRow(row);
    this._departmentsServices.deparmentEvent.emit(department);
  }

  edit($event) {
    let department = $event["Department"];
    let row = $event["Row"];

    this.departmentSelected = JSON.parse(JSON.stringify(department));
    this.enableEditControls();
    this.selectRow(row);
  }

  selectRow(row: HTMLElement) {
    this._renderer.addClass(row, "selected");
  }

  onClickDepartmentName() {
    this._renderer.removeClass(this.departmentName.nativeElement, Alerts.Danger);
  }

  saveDepartment(name: string) {
    this._departmentsServices.save(name).subscribe(
      () => {
        this.restartScreen();
        this.getAllDepartments();
        Swal.fire({
          title: 'Departamento registrado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  update(department: Department) {
    this._departmentsServices.update(department).subscribe(
      () => {
        this.getAllDepartments();
        this._departmentsServices.deparmentEvent.emit(null);
        Swal.fire({
          title: 'Departamento actualizado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  save(name: string) {
    if(name.length == 0 || this.departmentExist) {
      this._renderer.addClass(this.departmentName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del departamento',
        icon: 'warning'
      });
    }
    else {
      if(this.departmentSelected.departmentId > 0) {
        this.update(this.departmentSelected);
      }
      else {
        this.saveDepartment(name);
      }
    }
  }

  remove($event) {
    let department = $event["Department"];

    Swal.fire({
      title: 'Eliminar',
      text: `¿Seguro que desea eliminar el departamento ${department.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {

      if(response.value) {
        this._departmentsServices.remove(department).subscribe(
        () => {
          this.getAllDepartments();
          
          Swal.fire({
            title: 'Departamento eliminado',
            icon: 'success'
          });
        },
        error => {
          console.log(error);
        });
      }
    });
  }
}
