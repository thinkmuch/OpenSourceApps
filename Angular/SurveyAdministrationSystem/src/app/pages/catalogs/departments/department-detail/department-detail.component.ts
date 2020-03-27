import { Component, OnInit, Input } from '@angular/core';
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

  areas: Array<Area> = new Array<Area>();
  areasDepartment: Array<Area>;
  departmentIdSelected: number = 0;
  loading: boolean = false;
  detailHidden: boolean = true;
  @Input("departmentsInput") departments: Array<Department>;

  constructor(
    private _departmentsServices: DepartmentsServices,
    private _areasServices: AreasServices
  ) { }

  ngOnInit() {
    this._departmentsServices.deparmentEvent.subscribe((department: Department) => {
      if(department != null) {
        this.areas = new Array<Area>();
        this.departmentIdSelected = department.departmentId;
        this.getAllAreasByDepartmentId(department);
        this.detailHidden = false;
      }
      else {
        this.detailHidden = true;
      }
    });
  }

  getAllAreasByDepartmentId(department: Department) {
    this.loading = true;
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
    if(checked) {
      this._departmentsServices.addArea(area, this.departmentIdSelected);
    }
    else {
      this._departmentsServices.removeArea(area, this.departmentIdSelected);
    }
  }
}
