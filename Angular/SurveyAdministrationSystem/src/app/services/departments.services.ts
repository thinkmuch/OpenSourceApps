import { Injectable, Output, EventEmitter } from '@angular/core';
import { Department } from '../models/department';
import { Area } from '../models/area';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsServices {

    @Output() deparmentEvent: EventEmitter<Department> = new EventEmitter<Department>();

    constructor(
        private _http: HttpClient
    ) {}

    addArea(area: Area, departmentId: number) {
        this._http.post(`http://10.2.180.10:5999/api/Department/${departmentId}/Area/${area.areaId}`, {}).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }

    getDepartmentsByHotelId(hotelId: number): Observable<Array<Department>> {
        return this._http.get<Array<Department>>(`http://10.2.180.10:5999/api/Hotel/${hotelId}/Departments`);
    }

    removeArea(area: Area, departmentId: number) {
        this._http.delete(`http://10.2.180.10:5999/api/Department/${departmentId}/Area/${area.areaId}`).subscribe(
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

    remove(department: Department) {
        return this._http.delete(`http://10.2.180.10:5999/api/Department/${department.departmentId}`);
    }

    getAll(): Observable<Array<Department>> {
        return this._http.get<Array<Department>>("http://10.2.180.10:5999/api/Department");
    }

    getAllActiveDepartments(): Observable<Array<Department>> {
        return this._http.get<Array<Department>>("http://10.2.180.10:5999/api/Department/Active");
    }

    getAreasByDepartmentId(department: Department): Observable<Array<Area>> {
        return this._http.get<Array<Area>>(`http://10.2.180.10:5999/api/Department/${department.departmentId}/Areas`);
    }

    getDepartmentsByCruiseId(cruiseId: number): Observable<Array<Department>> {
        return this._http.get<Array<Department>>(`http://10.2.180.10:5999/api/Department/Cruise/${cruiseId}`);
    }
}