import { Injectable, Output, EventEmitter } from '@angular/core';
import { Department } from '../models/department';
import { Area } from '../models/area';
import { Status } from '../enums/class-enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsServices {

    private departments = new Array<Department>();
    @Output() deparmentEvent: EventEmitter<Department>;

    constructor(
        private _http: HttpClient
    ) {
        this.deparmentEvent = new EventEmitter<Department>();
    }

    addArea(area: Area, department: Department) {
        this._http.post(`http://10.2.180.10:5999/api/Department/${department.departmentId}/Area/${area.areaId}`, {}).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }

    getDepartmentsByHotelId(hotelId: number): Array<Department> {
        return new Array<Department>();
    }

    removeArea(area: Area, department: Department) {
        this._http.delete(`http://10.2.180.10:5999/api/Department/${department.departmentId}/Area/${area.areaId}`).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    update(department: Department) {
        return this._http.put("http://10.2.180.10:5999/api/Department", department);
    }

    save(name: string) {
        return this._http.post(`http://10.2.180.10:5999/api/Department?name=${name}`, {});
    }

    getAll(): Observable<Array<Department>> {
        return this._http.get<Array<Department>>("http://10.2.180.10:5999/api/Department");
    }

    getAreasByDepartmentId(department: Department): Observable<Array<Area>> {
        return this._http.get<Array<Area>>(`http://10.2.180.10:5999/api/Department/${department.departmentId}/Areas`);
    }
}