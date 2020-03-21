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

  @Output() cruiseSelectedEvent: EventEmitter<Cruise>;

  constructor(
    private _http: HttpClient
  ) { 
    this.cruiseSelectedEvent = new EventEmitter<Cruise>();
  }

  getAll(): Observable<Array<Cruise>> {
    return this._http.get<Array<Cruise>>("http://10.2.180.10:5999/api/Cruise");
  }

  addSite(cruise: Cruise, site: Site) {
    return this._http.post(`http://10.2.180.10:5999/api/Cruise/${cruise.cruiseId}/Site/${site.siteId}`, {});
  }

  removeSite(cruise: Cruise, site: Site) {
    return this._http.delete(`http://10.2.180.10:5999/api/Cruise/${cruise.cruiseId}/Site/${site.siteId}`);
  }

  getSitesByCruiseId(cruise: Cruise): Observable<Array<Site>> {
    return this._http.get<Array<Site>>(`http://10.2.180.10:5999/api/Cruise/${cruise.cruiseId}/Sites`);
  }

  addDepartment(cruise: Cruise, department: Department) {

  }

  removeDepartment(cruise: Cruise, department: Department) {

  }

  update(cruise: Cruise) {
    return this._http.put("http://10.2.180.10:5999/api/Cruise", cruise);
  }

  save(name: string) {
    return this._http.post(`http://10.2.180.10:5999/api/Cruise?name=${name}`, {});
  }
}
