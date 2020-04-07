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

    private squares = new Array<Square>();
    @Output() squareSelectedEvent: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private _http: HttpClient
    ) { }

    update(square: Square) {
        
    }

    save(name: string) {
        
    }

    getAll(): Observable<Array<Square>> {
        return this._http.get<Array<Square>>("http://10.2.180.10:5999/api/Square");
    }

    addHotel(hotel: Hotel) {

    }

    removeHotel(hotel: Hotel) {

    }

    addSite(site: Site) {
        
    }

    removeSite(site: Site) {
        
    }
}