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
    
    constructor(private _http: HttpClient) {
        this.hotelSelectedEvent = new EventEmitter<number>();
     }

    addDepartment(hotelId: number, departmentId: number) {
        return this._http.post(`http://10.2.180.10:5999/api/Hotel/${hotelId}/Department/${departmentId}`, {}).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    removeDepartment(hotelId: number, departmentId: number) {
        return this._http.delete(`http://10.2.180.10:5999/api/Hotel/${hotelId}/Department/${departmentId}`).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }

    getAll(): Observable<Array<Hotel>> {
        return this._http.get<Array<Hotel>>("http://10.2.180.10:5999/api/Hotel");
    }

    update(hotel: Hotel) {
        return this._http.put("http://10.2.180.10:5999/api/Hotel", hotel);
    }

    save(name: string) {
        return this._http.post(`http://10.2.180.10:5999/api/Hotel?name=${name}`, {});
    }

    getHotelsBySquareId(squareId: number): Observable<Array<Hotel>>  {
        return this._http.get<Array<Hotel>>(`http://10.2.180.10:5999/api/Square/${squareId}/Hotels`);
    }
}