import { Injectable, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HotelServices {

    private hotels: Array<Hotel>;
    @Output() hotelSelectedEvent: EventEmitter<number>;
    
    constructor(private _http: HttpClient) { }

    addDepartment(department: Department) {

    }

    removeDepartment(department: Department) {

    }

    getAll(): Observable<Array<Hotel>> {
        return this._http.get<Array<Hotel>>("http://10.2.180.10:5999/api/Hotel");
    }

    update(hotel: Hotel) {

    }

    save(name: string) {

    }

    getHotelsBySquareId(squareId)  {
        return new Array<Hotel>();
    }
}