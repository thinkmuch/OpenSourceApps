import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/models/square';
import { SquareServices } from 'src/app/services/square-services';
import { Hotel } from 'src/app/models/hotel';
import { HotelServices } from 'src/app/services/hotel.services';
import { Cruise } from 'src/app/models/cruise';
import { CruisesService } from 'src/app/services/cruises.service';
import { MatDialogRef } from '@angular/material';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-square-hotel-catalog',
  templateUrl: './square-hotel-catalog.component.html',
  styleUrls: ['./square-hotel-catalog.component.css']
})
export class SquareHotelCatalogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SquareHotelCatalogComponent>
  ) { }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}
