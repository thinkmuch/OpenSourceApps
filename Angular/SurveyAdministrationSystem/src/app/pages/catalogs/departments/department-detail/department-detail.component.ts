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
  departmentSelected: Department;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this.areas = this._areasServices.getAll();
  }

  onClickArea(area: Area, checked: boolean) {
    if(checked) {
      this._departmentsServices.addArea(area, this.departmentSelected);
    }
    else {
      this._departmentsServices.removeArea(area, this.departmentSelected);
    }
  }
}
