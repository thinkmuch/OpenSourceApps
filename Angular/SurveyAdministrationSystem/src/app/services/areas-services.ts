import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AreasServices {

    areas = new Array<Area>();

    constructor(
        private _http: HttpClient
    ) { }

    update(area: Area) {
        return this._http.put("http://10.2.180.11:5999/api/Area", area);
    }

    save(name: string) {
        return this._http.post(`http://10.2.180.11:5999/api/Area?name=${name}`, {});
    }

    getAreasByDepartmentId(departmentId: number): Observable<Array<Area>> {
        return this._http.get<Array<Area>>(`http://10.2.180.11:5999/api/Department/${departmentId}/Areas`);
    }

    getAll(): Observable<Array<Area>> {
        return this._http.get<Array<Area>>("http://10.2.180.11:5999/api/Area");
    }

    remove(area: Area) {
        return this._http.delete(`http://10.2.180.11:5999/api/Area/${area.areaId}`);
    }
}