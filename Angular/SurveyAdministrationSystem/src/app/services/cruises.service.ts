import { Injectable } from '@angular/core';
import { Cruise } from '../models/cruise';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  constructor() { }

  getAll(): Array<Cruise> {
    let cruises = new Array<Cruise>();

    let cruise1 = new Cruise();
    cruise1.id = 1;
    cruise1.name = "Vidanta Elegant";
    cruise1.status = 1;

    cruises.push(cruise1);

    return cruises;
  }
}
