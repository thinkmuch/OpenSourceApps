import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site';
import { SquareServices } from 'src/app/services/square-services';
import { SitesServices } from 'src/app/services/sites-service';

@Component({
  selector: 'app-square-detail',
  templateUrl: './square-detail.component.html',
  styleUrls: ['./square-detail.component.css']
})
export class SquareDetailComponent implements OnInit {

  sites: Array<Site>;

  constructor(
    private _squareServices: SquareServices,
    private _siteServices: SitesServices
  ) {
  }

  ngOnInit() {
    this.sites = new Array<Site>();

    this._squareServices.squareSelectedEvent.subscribe(squareId => {
      console.log(squareId);

    });
  }
}
