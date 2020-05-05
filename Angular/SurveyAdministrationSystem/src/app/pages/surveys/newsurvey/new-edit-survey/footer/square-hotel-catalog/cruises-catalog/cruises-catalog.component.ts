import { Component, OnInit } from '@angular/core';
import { Cruise } from 'src/app/models/cruise';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { CruisesService } from 'src/app/services/cruises.service';

@Component({
  selector: 'app-cruises-catalog',
  templateUrl: './cruises-catalog.component.html',
  styleUrls: ['./cruises-catalog.component.css']
})
export class CruisesCatalogComponent implements OnInit {
  cruises: Array<Cruise> = new Array<Cruise>();

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices,
    private _cruiseServices: CruisesService
  ) { }

  ngOnInit() {
    this.getAllCruises();
  }

  isCruiseSelected(cruise: Cruise) {
    return (this._surveyCaptureServices.cruises.find(c => c.cruiseId == cruise.cruiseId) != undefined);
  }

  onClickCruise(cruise: Cruise, checked: boolean) {
    if(checked) {
      this._surveyCaptureServices.addCruise(cruise);
    }
    else {
      this._surveyCaptureServices.removeCruise(cruise);
    }
  }

  getAllCruises() {
    this._cruiseServices.getAllActiveCruises().subscribe(
      data => {
        this.cruises = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
