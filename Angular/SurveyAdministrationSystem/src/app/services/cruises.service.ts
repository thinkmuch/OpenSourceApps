import { Injectable, Output, EventEmitter } from '@angular/core';
import { Cruise } from '../models/cruise';
import { Status } from '../enums/class-enum';
import { Site } from '../models/site';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class CruisesService {

  private cruises = new Array<Cruise>();
  @Output() cruiseSelectedEvent: EventEmitter<Cruise>;

  constructor() { 

    this.cruiseSelectedEvent = new EventEmitter<Cruise>();

    let cruise1 = new Cruise();
    cruise1.id = 1;
    cruise1.name = "Vidanta Elegant";
    cruise1.status = 1;

    this.cruises.push(cruise1);
  }

  getAll(): Array<Cruise> {
    return this.cruises;
  }

  addSite(cruise: Cruise, site: Site) {

  }

  removeSite(cruise: Cruise, site: Site) {

  }

  addDepartment(cruise: Cruise, department: Department) {

  }

  removeDepartment(cruise: Cruise, department: Department) {

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
