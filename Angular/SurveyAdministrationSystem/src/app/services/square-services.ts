import { Injectable, Output, EventEmitter } from '@angular/core';
import { Square } from '../models/square';
import { Hotel } from '../models/hotel';
import { Status } from '../enums/class-enum';

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
        square1.hotels = new Array<Hotel>();

            let hotel1Square1 = new Hotel();
            hotel1Square1.id = 1;
            hotel1Square1.name = "Grand Luxxe";

            let hotel2Square1 = new Hotel();
            hotel2Square1.id = 2;
            hotel2Square1.name = "The Grand Bliss";

            let hotel3Square1 = new Hotel();
            hotel3Square1.id = 3;
            hotel3Square1.name = "Mayan Palace";

            let hotel4Square1 = new Hotel();
            hotel4Square1.id = 4;
            hotel4Square1.name = "The Grand Mayan";

            let hotel5Square1 = new Hotel();
            hotel5Square1.id = 5;
            hotel5Square1.name = "The Cascades";

            let hotel6Square1 = new Hotel();
            hotel6Square1.id = 6;
            hotel6Square1.name = "Kingdom of the Sun";

        square1.hotels.push(hotel1Square1);
        square1.hotels.push(hotel2Square1);
        square1.hotels.push(hotel3Square1);
        square1.hotels.push(hotel4Square1);
        square1.hotels.push(hotel5Square1);
        square1.hotels.push(hotel6Square1);

        let square2 = new Square();
        square2.id = 2;
        square2.name = "Riviera Maya";
        square2.status = 1;
        square2.hotels = new Array<Hotel>();

            let hotel1Square2 = new Hotel();
            hotel1Square2.id = 1;
            hotel1Square2.name = "Grand Luxxe";

            let hotel2Square2 = new Hotel();
            hotel2Square2.id = 2;
            hotel2Square2.name = "The Grand Bliss";

            let hotel3Square2 = new Hotel();
            hotel3Square2.id = 3;
            hotel3Square2.name = "Mayan Palace";

            let hotel4Square2 = new Hotel();
            hotel4Square2.id = 4;
            hotel4Square2.name = "The Grand Mayan";

            let hotel5Square2 = new Hotel();
            hotel5Square2.id = 5;
            hotel5Square2.name = "The Bliss";

        square2.hotels.push(hotel1Square2);
        square2.hotels.push(hotel2Square2);
        square2.hotels.push(hotel3Square2);
        square2.hotels.push(hotel4Square2);
        square2.hotels.push(hotel5Square2);

        let square3 = new Square();
        square3.id = 3;
        square3.name = "Los Cabos";
        square3.status = 1;
        square3.hotels = new Array<Hotel>();

            let hotel1Square3 = new Hotel();
            hotel1Square3.id = 1;
            hotel1Square3.name = "The Grand Mayan";

        square3.hotels.push(hotel1Square3);

        let square4 = new Square();
        square4.id = 4;
        square4.name = "Acapulco";
        square4.status = 1;
        square4.hotels = new Array<Hotel>();

            let hotel1Square4 = new Hotel();
            hotel1Square4.id = 1;
            hotel1Square4.name = "Mayan Palace";

            let hotel2Square4 = new Hotel();
            hotel2Square4.id = 2;
            hotel2Square4.name = "The Grand Mayan";

        square4.hotels.push(hotel1Square4);
        square4.hotels.push(hotel2Square4);

        let square5 = new Square();
        square5.id = 5;
        square5.name = "Puerto Peñasco";
        square5.status = 1;
        square5.hotels = new Array<Hotel>();

            let hotel1Square5 = new Hotel();
            hotel1Square5.id = 1;
            hotel1Square5.name = "Mayan Palace";

            let hotel2Square5 = new Hotel();
            hotel2Square5.id = 2;
            hotel2Square5.name = "The Grand Mayan";

        square5.hotels.push(hotel1Square5);
        square5.hotels.push(hotel2Square5);

        let square6 = new Square();
        square6.id = 6;
        square6.name = "Puerto Vallarta";
        square6.status = 1;
        square6.hotels = new Array<Hotel>();

            let hotel1Square6 = new Hotel();
            hotel1Square6.id = 1;
            hotel1Square6.name = "Mayan Palace";

            let hotel2Square6 = new Hotel();
            hotel2Square6.id = 2;
            hotel2Square6.name = "The Estates";

        square6.hotels.push(hotel1Square6);
        square6.hotels.push(hotel2Square6);

        this.squares.push(square1);
        this.squares.push(square2);
        this.squares.push(square3);
        this.squares.push(square4);
        this.squares.push(square5);
        this.squares.push(square6);
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