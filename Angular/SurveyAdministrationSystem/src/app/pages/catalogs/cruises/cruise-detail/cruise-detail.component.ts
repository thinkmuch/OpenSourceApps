import { Component, OnInit, Input } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SitesServices } from 'src/app/services/sites-service';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { CruisesService } from 'src/app/services/cruises.service';
import { Cruise } from 'src/app/models/cruise';

@Component({
  selector: 'app-cruise-detail',
  templateUrl: './cruise-detail.component.html',
  styleUrls: ['./cruise-detail.component.css']
})
export class CruiseDetailComponent implements OnInit {

  sites: Array<Site>;
  departments: Array<Department>;
  cruiseSelected: Cruise;
  detailHidden: boolean;
  @Input("cruisesInput") cruises: Array<Cruise>;
  
  constructor(
    private _siteServices: SitesServices,
    private _departmentServices: DepartmentsServices,
    private _cruiseServices: CruisesService
  ) {
    this.sites = new Array<Site>();
    this.departments = new Array<Department>();
    this.cruiseSelected = new Cruise();
  }

  ngOnInit() {
    this._cruiseServices.cruiseSelectedEvent.subscribe(cruise => {
      if(cruise != null) {
        this.cruiseSelected = cruise;
        this.getAllSites();
        this.getAllDepartments();
        this.detailHidden = false;
      }
      else {
        
        this.detailHidden = true;
      }
    });

    this.detailHidden = true;
  }

  getAllSites() {
    this._siteServices.getAll().subscribe(
      data => {
        this.sites = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getAllDepartments() {
    this._departmentServices.getAll().subscribe(
      data => {
        this.departments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onClickSite(site: Site, checked: boolean) {
    if(checked) {
      this._cruiseServices.addSite(this.cruiseSelected, site).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this._cruiseServices.removeSite(this.cruiseSelected, site).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onClickDepartment(department: Department, checked: boolean) {
    if(checked) {
      this._cruiseServices.addDepartment(this.cruiseSelected, department);
    }
    else {
      this._cruiseServices.removeDepartment(this.cruiseSelected, department);
    }
  }
}
