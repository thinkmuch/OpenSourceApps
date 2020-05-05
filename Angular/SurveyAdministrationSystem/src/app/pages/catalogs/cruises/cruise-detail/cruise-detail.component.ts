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
  sites: Array<Site> = new Array<Site>();
  departments: Array<Department> = new Array<Department>();
  departmentsByCruise: Array<Department>;
  sitesByCruise: Array<Site>;
  cruiseIdSelected: number = 0;
  detailHidden: boolean = false;
  loadingSites: boolean = false;
  loadingDepartments: boolean = false;
  @Input("cruisesInput") cruises: Array<Cruise>;
  
  constructor(
    private _siteServices: SitesServices,
    private _departmentServices: DepartmentsServices,
    private _cruiseServices: CruisesService
  ) { }

  ngOnInit() {
    this._cruiseServices.cruiseSelectedEvent.subscribe((cruiseId: number) => {
      if(cruiseId != null) {
        this.cruiseIdSelected = cruiseId;
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
    this.loadingSites = true;
    this.sites = new Array<Site>();

    this._cruiseServices.getSitesByCruiseId(this.cruiseIdSelected).subscribe(
      data => {
        this.sitesByCruise = data;
        this._siteServices.getAll().subscribe(
          data => {
            this.sites = data;
            this.loadingSites = false;
          },
          error => {
            console.log(error);
            this.loadingSites = false;
          }
        );
      },
      error => {
        console.log(error);
        this.loadingSites = false;
      }
    );
  }

  isSiteContained(site: Site) {
    return (this.sitesByCruise.find(a => a.siteId == site.siteId) != undefined);
  }

  isDepartmentContained(department: Department) {
    return (this.departmentsByCruise.find(d => d.departmentId == department.departmentId) != undefined);
  }

  getAllDepartments() {
    this.loadingDepartments = true;
    this.departments = new Array<Department>();

    this._departmentServices.getDepartmentsByCruiseId(this.cruiseIdSelected).subscribe(
      data => {
        this.departmentsByCruise = data;
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
      },
      error => {
        console.log(error);
        this.loadingDepartments = false;
      }
    );
  }

  onClickSite(site: Site, checked: boolean) {
    if(checked) {
      this._cruiseServices.addSite(this.cruiseIdSelected, site).subscribe(
        () => { },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this._cruiseServices.removeSite(this.cruiseIdSelected, site).subscribe(
        () => { },
        error => {
          console.log(error);
        }
      );
    }
  }

  onClickDepartment(department: Department, checked: boolean) {
    if(checked) {
      this._cruiseServices.addDepartment(this.cruiseIdSelected, department).subscribe(
        () => { },
        error => {
          console.log(error);
        }
      )
    }
    else {
      this._cruiseServices.removeDepartment(this.cruiseIdSelected, department).subscribe(
        () => { },
        error => {
          console.log(error);
        }
      );
    }
  }
}
