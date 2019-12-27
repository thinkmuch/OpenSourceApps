import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  idHeroe: number = 0;
  heroe: Heroe;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) {
    
    this._activatedRoute.params.subscribe(params => {

      this.idHeroe = params['id'];
      this.heroe = this._heroesServices.getHeroe(this.idHeroe);
    });
  }

  ngOnInit() {
  }

}
