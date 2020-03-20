import { Component, OnInit } from '@angular/core';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { Area } from 'src/app/models/area';
import { Department } from 'src/app/models/department';
import { AreasServices } from 'src/app/services/areas-services';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  areas: Array<Area>;
  areasDepartment: Array<Area>;
  departmentSelected: Department;
  loading: boolean;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _areasServices: AreasServices
  ) { 
    this.areas = new Array<Area>();
  }

  ngOnInit() {
    this.loading = true;
    this._departmentsServices.deparmentEvent.subscribe(department => {
      this.departmentSelected = department;
      this.getAllAreasByDepartmentId(department);
    });
  }

  getAllAreasByDepartmentId(department: Department) {
    this._departmentsServices.getAreasByDepartmentId(department).subscribe(
      data => {
        this.areasDepartment = data;
        this.getAllAreas();
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  getAllAreas() {
    this._areasServices.getAll().subscribe(
      data => {
        this.areas = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  isAreaContained(area: Area) {
    return ((this.areasDepartment.find(a => a.areaId == area.areaId)) != undefined);
  }

  onClickArea(area: Area, checked: boolean) {

    console.log(checked);

    if(checked) {
      this._departmentsServices.addArea(area, this.departmentSelected);
    }
    else {
      this._departmentsServices.removeArea(area, this.departmentSelected);
    }
  }
}
