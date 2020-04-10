import { Injectable, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';
import { Site } from '../models/site';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SquareServices {

    @Output() squareSelectedEvent: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private _http: HttpClient
    ) { }

    update(square: Square) {
        return this._http.put("http://10.2.180.10:5999/api/Square", square);
    }

    save(name: string) {
        return this._http.post(`http://10.2.180.10:5999/api/Square?name=${name}`, {});
    }

    getAll(): Observable<Array<Square>> {
        return this._http.get<Array<Square>>("http://10.2.180.10:5999/api/Square");
    }

    addHotel(squareId: number, hotelId: number) {
        return this._http.post(`http://10.2.180.10:5999/api/Square/${squareId}/Hotel/${hotelId}`, {});
    }

    removeHotel(squareId: number, hotelId: number) {
        return this._http.delete(`http://10.2.180.10:5999/api/Square/${squareId}/Hotel/${hotelId}`);
    }

    addSite(site: Site) {
        
    }

    removeSite(site: Site) {
        
    }
}