import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../services/heroes.services';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html'
})
export class ResultSearchComponent implements OnInit {

  name: string = "";
  heroes: Heroe[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      this.heroes = this._heroesServices.searchHeroe(this.name);
      console.log(this.heroes);
    });
  }

}
