import { Component, OnInit } from '@angular/core';
import { SquareServices } from 'src/app/services/square-services';

@Component({
  selector: 'app-square-detail',
  templateUrl: './square-detail.component.html',
  styleUrls: ['./square-detail.component.css']
})
export class SquareDetailComponent implements OnInit {

  constructor(
    private _squareServices: SquareServices
  ) { }

  ngOnInit() {
    this._squareServices.squareSelectedEvent.subscribe(squareId => {
      console.log(squareId);
    });
  }
}
