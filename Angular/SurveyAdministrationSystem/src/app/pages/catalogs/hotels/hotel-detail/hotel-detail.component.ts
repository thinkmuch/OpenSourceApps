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

  departments: Array<Department> = new Array<Department>();
  departmentsOfHotel: Array<Department> = new Array<Department>();
  hotelIdSelected: number = 0;
  loading: boolean = false;
  showDetail: boolean = false;

  constructor(
    private _hotelServices: HotelServices,
    private _departmentServices: DepartmentsServices
  ) { }

  ngOnInit() {
    this._hotelServices.hotelSelectedEvent.subscribe(hotelId => {
      this.hotelIdSelected = hotelId;
      this.loading = true;
      this.showDetail = false;
      this.departments = new Array<Department>();

      this._departmentServices.getAll().subscribe(
        data => {
          this.departments = data;
          this.loading = false;
          this.showDetail = true;
        },
        error => {
          console.log(error);
          this.loading = false;
          this.showDetail = true;
        }
      );
    });
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
