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

        let hotels = new Array<Hotel>();

        let hotel1 = new Hotel();
        hotel1.id = 1;
        hotel1.name = "The Estates";
        
        let hotel2 = new Hotel();
        hotel2.id = 2;
        hotel2.name = "Grand Luxxe";

        let hotel3 = new Hotel();
        hotel3.id = 3;
        hotel3.name = "The Grand Bliss"
        
        let hotel4 = new Hotel();
        hotel4.id = 4;
        hotel4.name = "The Grand Mayan";

        let hotel5 = new Hotel();
        hotel5.id = 5;
        hotel5.name = "The Bliss";

        let hotel6 = new Hotel();
        hotel6.id = 6;
        hotel6.name = "Mayan Palace";

        let hotel7 = new Hotel();
        hotel7.id = 7;
        hotel7.name = "Kingdom of the Sun";

        let hotel8 = new Hotel();
        hotel8.id = 8;
        hotel8.name = "The Cascades";

        let hotel9 = new Hotel();
        hotel9.id = 9;
        hotel9.name = "The States";

        hotels.push(hotel1);
        hotels.push(hotel2);
        hotels.push(hotel3);
        hotels.push(hotel4);
        hotels.push(hotel5);
        hotels.push(hotel6);
        hotels.push(hotel7);
        hotels.push(hotel8);
        hotels.push(hotel9);

        return hotels;
    }
}