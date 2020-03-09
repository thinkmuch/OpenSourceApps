import { Injectable, EventEmitter } from '@angular/core';
import { Cruise } from '../models/cruise';
import { Status } from '../enums/class-enum';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  private cruises = new Array<Cruise>();
  public cruiseIdEvent: EventEmitter<number>;

  constructor() { 
    let cruise1 = new Cruise();
    cruise1.id = 1;
    cruise1.name = "Vidanta Elegant";
    cruise1.status = 1;

    this.cruises.push(cruise1);
    this.cruiseIdEvent = new EventEmitter<number>();
  }

  getAll(): Array<Cruise> {
    return this.cruises;
  }

  update(cruise: Cruise) {
    for(let i = 0; i < this.cruises.length; i++) {
      if(this.cruises[i].id == cruise.id) {
        this.cruises[i].name = cruise.name;
        break;
      }
    }
  }

  save(name: string) {
    let cruise = new Cruise();
    cruise.id = this.cruises.length + 1;
    cruise.name = name;
    cruise.status = Status.Inactive;

    this.cruises.push(cruise);
  }
}
