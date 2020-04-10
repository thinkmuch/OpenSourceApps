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
  departments: Array<Department>  = new Array<Department>();
  departmentsByCruise: Array<Department>;
  sitesByCruise: Array<Site>;
  cruiseSelected: Cruise = new Cruise();
  detailHidden: boolean;
  loading: boolean;
  @Input("cruisesInput") cruises: Array<Cruise>;
  
  constructor(
    private _siteServices: SitesServices,
    private _departmentServices: DepartmentsServices,
    private _cruiseServices: CruisesService
  ) { }

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
    this.loading = true;
    this.sites = new Array<Site>();

    this._cruiseServices.getSitesByCruiseId(this.cruiseSelected).subscribe(
      data => {
        this.sitesByCruise = data;
        this._siteServices.getAll().subscribe(
          data => {
            this.sites = data;
            this.loading = false;
          },
          error => {
            console.log(error);
            this.loading = false;
          }
        );
      },
      error => {
        console.log(error);
        this.loading = false;
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
    this.departments = new Array<Department>();

    this._departmentServices.getDepartmentsByCruiseId(this.cruiseSelected.cruiseId).subscribe(
      data => {
        this.departmentsByCruise = data;

        this._departmentServices.getAll().subscribe(
          data => {
            this.departments = data;
          },
          error => {
            console.log(error);
          }
        );
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
          
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this._cruiseServices.removeSite(this.cruiseSelected, site).subscribe(
        data => {
          
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onClickDepartment(department: Department, checked: boolean) {
    if(checked) {
      this._cruiseServices.addDepartment(this.cruiseSelected, department).subscribe(
        data => {
          
        },
        error => {
          console.log(error);
        }
      )
    }
    else {
      this._cruiseServices.removeDepartment(this.cruiseSelected, department).subscribe(
        data => {
          
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
