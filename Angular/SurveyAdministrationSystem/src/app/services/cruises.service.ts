import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cruise } from '../models/cruise';
import { Site } from '../models/site';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  @Output() cruiseSelectedEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<Array<Cruise>> {
    return this._http.get<Array<Cruise>>("http://10.2.180.11:5999/api/Cruise");
  }

  getAllActiveCruises(): Observable<Array<Cruise>> {
    return this._http.get<Array<Cruise>>("http://10.2.180.11:5999/api/Cruise/Active");
  }

  addSite(cruiseId: number, site: Site) {
    return this._http.post(`http://10.2.180.11:5999/api/Cruise/${cruiseId}/Site/${site.siteId}`, {});
  }

  removeSite(cruiseId: number, site: Site) {
    return this._http.delete(`http://10.2.180.11:5999/api/Cruise/${cruiseId}/Site/${site.siteId}`);
  }

  getSitesByCruiseId(cruiseId: number): Observable<Array<Site>> {
    return this._http.get<Array<Site>>(`http://10.2.180.11:5999/api/Cruise/${cruiseId}/Sites`);
  }

  addDepartment(cruiseId: number, department: Department) {
    return this._http.post(`http://10.2.180.11:5999/api/Cruise/${cruiseId}/Department/${department.departmentId}`, {});
  }

  removeDepartment(cruiseId: number, department: Department) {
    return this._http.delete(`http://10.2.180.11:5999/api/Cruise/${cruiseId}/Department/${department.departmentId}`);
  }

  update(cruise: Cruise) {
    return this._http.put("http://10.2.180.11:5999/api/Cruise", cruise);
  }

  save(name: string) {
    return this._http.post(`http://10.2.180.11:5999/api/Cruise?name=${name}`, {});
  }
}
