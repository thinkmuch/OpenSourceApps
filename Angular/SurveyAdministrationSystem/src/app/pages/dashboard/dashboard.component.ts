import { Component, OnInit } from '@angular/core';
import { SquareServices } from 'src/app/services/square-services';
import { Square } from 'src/app/models/square';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  squares: Array<Square>;

  constructor(
    private _squaresServices: SquareServices
  ) { 
    this.squares = this._squaresServices.getAllSquares()
  }

  ngOnInit() {
    
  }

}
