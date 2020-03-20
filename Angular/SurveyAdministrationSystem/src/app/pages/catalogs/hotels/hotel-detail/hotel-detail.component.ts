import { Component, OnInit } from '@angular/core';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { HotelServices } from 'src/app/services/hotel.services';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  departments: Array<Department>;
  departmentsOfHotel: Array<Department>;

  constructor(
    private _hotelServices: HotelServices,
    private _departmentServices: DepartmentsServices
  ) { 
    this.departments = new Array<Department>();
    this.departmentsOfHotel = new Array<Department>();
  }

  ngOnInit() {
    this._hotelServices.hotelSelectedEvent.subscribe(hotelId => {
      this.departmentsOfHotel = this._departmentServices.getDepartmentsByHotelId(hotelId);
      //this.departments = this._departmentServices.getAll();
    });
  }

  onClickDepartment(department:Department, checked: boolean) {
    if(checked) {
      this._hotelServices.addDepartment(department);
    }
    else {
      this._hotelServices.removeDepartment(department);
    }
  }
}
