import { Injectable } from '@angular/core';
import { Site } from '../models/site';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesServices {

  constructor(
    private _http: HttpClient
  ) {}

  update(site: Site) {
    return this._http.put("http://10.2.180.10:5999/api/Site", site);
  }

  save(name: string) {
    return this._http.post(`http://10.2.180.10:5999/api/Site?name=${name}`, {});
  }

  getAll() : Observable<Array<Site>> {
    return this._http.get<Array<Site>>("http://10.2.180.10:5999/api/Site");
  }
}
