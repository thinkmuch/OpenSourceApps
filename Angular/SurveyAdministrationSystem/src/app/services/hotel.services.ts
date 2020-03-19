import { Injectable, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Status } from '../enums/class-enum';
import { Department } from '../models/department';
@Injectable({
    providedIn: 'root'
})
export class HotelServices {

    private hotels: Array<Hotel>;
    @Output() hotelSelectedEvent: EventEmitter<number>;
    
    constructor() {

        this.hotelSelectedEvent = new EventEmitter<number>();

        this.hotels = new Array<Hotel>();

        let hotel1 = new Hotel();
        hotel1.id = 1;
        hotel1.name = "The Estates";
        hotel1.status = 1;
        
        let hotel2 = new Hotel();
        hotel2.id = 2;
        hotel2.name = "Grand Luxxe";
        hotel2.status = 1;

        let hotel3 = new Hotel();
        hotel3.id = 3;
        hotel3.name = "The Grand Bliss";
        hotel3.status = 1;
        
        let hotel4 = new Hotel();
        hotel4.id = 4;
        hotel4.name = "The Grand Mayan";
        hotel4.status = 1;

        let hotel5 = new Hotel();
        hotel5.id = 5;
        hotel5.name = "The Bliss";
        hotel5.status = 1;

        let hotel6 = new Hotel();
        hotel6.id = 6;
        hotel6.name = "Mayan Palace";
        hotel6.status = 1;

        let hotel7 = new Hotel();
        hotel7.id = 7;
        hotel7.name = "Kingdom of the Sun";
        hotel7.status = 1;

        let hotel8 = new Hotel();
        hotel8.id = 8;
        hotel8.name = "The Cascades";
        hotel8.status = 1;

        let hotel9 = new Hotel();
        hotel9.id = 9;
        hotel9.name = "The States";
        hotel9.status = 1;

        let hotel10 = new Hotel();
        hotel10.id = 10;
        hotel10.name = "Sea Garden";
        hotel10.status = 1;

        this.hotels.push(hotel1);
        this.hotels.push(hotel2);
        this.hotels.push(hotel3);
        this.hotels.push(hotel4);
        this.hotels.push(hotel5);
        this.hotels.push(hotel6);
        this.hotels.push(hotel7);
        this.hotels.push(hotel8);
        this.hotels.push(hotel9);
        this.hotels.push(hotel10);
    }

    addDepartment(department: Department) {

    }

    removeDepartment(department: Department) {

    }

    getAll(): Array<Hotel> {
        return this.hotels;
    }

    update(hotel: Hotel) {
        for(let i = 0; i < this.hotels.length; i++) {
            if(this.hotels[i].id == hotel.id) {
                this.hotels[i].status = hotel.status;
                this.hotels[i].name = hotel.name;
            }
        }
    }

    save(name: string) {
        let hotel = new Hotel;
        hotel.id = this.hotels.length + 1;
        hotel.name = name;
        hotel.status = Status.Inactive;

        this.hotels.push(hotel);
    }

    getHotelsBySquareId(squareId) {
        
        let hotelsBySquare = new Array<Hotel>();

        switch(squareId)
        {
            case 1:
                {
                    let hotel2 = new Hotel();
                    hotel2.id = 2;
                    hotel2.name = "Grand Luxxe";
                    hotel2.status = 1;

                    let hotel3 = new Hotel();
                    hotel3.id = 3;
                    hotel3.name = "The Grand Bliss";
                    hotel3.status = 1;

                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    let hotel4 = new Hotel();
                    hotel4.id = 4;
                    hotel4.name = "The Grand Mayan";
                    hotel4.status = 1;
                    
                    let hotel7 = new Hotel();
                    hotel7.id = 7;
                    hotel7.name = "Kingdom of the Sun";
                    hotel7.status = 1;

                    let hotel8 = new Hotel();
                    hotel8.id = 8;
                    hotel8.name = "The Cascades";
                    hotel8.status = 1;

                    let hotel10 = new Hotel();
                    hotel10.id = 10;
                    hotel10.name = "Sea Garden";
                    hotel10.status = 1;

                    hotelsBySquare.push(hotel2);
                    hotelsBySquare.push(hotel3);
                    hotelsBySquare.push(hotel6);
                    hotelsBySquare.push(hotel4);
                    hotelsBySquare.push(hotel7);
                    hotelsBySquare.push(hotel8);
                    hotelsBySquare.push(hotel10);
                }
                break;
            case 2:
                {
                    let hotel2 = new Hotel();
                    hotel2.id = 2;
                    hotel2.name = "Grand Luxxe";
                    hotel2.status = 1;

                    let hotel3 = new Hotel();
                    hotel3.id = 3;
                    hotel3.name = "The Grand Bliss";
                    hotel3.status = 1;

                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    let hotel4 = new Hotel();
                    hotel4.id = 4;
                    hotel4.name = "The Grand Mayan";
                    hotel4.status = 1;

                    let hotel5 = new Hotel();
                    hotel5.id = 5;
                    hotel5.name = "The Bliss";
                    hotel5.status = 1;

                    hotelsBySquare.push(hotel2);
                    hotelsBySquare.push(hotel3);
                    hotelsBySquare.push(hotel6);
                    hotelsBySquare.push(hotel4);
                    hotelsBySquare.push(hotel5);
                }
                break;
            case 3:
                {
                    let hotel4 = new Hotel();
                    hotel4.id = 4;
                    hotel4.name = "The Grand Mayan";
                    hotel4.status = 1;

                    hotelsBySquare.push(hotel4);
                }
                break;
            case 4:
                {
                    let hotel4 = new Hotel();
                    hotel4.id = 4;
                    hotel4.name = "The Grand Mayan";
                    hotel4.status = 1;

                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    hotelsBySquare.push(hotel4);
                    hotelsBySquare.push(hotel6);
                }
                break;
            case 5:
                {
                    let hotel4 = new Hotel();
                    hotel4.id = 4;
                    hotel4.name = "The Grand Mayan";
                    hotel4.status = 1;

                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    hotelsBySquare.push(hotel4);
                    hotelsBySquare.push(hotel6);
                }
                break;
            case 6:
                {
                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    let hotel9 = new Hotel();
                    hotel9.id = 9;
                    hotel9.name = "The States";
                    hotel9.status = 1;

                    hotelsBySquare.push(hotel6);
                    hotelsBySquare.push(hotel9);
                }
                break;
            case 7:
                {
                    let hotel6 = new Hotel();
                    hotel6.id = 6;
                    hotel6.name = "Mayan Palace";
                    hotel6.status = 1;

                    hotelsBySquare.push(hotel6);
                }
                break;
        }

        return hotelsBySquare;
    }
}