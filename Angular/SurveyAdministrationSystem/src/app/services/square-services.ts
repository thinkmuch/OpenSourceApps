import { Injectable, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';
import { Status } from '../enums/class-enum';
import { Site } from '../models/site';

@Injectable({
    providedIn: 'root'
})
export class SquareServices {

    private squares = new Array<Square>();
    @Output() squareSelectedEvent: EventEmitter<number>;

    constructor() {

        this.squareSelectedEvent = new EventEmitter<number>();

        let square1 = new Square();
        square1.id = 1;
        square1.name = "Nuevo Vallarta";
        square1.status = 1;

        let square2 = new Square();
        square2.id = 2;
        square2.name = "Riviera Maya";
        square2.status = 1;

        let square3 = new Square();
        square3.id = 3;
        square3.name = "Los Cabos";
        square3.status = 1;

        let square4 = new Square();
        square4.id = 4;
        square4.name = "Acapulco";
        square4.status = 1;

        let square5 = new Square();
        square5.id = 5;
        square5.name = "Puerto Peñasco";
        square5.status = 1;

        let square6 = new Square();
        square6.id = 6;
        square6.name = "Puerto Vallarta";
        square6.status = 1;

        let square7 = new Square();
        square7.id = 7;
        square7.name = "Mazatlán";
        square7.status = 1;

        this.squares.push(square1);
        this.squares.push(square2);
        this.squares.push(square3);
        this.squares.push(square4);
        this.squares.push(square5);
        this.squares.push(square6);
        this.squares.push(square7);
    }

    update(square: Square) {
        for(let i = 0; i < this.squares.length; i++) {
            if(this.squares[i].id == square.id) {
                this.squares[i].name = square.name;
                this.squares[i].status = square.status;
            }
        }
    }

    save(name: string) {
        let square = new Square();
        square.id = this.squares.length + 1;
        square.name = name;
        square.status = Status.Inactive;

        this.squares.push(square);
    }

    getAllSquares(): Array<Square> {
        return this.squares;
    }

    addHotel(hotel: Hotel) {

    }

    removeHotel(hotel: Hotel) {

    }

    addSite(site: Site) {
        
    }

    removeSite(site: Site) {
        
    }

    getAllHotels(): Array<Hotel> {

        return new Array<Hotel>();
    }
}