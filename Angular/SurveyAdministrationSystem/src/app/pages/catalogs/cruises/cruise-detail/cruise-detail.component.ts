import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SitesServices } from 'src/app/services/sites-service';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';

@Component({
  selector: 'app-cruise-detail',
  templateUrl: './cruise-detail.component.html',
  styleUrls: ['./cruise-detail.component.css']
})
export class CruiseDetailComponent implements OnInit {

  sites: Array<Site>;
  departments: Array<Department>;

  constructor(
    private _sitesServices: SitesServices,
    private _departmentServices: DepartmentsServices
  ) { }

  ngOnInit() {
    this.sites = this._sitesServices.getAll();
    this.departments = this._departmentServices.getAll();
  }

}
