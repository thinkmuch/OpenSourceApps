import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private _heroesServices: HeroesService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  }
}
