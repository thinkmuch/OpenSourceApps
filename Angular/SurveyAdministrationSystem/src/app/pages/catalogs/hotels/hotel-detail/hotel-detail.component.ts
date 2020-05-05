import { Component, OnInit, Input } from '@angular/core';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { HotelServices } from 'src/app/services/hotel.services';
import { Department } from 'src/app/models/department';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  departments: Array<Department> = new Array<Department>();
  departmentsOfHotel: Array<Department> = new Array<Department>();
  hotelIdSelected: number = 0;
  loadingDetail: boolean = false;
  showDetail: boolean = false;
  loadingDepartments: boolean = false;
  @Input("hotelsInput") hotels: Array<Hotel> = new Array<Hotel>();

  constructor(
    private _hotelServices: HotelServices,
    private _departmentServices: DepartmentsServices
  ) { }

  ngOnInit() {
    this._hotelServices.hotelSelectedEvent.subscribe(hotelId => {
      this.hotelIdSelected = hotelId;
      this.loadingDetail = true;
      this.showDetail = false;
      this.departments = new Array<Department>();

      this.getAllDepartments();
      /*
      this._departmentServices.getDepartmentsByHotelId(hotelId).subscribe(
        data => {
          this.departmentsOfHotel = data;
          
        },
        error => {
          console.log(error);
          this.loadingDetail = false;
          this.showDetail = true;
        }
      );*/
    });
  }

  getAllDepartments() {
    this.loadingDepartments = true;
    this._departmentServices.getAll().subscribe(
      data => {
        this.departments = data;
        this.loadingDepartments = false;
      },
      error => {
        console.log(error);
        this.loadingDepartments = false;
      }
    );
  }

  isDepartmentContained(department: Department) {
    return (this.departmentsOfHotel.find(d => d.departmentId == department.departmentId) != undefined);
  }

  onClickDepartment(department: Department, checked: boolean) {
    if(checked) {
      this._hotelServices.addDepartment(this.hotelIdSelected, department.departmentId);
    }
    else {
      this._hotelServices.removeDepartment(this.hotelIdSelected, department.departmentId);
    }
  }
}
