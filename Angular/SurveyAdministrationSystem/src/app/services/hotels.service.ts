import { Injectable } from '@angular/core';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  getAll(): Array<Hotel> {
      let hotels = new Array<Hotel>();

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
