import { Component, OnInit, Input } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SitesServices } from 'src/app/services/sites-service';
import { Department } from 'src/app/models/department';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { CruisesService } from 'src/app/services/cruises.service';

@Component({
  selector: 'app-cruise-detail',
  templateUrl: './cruise-detail.component.html',
  styleUrls: ['./cruise-detail.component.css']
})
export class CruiseDetailComponent implements OnInit {

  sites: Array<Site>;
  sitesByCruise: Array<Site>;
  departments: Array<Department>;
  departmentsByCruise: Array<Department>;
  @Input("cruiseIdInput") cruiseId: number;

  constructor(
    private _sitesServices: SitesServices,
    private _departmentServices: DepartmentsServices,
    private _cruiseServices: CruisesService
  ) { 
    this._cruiseServices.cruiseIdEvent.subscribe(cruiseId => {
      this.sitesByCruise = this._sitesServices.getSitesByCruiseId(this.cruiseId);
      this.sites = this._sitesServices.getAll();

      this.departmentsByCruise = this._departmentServices.getDepartmentsByCruiseId(this.cruiseId);
      this.departments = this._departmentServices.getAll();
    });
  }

  ngOnInit() {
    
  }
}
